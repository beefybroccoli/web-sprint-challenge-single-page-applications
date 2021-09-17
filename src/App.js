import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./component/home";
import Form from "./component/form";
import Page404 from "./component/page404";
import * as constant from "./component/constant";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <Form />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </>
  );
};
export default App;
