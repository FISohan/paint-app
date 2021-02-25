import { context, canvas } from "./main.js";
import { lineData } from "./db.js";
import { eraseLastDraw } from "./render.js";
export var config = {
  isLIne: true,
  isShape: false,
  isErase: false,
};

var isDraw = false;
var lineStyle = {
  category: "line",
  id: 0,
  point: [],
  lineWidth: 2,
  color: "black",
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

function drawLine(end) {
  if (config.isLIne) {
    // context.beginPath();

    context.lineWidth = lineStyle.lineWidth;
    context.strokeStyle = `${lineStyle.color}`;
    context.lineCap = `${lineStyle.lineCap}`;
    context.lineJoin = `${lineStyle.lineJoin}`;
    context.setLineDash([...lineStyle.lineDash]);
    context.lineTo(...end);
    context.stroke();

    update();
  }
}

canvas.addEventListener("mousemove", (e) => {
  if (isDraw) {
    drawLine([e.clientX, e.clientY]);
    line.push({
      x: e.clientX,
      y: e.clientY,
    });
  }
});

canvas.addEventListener("mousedown", (e) => {
  context.beginPath();

  isDraw = true;
});

canvas.addEventListener("mouseup", (e) => {
  isDraw = false;
  context.beginPath();
  lineStyle.point = line;
  line = [];
  lineStyle.id = lineStyle.id + 1;
  lineData.push({
    category: lineStyle.category,
    id: lineStyle.id,
    points: lineStyle.point,
    color: lineStyle.color,
    lineWidth: lineStyle.lineWidth,
    lineCap: lineStyle.lineCap,
    lineDash: lineStyle.lineDash,
    lineJoin: lineStyle.lineJoin,
  });
  console.log(lineStyle);
});
// canvas.addEventListener("touchstart",(e)=>{
//   context.beginPath();
  
// })
canvas.addEventListener("touchmove", (e) => {
  drawLine([e.changedTouches[0].clientX, e.changedTouches[0].clientY]);
  line.push({
    x: e.clientX,
    y: e.clientY,
  });
});

canvas.addEventListener("touchend", (e) => {
  context.beginPath();
  lineStyle.point = line;
  line = [];
  lineStyle.id = lineStyle.id + 1;
  lineData.push({
    category: lineStyle.category,
    id: lineStyle.id,
    points: lineStyle.point,
    color: lineStyle.color,
    lineWidth: lineStyle.lineWidth,
    lineCap: lineStyle.lineCap,
    lineDash: lineStyle.lineDash,
    lineJoin: lineStyle.lineJoin,
  });
  console.log(lineData);

});

document.getElementById("x").addEventListener("click", show);
function show() {
  eraseLastDraw(lineData);
}
