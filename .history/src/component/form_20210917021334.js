/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import NavigationBar from "./navigationbar";
import styled from "styled-components";
import * as con from "./constant";
import axios from "axios";

const Styled_Label = styled.label`
  border: 1px solid black;
`;

const Validation_Text = styled.p`
  background-color: gray;
`;
export default function Form(props) {
  const [stateForm, set_stateForm] = useState(con.initial_form_state);

  const cb_onChange = (event) => {
    // console.log(event);
    // console.log("event.target.name = ", event.target.name);
    // console.log("event.target.value = ", event.target.value);
    // console.log("event.target.type = ", event.target.type);
    const { name, type, value, checked } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    set_stateForm({ ...stateForm, [name]: valueToUse });
  };

  const cb_onSubmit = (event) => {
    event.preventDefault();

    axios.post(con.API_URL, stateForm).then((response) => {
      console.log("form.js - response = ", response);
    });

    //reset stateForm to default
    set_stateForm(con.initial_form_state);
  };

  return (
    <>
      <NavigationBar />
      <form id="pizza-form" onSubmit={cb_onSubmit}>
        <Styled_Label>
          <b>Name : </b>{" "}
          <input
            id="name-input"
            name="name"
            type="text"
            onChange={cb_onChange}
            value={stateForm.name}
          />
        </Styled_Label>
        <Validation_Text>(validation text)</Validation_Text>
        {/* ------------------------------------------ */}
        <Styled_Label>
          {" "}
          <b>Size : </b>
          <select
            id="size-dropdown"
            name="size"
            onChange={cb_onChange}
            value={stateForm.size}
          >
            <option value="">(please select a size)</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </Styled_Label>
        <Validation_Text>(validation text)</Validation_Text>
        {/* ------------------------------------------ */}
        <Styled_Label>
          <b>Cheese</b>
          <input
            type="checkbox"
            name="topping_cheese"
            onChange={cb_onChange}
            value={stateForm.topping_cheese}
            // checked={stateForm.topping_cheese}
          />
        </Styled_Label>
        <Validation_Text>(validation text)</Validation_Text>
        {/* ------------------------------------------ */}
        <Styled_Label>
          <b>Pie</b>
          <input
            type="checkbox"
            name="topping_pie"
            onChange={cb_onChange}
            value={stateForm.topping_pie}
            // checked={stateForm.topping_pie ? true : null}
          />
        </Styled_Label>
        <Validation_Text>(validation text)</Validation_Text>
        {/* ------------------------------------------ */}
        <Styled_Label>
          <b>Vegetable</b>
          <input
            type="checkbox"
            name="topping_vegetable"
            onChange={cb_onChange}
            value={stateForm.topping_vegetable}
            // checked={stateForm.topping_vegetable ? true : false}
          />
        </Styled_Label>
        <Validation_Text>(validation text)</Validation_Text>
        {/* ------------------------------------------ */}
        <Styled_Label>
          <b>Chili</b>
          <input
            type="checkbox"
            name="topping_chili"
            onChange={cb_onChange}
            value={stateForm.topping_chili}
            // checked={stateForm.topping_chili ? true : false}
          />
        </Styled_Label>
        <Validation_Text>(validation text)</Validation_Text>
        {/* ------------------------------------------ */}
        <Styled_Label>
          <b>Special Instruction : </b>{" "}
          <input
            id="special-text"
            name="special_instruction"
            type="text"
            onChange={cb_onChange}
            value={stateForm.special_instruction}
          />
        </Styled_Label>
        <Validation_Text>(validation text)</Validation_Text>
        {/* ------------------------------------------ */}
        <button id="order-button">Submit</button>
      </form>
    </>
  );
}
