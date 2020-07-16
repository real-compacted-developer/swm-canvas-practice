import config from "./config";
import io from "socket.io-client";

const sketch = (s) => {
  let color = "#000000";
  let socket;

  s.setup = () => {
    socket = io.connect(config.API);

    const color_picker = s.select("#pickcolor");
    const color_btn = s.select("#color-btn");
    const color_holder = s.select("#color-holder");

    color_btn.mousePressed(() => {
      if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color_picker.value())) {
        color = color_picker.value();
        color_holder.style("background-color", color);
      } else {
        alert("올바른 HEX 색깔 코드가 아닙니다.");
      }
    });

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
