import React from "react";
import NavigationBar from "./navigationbar";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Slide from "./slide";
import ListOfSlide from "./listofslide";
import * as con from "./constant";
const Img_Div = styled.div`
  background-image: url("https://picsum.photos/500");
  height: 40vh;
  width: %100;
`;
export default function Home(props) {
  return (
    <div>
      <div>
        <header>
          <h2>LAMBDA EATS</h2>
          <NavigationBar />
        </header>

        <Img_Div>
          <NavLink to="/pizza" id="order-pizza">
            Order Pizza
          </NavLink>
        </Img_Div>
      </div>
      <br />
      <ListOfSlide input_object={con.slides} />
    </div>
  );
}
