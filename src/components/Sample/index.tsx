import React, { useEffect, useRef, useState } from "react";

function Sample() {
  // create a state called count and initialize with 0
  let [count, setCount] = useState(0);
  // create a state called name and initialize with the localStorage value or string Brian
  let [name, setName] = useState(
    window.localStorage.getItem("name") || "Brian"
  );

  // create a ref instance and set to the nameRef variable
  let nameRef = useRef<HTMLInputElement>(null);

  // decrease the count state by 1
  const decrement = () => setCount((count -= 1));
  // increse the count state by 1
  const increment = () => setCount((count += 1));
  // set the name state to the value of the ref
  const submitRefButton = () => setName(nameRef.current!.value);

  // on render, set the value of the name state to the localStorage
  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);

  return (
    <div className="App">
      <h1>Testing React Hooks</h1>

      <div>
        <h2>Testing useState</h2>
        <p data-testid="countvalue">{count}</p>
        <button data-testid="decrementButton" type="button" onClick={decrement}>
          -
        </button>
        <button data-testid="incrementButton" type="button" onClick={increment}>
          +
        </button>
      </div>

      <div>
        <h2>Testing useRef</h2>
        <p data-testid="namevalue">{name}</p>
        <input data-testid="inputName" ref={nameRef} type="text" />
        <button
          data-testid="submitRefButton"
          type="button"
          onClick={submitRefButton}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Sample;
