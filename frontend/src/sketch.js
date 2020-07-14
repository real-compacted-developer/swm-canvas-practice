import config from "./config";
import io from "socket.io-client";

const sketch = (s) => {
  let color = "#000000";
  let socket;

  s.setup = () => {
    socket = io.connect(config.API);

    const cv = s.createCanvas(800, 600);
    cv.id("myCanvas");
    cv.background(200);

    socket.on("mouse", (data) => {
      s.stroke(data.color);
      s.strokeWeight(data.strokeWidth);
      s.line(data.x, data.y, data.px, data.py);
    });
  };

  s.mouseDragged = () => {
    s.stroke(color);
    s.strokeWeight(4);
    s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
    sendMouseData(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
  };

  const sendMouseData = (x, y, pX, pY) => {
    const data = {
      x: x,
      y: y,
      px: pX,
      py: pY,
      color: color,
      strokeWidth: 4,
    };
    socket.emit("mouse", data);
  };
};

export default sketch;
