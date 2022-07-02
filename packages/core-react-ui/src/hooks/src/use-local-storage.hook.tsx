import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';

import { useEventListener } from './use-event-listener.js';

type StorageAPI<State> = {
  get: (key: string, defaultValue?: State) => State;
  set: (key: string, value: State) => void;
};

type GlobalStorage = { [key: string]: { callbacks: ((value: any) => any)[]; value: any } };
type GlobalStorageAPI = {
  deregister(): void;
  emit(value: any): void;
};

const globalState: GlobalStorage = {};

function createGlobalState(
  key: string,
  thisCallback: (value: any) => any,
  initialValue: any
): GlobalStorageAPI {
  if (!globalState[key]) {
    globalState[key] = { callbacks: [], value: initialValue };
  }
  globalState[key].callbacks.push(thisCallback);
  return {
    deregister() {
      const arr = globalState[key].callbacks;
      const index = arr.indexOf(thisCallback);
      if (index > -1) {
        arr.splice(index, 1);
      }
    },
    emit(value: any) {
      if (globalState[key].value !== value) {
        globalState[key].value = value;
        globalState[key].callbacks.forEach((callback) => {
          if (thisCallback !== callback) {
            callback(value);
          }
        });
      }
    },
  };
}

export function useLocalStorage<State>(
  initialState: State,
  key: string,
  { get, set }: StorageAPI<State>
): [State, Dispatch<SetStateAction<State>>] {
  const globalState = useRef<GlobalStorageAPI>(null);
  const [state, setState] = useState(() => get(key, initialState));

  // subscribe to `storage` change events
  useEventListener('storage', ({ key: k, newValue }) => {
    if (k === key) {
      if (!newValue) {
        return;
      }
      const newState = JSON.parse(newValue);
      if (state !== newState) {
        setState(newState);
      }
    }
  });

  // only called on mount
  useEffect(() => {
    // register a listener that calls `setState` when another instance emits
    if (globalState.current) {
      // @ts-ignore
      globalState.current = createGlobalState(key, setState, initialState);
    }

    return () => {
      if (globalState.current) {
        globalState.current.deregister();
      }
    };
  }, [initialState, key]);

  const persistentSetState = useCallback(
    (newState: State) => {
      const newStateValue = typeof newState === 'function' ? newState(state) : newState;

      // persist to localStorage
      set(key, newStateValue);

      setState(newStateValue);

      // inform all of the other instances in this tab
      if (globalState.current) {
        globalState.current.emit(newState);
      }
    },
    [state, set, key]
  );

  return [state, persistentSetState as Dispatch<SetStateAction<State>>];
}

function createLocalStorage<State>(provider: Storage): StorageAPI<State> {
  return {
    get(key, defaultValue) {
      const json = provider.getItem(key);
      // eslint-disable-next-line no-nested-ternary
      return json === null || typeof json === 'undefined'
        ? typeof defaultValue === 'function'
          ? (defaultValue as Function)()
          : defaultValue
        : (JSON.parse(json) as State);
    },
    set(key, value) {
      provider.setItem(key, JSON.stringify(value));
    },
  };
}

export function createPersistedState<State>(
  key: string,
  provider = getLocalStorageProvider()
): (value: State) => [State, Dispatch<SetStateAction<State>>] {
  if (!provider) {
    return useState;
  }
  const storage = createLocalStorage<State>(provider);
  return (initialState: State) => useLocalStorage<State>(initialState, key, storage);
}

function getLocalStorageProvider(): Storage | null {
  // @ts-ignore
  if (typeof global !== 'undefined' && global.localStorage) {
    // @ts-ignore
    return global.localStorage;
  }
  if (typeof globalThis !== 'undefined' && globalThis.localStorage) {
    return globalThis.localStorage;
  }
  if (typeof window !== 'undefined' && window.localStorage) {
    return window.localStorage;
  }
  if (typeof localStorage !== 'undefined') {
    return localStorage;
  }
  return null;
}
