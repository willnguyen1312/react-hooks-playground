import { RouteComponentProps } from "@reach/router";
import React, { useCallback, useState } from "react";

const Button = ({ value }) => {
  const callBack = useCallback(() => console.log(value), [value]);
  return <button onClick={callBack}>Number: {value}</button>;
};

const UseCallback = (_: RouteComponentProps) => {
  const [listOfNumber, setListOfNumber] = useState([
    {
      value: 0,
      id: 0
    }
  ]);
  function handleOnClick() {
    setListOfNumber(prev => [...prev, { value: prev.length, id: prev.length }]);
  }
  return (
    <div>
      {listOfNumber.length &&
        listOfNumber.map(({ id, value }) => <Button key={id} value={value} />)}

      <button onClick={handleOnClick}>Add</button>
    </div>
  );
};

export default UseCallback;
