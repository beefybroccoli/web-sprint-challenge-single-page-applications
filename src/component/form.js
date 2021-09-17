/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import NavigationBar from "./navigationbar";
import styled from "styled-components";
import * as con from "./constant";
import axios from "axios";
import {
  schema_validate_input,
  schema_validate_form,
} from "./schema_validation";

const Styled_Label = styled.label`
  border: 1px solid black;
`;

const Validation_Text = styled.p`
  background-color: red;
`;

const Img_Div = styled.div`
  background-image: url("https://picsum.photos/500");
  height: 20vh;
  width: 100%;
`;

const Input_Header = styled.div`
  background-color: rgb(176, 89, 35);
`;

const Input_Body = styled.div`
  display: flex;
  flex-direction: column;
`;
export default function Form(props) {
  const [stateFormData, set_stateForm] = useState(con.initial_form_state);
  const [stateValidationText, set_stateValidationText] = useState(
    con.initial_validationText_state
  );
  const [stateFormValidation, set_stateFormValidation] = useState(false);

  const cb_onChange = (event) => {
    const { name, type, value, checked } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    set_stateForm({ ...stateFormData, [name]: valueToUse });

    if (name === "name" || name === "size") {
      //validate input
      schema_validate_input(
        name,
        value,
        stateValidationText,
        set_stateValidationText
      );
    }
  };

  const cb_onSubmit = (event) => {
    event.preventDefault();

    axios.post(con.API_URL, stateFormData).then((response) => {
      console.log("form.js - response = ", response);
    });

    //reset stateForm to default
    set_stateForm(con.initial_form_state);
  };

  useEffect(() => {
    schema_validate_form(stateFormData, set_stateFormValidation);
  }, [stateFormData]);

  return (
    <div>
      <h2>Build Your Own Pizza</h2>
      <Img_Div></Img_Div>
      <form id="pizza-form" onSubmit={cb_onSubmit}>
        <Styled_Label>
          <Input_Header>
            <p>Name : </p>
            <Validation_Text>{stateValidationText.name}</Validation_Text>
          </Input_Header>

          <Input_Body>
            <input
              id="name-input"
              name="name"
              type="text"
              onChange={cb_onChange}
              value={stateFormData.name}
            />
          </Input_Body>
        </Styled_Label>

        {/* ------------------------------------------ */}
        <Styled_Label>
          <Input_Header>
            <p>Size : </p>
            <Validation_Text>{stateValidationText.size}</Validation_Text>
          </Input_Header>
          <Input_Body>
            <select
              id="size-dropdown"
              name="size"
              onChange={cb_onChange}
              value={stateFormData.size}
            >
              <option value="">(please select a size)</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </Input_Body>
        </Styled_Label>

        {/* ------------------------------------------ */}

        <Input_Header>Add Toppings</Input_Header>
        <Input_Body>
          <Styled_Label>
            <b>Cheese</b>
            <input
              type="checkbox"
              name="topping_cheese"
              onChange={cb_onChange}
              value={stateFormData.topping_cheese}
            />
          </Styled_Label>

          {/* ------------------------------------------ */}
          <Styled_Label>
            <b>Pie</b>
            <input
              type="checkbox"
              name="topping_pie"
              onChange={cb_onChange}
              value={stateFormData.topping_pie}
            />
          </Styled_Label>

          {/* ------------------------------------------ */}
          <Styled_Label>
            <b>Vegetable</b>
            <input
              type="checkbox"
              name="topping_vegetable"
              onChange={cb_onChange}
              value={stateFormData.topping_vegetable}
            />
          </Styled_Label>

          {/* ------------------------------------------ */}

          <Styled_Label>
            <b>Chili</b>
            <input
              type="checkbox"
              name="topping_chili"
              onChange={cb_onChange}
              value={stateFormData.topping_chili}
            />
          </Styled_Label>
        </Input_Body>
        {/* ------------------------------------------ */}

        <Styled_Label>
          <Input_Header>
            <p>Special Instruction : </p>
          </Input_Header>
          <Input_Body></Input_Body>

          <input
            id="special-text"
            name="special_instruction"
            type="text"
            onChange={cb_onChange}
            value={stateFormData.special_instruction}
          />
        </Styled_Label>

        {/* ------------------------------------------ */}
        <Input_Header>Sub Order</Input_Header>
        <Input_Body>
          <button
            name="submit_button"
            id="order-button"
            disabled={!stateFormValidation}
          >
            Submit
          </button>
        </Input_Body>
      </form>
    </div>
  );
}
