import { context, canvas } from "./main.js";

export var config = {
  isLIne: true,
  isShape: false,
  isErase: false,
};
var isDraw = false;
var lineStyle = {
  point: [],
  lineWidth: 2,
  color: document.querySelector("#input-color").value,
  lineCap: "butt",
  lineJoin: "round",
  lineDash: [0, 0],
};
function update() {
  lineStyle.lineWidth = document.getElementById("line-width").value;
  lineStyle.color = document.getElementById("input-color").value;
  lineStyle.lineCap = document.getElementById("line-cap").value;
  lineStyle.lineJoin = document.getElementById("line-join").value;
  lineStyle.lineDash = document.getElementById("line-dash").value.split(",");
}

var line = [];

function drawLine(end, lineStyle) {
  if (config.isLIne) {
    context.lineWidth = lineStyle.lineWidth;
    context.strokeStyle = `${lineStyle.color}`;
    context.lineCap = `${lineStyle.lineCap}`;
    context.lineJoin = `${lineStyle.lineJoin}`;
    context.setLineDash([...lineStyle.lineDash]);
    console.log();
    context.lineTo(...end);
    context.stroke();
    console.log(lineStyle);
    update();
  }
}

canvas.addEventListener("mousemove", (e) => {
  if (isDraw) {
    drawLine([e.clientX, e.clientY], lineStyle);
  }
});

canvas.addEventListener("mousedown", (e) => {
  isDraw = true;
});

canvas.addEventListener("mouseup", (e) => {
  isDraw = false;
  context.beginPath();
});

canvas.addEventListener("touchmove", (e) => {
  drawLine([e.touches[0].clientX, e.touches[0].clientY]);
  console.log(e.touches[0].clientX, e.touches[0].clientY);
});

canvas.addEventListener("touchend", (e) => {
  context.beginPath();
});

document.getElementById("x").addEventListener("click", show);
function show() {
  console.log(JSON.stringify(line));
}
