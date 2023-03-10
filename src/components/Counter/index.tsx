import "./index.less";
import { useCounter } from "@/hooks";

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="counter">
      <div className="counter-text">Current Count is:{count}</div>
      <div className="counter-actions">
        <button onClick={increment} className="counter-actions-btn">
          increment
        </button>
        <button onClick={reset} className="counter-actions-btn">
          reset
        </button>
        <button onClick={decrement} className="counter-actions-btn">
          decrement
        </button>
      </div>
    </div>
  );
};
