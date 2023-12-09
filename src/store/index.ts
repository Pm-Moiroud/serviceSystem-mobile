import {create} from 'zustand';
import {subscribeWithSelector} from 'zustand/middleware';

import createUserSlice, {UserSlice} from '~store/userSlice';

export type MainSlice = UserSlice;

const useStore = create<MainSlice>()(
  subscribeWithSelector((...a) => ({
    ...createUserSlice(...a),
  })),
);

export default useStore;
