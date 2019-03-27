import { Link, RouteComponentProps, Router } from "@reach/router";
import React from "react";
import UseContext from "./screens/useContext";
import UseEffect from "./screens/useEffect";
import UseState from "./screens/useState";

const NotFound = (_: RouteComponentProps) => <div>Sorry, nothing found.</div>;

const App = () => {
  return (
    <>
      <nav>
        <Link to="/useState">useState</Link>{" "}
        <Link to="/useEffect">useEffect</Link>{" "}
        <Link to="/useContext">UseContext</Link>{" "}
      </nav>

      <Router>
        <UseState path="/useState" />
        <UseEffect path="/useEffect" />
        <UseContext path="/useContext" />

        <NotFound default />
      </Router>
    </>
  );
};

export default App;
