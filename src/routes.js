import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./components/dashboard/dashboard";
import TestPage from "./components/test/test";
const AppRouter = () => {
  return (
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/lawpath-test" component={TestPage} />
        
      </Switch>
  );
};

export default AppRouter;
