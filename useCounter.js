import { useState } from 'react';

const useCounter = (initialCounter = 10) => {
  const [counter, setCounter] = useState(initialCounter);
  // Ejemplo mandando factor
  // const increment = (factor = 1) => setCounter(counter + factor);
  // const decrement = (factor = 1) => setCounter(counter - factor);

  const increment = () =>
    setCounter((prevCounter) => (prevCounter === 30 ? 1 : prevCounter + 1));
  const decrement = () =>
    counter - 1 === 0
      ? setCounter(30)
      : setCounter((prevCounter) => prevCounter - 1);
  const reset = () => counter !== 1 && setCounter(initialCounter);
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
