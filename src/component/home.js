import React from "react";
import NavigationBar from "./navigationbar";
import { NavLink } from "react-router-dom";

export default function Home(props) {
  return (
    <div>
      <h2>Home Page</h2>
      <NavigationBar />

      <NavLink to="/pizza" id="order-pizza">
        Order Pizza
      </NavLink>
    </div>
  );
}
