import { canvas, context } from "./main.js";
function clear() {
  context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}
function drawLine(lineStyle) {
  
  context.beginPath();

  context.lineWidth = lineStyle.lineWidth;
  context.strokeStyle = `${lineStyle.color}`;
  context.lineCap = `${lineStyle.lineCap}`;
  context.lineJoin = `${lineStyle.lineJoin}`;
  context.setLineDash([...lineStyle.lineDash]);
  for (let i = 0; i < lineStyle.points.length; i++) {
    context.lineTo(lineStyle.points[i].x, lineStyle.points[i].y);
  }
  context.stroke();
  context.closePath();
}
export function eraseLastDraw(drawData) {
  clear();
  drawData.pop();
  for (let i = 0; i < drawData.length; i++) {
    drawLine(drawData[i]);
  }

}
