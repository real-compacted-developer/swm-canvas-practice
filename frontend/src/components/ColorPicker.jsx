import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ConfirmButton = styled.button`
  border: none;
  width: 80px;
  height: 30px;
  background-color: #4834d4;
  color: white;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: #686de0;
  }
`;

const TextStyle = styled.p`
  line-height: 30px;
  margin-right: 1rem;
`;

const ColorPicker = () => {
  return (
    <Container>
      <TextStyle>팬 색깔 (HEX)</TextStyle>
      <input type="text" placeholder="#000000" id="pickcolor" />
      <div id="color-holder" className="color-holder call-picker"></div>
      <ConfirmButton id="color-btn">변경</ConfirmButton>
    </Container>
  );
};

export default ColorPicker;
