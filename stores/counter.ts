import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useCounterStore = create(
  persist(
    (set, get) => ({
      counter: 0,
      increment: () => set((state: any) => ({ counter: state.counter + 1 })),
    }),
    {
      name: 'next-generate-sitemap-counter', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
