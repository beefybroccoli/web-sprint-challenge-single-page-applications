import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Div_Nav = styled.div`
  display: flex;
  flex-direction: row;
  /* flex-wrap: nowrap; */
  align-content: space-between;
`;
export default function NavigationBar(props) {
  return (
    <Div_Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pizza">pizza</NavLink>
    </Div_Nav>
  );
}
