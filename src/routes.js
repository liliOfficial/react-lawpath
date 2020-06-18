import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./components/dashboard/dashboard";

const AppRouter = () => {
  return (
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
  );
};

export default AppRouter;
