import React from "react";
import NavigationBar from "./navigationbar";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Slide from "./slide";
import ListOfSlide from "./listofslide";
import * as con from "./constant";
const Img_Div = styled.div`
  padding-left: 40%;
  padding-top: 30%;
  background-image: url("https://picsum.photos/500");
  height: 10vh;
  width: %100;
`;

const Link_Div = styled.div`
  background-color: gray;
  font-size: 3em;
  width: 35%;
  align-items: center;
  text-align: center;
`;

const Title_H2 = styled.h2`
  width: 70%;
`;

const Header_DIV = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Home(props) {
  return (
    <div>
      <Img_Div>
        <Link_Div>
          <NavLink to="/pizza" id="order-pizza">
            Pizza?
          </NavLink>
        </Link_Div>
      </Img_Div>

      <br />
      <ListOfSlide input_object={con.slides} />
    </div>
  );
}
