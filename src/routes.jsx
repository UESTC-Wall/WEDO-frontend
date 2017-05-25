import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./App";
import Task from "./pages/Task";
import Subtask from "./pages/Subtask";

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Task} />
    <Route path="task" component={Task} />
    <Route path="subtask" component={Subtask} />
  </Route>
);

export default routes;
