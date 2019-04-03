import { RouteComponentProps } from "@reach/router";
import React, { FunctionComponent } from "react";

interface IUseReachRoute {
  takada?: string;
}

const UseReachRoute: FunctionComponent<
  RouteComponentProps & IUseReachRoute
> = props => {
  return <h1>ReachRoute {props.takada}</h1>;
};

export default UseReachRoute;
