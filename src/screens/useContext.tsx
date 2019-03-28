import { RouteComponentProps } from "@reach/router";
import React, { useContext, useState } from "react";

interface ICounterContext {
  count: number;
  increase: any;
  decrease: any;
}

const CountContext = React.createContext<ICounterContext | any>("counter");

function Counter() {
  const { count, increase, decrease }: ICounterContext = useContext(
    CountContext
  );
  return (
    <div>
      <button onClick={decrease}>-</button>
      <span data-testid="count">{count}</span>
      <button onClick={increase}>+</button>
    </div>
  );
}

const UseContext = (_: RouteComponentProps) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  const value: ICounterContext = { count, increase, decrease };

  return (
    <div>
      <CountContext.Provider value={value}>
        <Counter />
      </CountContext.Provider>
    </div>
  );
};

export default UseContext;
