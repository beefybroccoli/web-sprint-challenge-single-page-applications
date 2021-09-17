import React from "react";
import styled from "styled-components";

const Slide_Div = styled.div`
  height: 20vh;
  width: 30%;
  margin: 1%;
  border: 1px solid black;
`;

const Img_Div = styled.div`
  background-image: url("https://picsum.photos/100");
  height: 50%;
  width: 100%;
`;

const Button_Span = styled.span`
  border: 1px solid black;
`;
export default function Slide(props) {
  const { name, price, description, time, delivery_fee } = props.input_object;

  return (
    <Slide_Div>
      <Img_Div></Img_Div>
      <p>{name}</p>
      <p>
        ${price} - {description}
      </p>
      <p>
        <Button_Span>{time} Min</Button_Span>{" "}
        <Button_Span>{delivery_fee} Delievery Fee</Button_Span>
      </p>
    </Slide_Div>
  );
}
