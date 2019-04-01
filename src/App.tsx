import { Link, Router } from "@reach/router";
import React, { Suspense } from "react";

const UseState = React.lazy(() => import("./screens/useState"));
const UseEffect = React.lazy(() => import("./screens/useEffect"));
const UseContext = React.lazy(() => import("./screens/useContext"));
const UseCallBack = React.lazy(() => import("./screens/useCallback"));
const UseMemo = React.lazy(() => import("./screens/useMemo"));
const UseRef = React.lazy(() => import("./screens/useRef"));
const UseReducer = React.lazy(() => import("./screens/useReducer"));
const UseComboInput = React.lazy(() => import("./screens/useComboInput"));
const UseComboForm = React.lazy(() => import("./screens/useComboForm"));

const NotFound = React.lazy(() => import("./screens/notFound"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <nav>
          <Link to="/useState">useState</Link>{" "}
          <Link to="/useEffect">useEffect</Link>{" "}
          <Link to="/useContext">UseContext</Link>{" "}
          <Link to="/useReducer">UseReducer</Link>{" "}
          <Link to="/useCallback">UseCallBack</Link>{" "}
          <Link to="/useMemo">UseMemo</Link> <Link to="/useRef">UseRef</Link>{" "}
          <Link to="/useComboInput">UseComboInput</Link>{" "}
          <Link to="/useComboForm">UseComboForm</Link>{" "}
        </nav>

        <Router>
          <UseState path="/useState" />
          <UseEffect path="/useEffect" />
          <UseContext path="/useContext" />
          <UseReducer path="/useReducer" />
          <UseCallBack path="/useCallback" />
          <UseMemo path="/useMemo" />
          <UseRef path="/useRef" />
          <UseComboInput path="/useComboInput" />
          <UseComboForm path="/useComboForm" />

          <NotFound default />
        </Router>
      </Suspense>
    </>
  );
};

export default App;
