import { context } from "./main.js";
var canvas = document.getElementById("canvas");

function drawLine(end) {
  context.lineTo(...end);
  context.stroke();
}

canvas.addEventListener("mousemove", (e) => {
  if (e.altKey || e.ctrlKey) {
    drawLine([e.clientX - 35, e.clientY - 101]);
    // console.log("mouse move");
  } else context.beginPath();
});

canvas.addEventListener("touchmove", (e) => {
  drawLine([e.touches[0].clientX - 35, e.touches[0].clientY - 101]);
  console.log(e.touches[0].clientX - 35, e.touches[0].clientY - 101);
});

canvas.addEventListener("touchend",(e)=>{
    context.beginPath();
})