import {StateCreator} from 'zustand';

import {MainSlice} from '.';

export interface UserSlice {
  rootLoading: boolean;
}

const createUserSlice: StateCreator<MainSlice, [], [], UserSlice> = () => ({
  rootLoading: true,
});

export default createUserSlice;
