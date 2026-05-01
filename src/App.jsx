import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";
import { useState } from "react";

export const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState(0);
  return (
    <>
      <h1>Hii</h1>
      <div>
        <button>Balance</button>
        <button>Income</button>
        <button>Expenses</button>
      </div>
      // Transaction form
      <div>
        <h1>Transaction Form</h1>
      </div>
      //// Transaction history
      <div>
        <h1>Transaction History</h1>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(Number(num)))}>
          Increment by amount
        </button>
      </div>
    </>
  );
};
