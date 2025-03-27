// stores/userStore.ts
import { create } from "zustand";

interface UserState {
  user: any; // Replace with your user type
  loading: boolean; // Add a loading state
  setUser: (user: any) => void;
  initializeUser: (user: any) => void;
  setLoading: (loading: boolean) => void; // Add this method
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  loading: true, // Initialize loading as true
  setUser: (user) => set({ user }),
  initializeUser: (user) => set({ user, loading: false }), // Set loading to false after initialization
  setLoading: (loading) => set({ loading }), // Method to update loading state
}));
