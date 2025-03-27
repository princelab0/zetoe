import { StateCreator } from "zustand";
type State = {
  grokMessages: any;
};

type Actions = {
  setGrokMessages: (messages: any) => void;
};

export type GroqChatStore = State & Actions;

export const createGrokMessageSlice: StateCreator<any, [], [], any> = (set) => {
  return {
    grokMessages: [],
    setGrokMessages: (messages: any) => {
      set({ grokMessages: messages });
    },
  };
};
