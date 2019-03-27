import { Link, Router } from "@reach/router";
import React, { Suspense } from "react";

const UseState = React.lazy(() => import("./screens/useState"));
const UseEffect = React.lazy(() => import("./screens/useEffect"));
const UseContext = React.lazy(() => import("./screens/useContext"));
const UseReducer = React.lazy(() => import("./screens/useReducer"));

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
        </nav>

        <Router>
          <UseState path="/useState" />
          <UseEffect path="/useEffect" />
          <UseContext path="/useContext" />
          <UseReducer path="/useReducer" />

          <NotFound default />
        </Router>
      </Suspense>
    </>
  );
};

export default App;
