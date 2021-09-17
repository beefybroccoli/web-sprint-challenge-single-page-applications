import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./component/home";
import Form from "./component/form";
import Page404 from "./component/page404";
import NavigationBar from "./component/navigationbar";
import styled from "styled-components";

const Title_H2 = styled.h2`
  width: 70%;
`;

const Header_DIV = styled.div`
  display: flex;
  flex-direction: row;
`;
const App = () => {
  const { stateOrderArray, set_stateOrderArray } = useState([]);
  const { stateNewOrder, set_stateNewOrder } = useState(null);

  useEffect(() => {
    if (stateNewOrder) {
      console.log("stateNewOrder = ", stateNewOrder);
    }
  }, [stateNewOrder]);

  return (
    <>
      <header>
        <Header_DIV>
          <Title_H2>LAMBDA EATS</Title_H2>
          <NavigationBar />
        </Header_DIV>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <Form set_stateNewOrder={set_stateNewOrder} />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </>
  );
};
export default App;
