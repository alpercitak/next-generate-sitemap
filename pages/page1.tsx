import type { NextPage } from 'next';
import { useCounterStore } from '../stores/counter';

const Page1: NextPage = () => {
  const counter = useCounterStore((state) => state.counter);
  const increment = useCounterStore((state) => state.increment);

  return (
    <>
      <div>Page1</div>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
      <div>{counter}</div>
    </>
  );
};

export default Page1;
