import { createPersistedState } from '@newrade/core-react-ui';

export const useLayoutState = createPersistedState<'centered' | 'full-width'>('ds-layout');
