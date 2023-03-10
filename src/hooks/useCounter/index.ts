import { useState, useCallback } from "react";

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((prevCount: number) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount: number) => prevCount - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(0)
  },[])

  return {
    count,
    reset,
    increment,
    decrement,
  };
};
