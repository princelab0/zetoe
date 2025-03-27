import { StateCreator } from "zustand";
type State = {
  isWidgetVisible: boolean;
  activeWidgets: string[];
};
type Actions = {
  setActiveWidgets: (widgets: string[]) => void;
  setIsWidgetVisible: (visible: boolean) => void;
  toggleWidgetVisibility: () => void;
};

export type WidgetStore = State & Actions;
export const createWidgetSlice: StateCreator<
  WidgetStore,
  [],
  [],
  WidgetStore
> = (set) => ({
  isWidgetVisible: false,
  activeWidgets: [], // Initial empty, will load from localStorage
  setActiveWidgets: (widgets) => set({ activeWidgets: widgets }),
  setIsWidgetVisible: (visible) => set({ isWidgetVisible: visible }),
  toggleWidgetVisibility: () =>
    set((state) => ({ isWidgetVisible: !state.isWidgetVisible })),
});
