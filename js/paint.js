import { context, canvas } from "./main.js";
export var config = {
  isLIne: false,
  isShape: false,
  isErase: false,
};

function drawLine(end) {
  if (config.isLIne) {
    context.lineTo(...end);
    context.stroke();
  }
}

canvas.addEventListener("mousemove", (e) => {
  if (e.altKey || e.ctrlKey) {
    drawLine([e.clientX, e.clientY]);
    // console.log("mouse move");
  } else context.beginPath();
});

canvas.addEventListener("touchmove", (e) => {
  drawLine([e.touches[0].clientX, e.touches[0].clientY]);
  console.log(e.touches[0].clientX, e.touches[0].clientY);
});

canvas.addEventListener("touchend", (e) => {
  context.beginPath();
});
