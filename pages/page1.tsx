import type { NextPage } from 'next';
import useCounterStore from '../stores/counter';

const Page1: NextPage = () => {
  const { counter, increment } = useCounterStore((state: any) => {
    return { counter: state.counter, increment: state.increment };
  });

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
