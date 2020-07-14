import React from "react";
import styled from "styled-components";
import ColorPicker from "../components/ColorPicker";
import p5 from "p5";
import sketch from "../sketch";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem auto;
`;

const Main = () => {
  new p5(sketch);

  return (
    <Container>
      <ColorPicker />
    </Container>
  );
};

export default Main;
