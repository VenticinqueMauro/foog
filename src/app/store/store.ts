import { create } from 'zustand';
import { SearchResult } from '../projects/GetImages';

type Store = {
    isSidebarOpen: boolean;
    folder: string;
    recursos: SearchResult[];
    images: SearchResult[];
    setIsSidebarOpen: () => void;
    setFolder: (folder: string) => void;
    setRecursos: (resources: SearchResult[]) => void;
    setImages: (resources: SearchResult[]) => void;
    filterByFolder: (folder: string) => void;
};

export const useStore = create<Store>()((set) => ({
    isSidebarOpen: false,
    folder: 'ramdom',
    recursos: [],
    images: [],
    imagesPresentations: [],
    setIsSidebarOpen: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    setFolder: (folder) => set({ folder }),
    setRecursos: (resources) => set({ recursos: resources }),
    setImages: (resources) => set({ images: resources }),
    filterByFolder: (folder) => {
        set((state) => ({
            images: state.recursos.filter((image) => image.folder === folder),
        }));
    }
}));
