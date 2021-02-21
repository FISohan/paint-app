import { context } from "./main.js";
var canvas = document.getElementById("canvas");
//var context = canvas.getContext("2d");

var beginPosition = {
  x: null,
  y: null,
};

context.moveTo(beginPosition.x, beginPosition.y);

function drawLine(begin, end) {
  context.lineTo(...end);
  context.stroke();
}

canvas.addEventListener("mousemove", (e) => {
  if (e.altKey) {
    drawLine(
      [beginPosition.x, beginPosition.y],
      [e.clientX - 35, e.clientY - 101]
    );
    console.log("mouse move");
  }else context.beginPath();
  
});

