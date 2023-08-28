import { create } from 'zustand';

const useCounterStore = create((set) => {
  return {
    counter: 0,
    increment: () => set((state: any) => ({ counter: state.counter + 1 })),
  };
});

export default useCounterStore;
