import { RouteComponentProps } from "@reach/router";
import React, { useState } from "react";

const UseState = (_: RouteComponentProps) => {
  const [value, setValue] = useState("Placeholder");

  const handleOnChange = (event: React.SyntheticEvent) => {
    const { value } = event.target as HTMLInputElement;
    setValue(value);
  };

  return (
    <div>
      <input onChange={handleOnChange} placeholder="please input here" />
      <h1>The current value is: {value}</h1>
    </div>
  );
};

export default UseState;
