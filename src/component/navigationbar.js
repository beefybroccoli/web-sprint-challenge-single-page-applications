import react from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Div_Nav = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
export default function NavigationBar(props) {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pizza">pizza</NavLink>
    </div>
  );
}
