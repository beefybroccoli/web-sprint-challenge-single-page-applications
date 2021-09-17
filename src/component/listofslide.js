import React from "react";
import Slide from "./slide";
import styled from "styled-components";

const Div_Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export default function ListOfSlide(props) {
  const { input_object } = props;

  return (
    <Div_Flex>
      {input_object.map((eachSlide) => {
        return <Slide input_object={eachSlide} />;
      })}
    </Div_Flex>
  );
}
