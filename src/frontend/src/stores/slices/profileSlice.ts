import type { StateCreator } from "zustand";

type State = {
  ProfileData: {
    id?: string;
    avatar?: string;
    full_name?: string;
    email?: string;
    address?: string;
    date_of_birth?: string;
    age?: number;
  };
};
type Actions = {
  loadProfileData: (profile: State["ProfileData"]) => void;
};
export type ProfileStore = State & Actions;
export const createProfileSlice: StateCreator<
  ProfileStore,
  [],
  [],
  ProfileStore
> = (set) => ({
  ProfileData: {},
  loadProfileData: (profile) =>
    set((state) => ({
      ...state,
      ProfileData: { ...state.ProfileData, ...profile },
    })),
});
