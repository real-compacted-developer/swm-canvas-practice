import React, { useEffect } from "react";
import styled from "styled-components";
import ColorPicker from "../components/ColorPicker";
import p5 from "p5";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem auto;
`;

const Main = () => {
  const sketch = (s) => {
    s.setup = () => {
      const cv = s.createCanvas(800, 600);
      cv.id("myCanvas");
      cv.background(200);
    };
  };

  useEffect(() => new p5(sketch), []);

  return (
    <Container>
      <ColorPicker />
    </Container>
  );
};

export default Main;
