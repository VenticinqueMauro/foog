import { create } from 'zustand'

type Store = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: () => void;
}

export const useStore = create<Store>()((set) => ({
    isSidebarOpen: false,
    setIsSidebarOpen: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}))
