import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface CounterStore {
  counter: number;
  increment: () => void;
}

export const useCounterStore = create<CounterStore>()(
  persist(
    (set) => ({
      counter: 0,
      increment: () => set((state) => ({ counter: state.counter + 1 })),
    }),
    {
      name: 'next-generate-sitemap-counter',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
