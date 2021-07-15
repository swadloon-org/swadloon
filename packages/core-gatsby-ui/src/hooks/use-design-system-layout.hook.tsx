import { createPersistedState } from '@newrade/core-react-ui/src';

export const useLayoutState = createPersistedState<'centered' | 'full-width'>('ds-layout');
