import { RouteComponentProps } from "@reach/router";
import React, { useMemo, useState } from "react";

const ExpensiveComputation = ({ data, filterPredicate }) => {
  const transformedData = useMemo(() => {
    return data.filter(filterPredicate);
  }, [data, filterPredicate]);
  return (
    <div>
      {transformedData.map(({ id, value }) => (
        <h1 key={id}>Number: {value}</h1>
      ))}
    </div>
  );
};

const UseMemo = (_: RouteComponentProps) => {
  const [data, setData] = useState([
    {
      id: 0,
      value: 0
    },
    {
      id: 1,
      value: 1
    },
    {
      id: 2,
      value: 2
    }
  ]);
  function addData() {
    setData(prev => [...prev, { id: prev.length, value: prev.length }]);
  }

  function filterPredicate({ value }: { value: number }) {
    return value % 2;
  }
  return (
    <div>
      <ExpensiveComputation data={data} filterPredicate={filterPredicate} />
      <button onClick={addData}>Add</button>
    </div>
  );
};

export default UseMemo;
