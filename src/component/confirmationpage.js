import React from "react";
import styled from "styled-components";

export default function ConfirmationPage(props) {
  const { input_object } = props;

  return (
    <div>
      <h3>Confirmation Page</h3>
      {input_object}
    </div>
  );
}
