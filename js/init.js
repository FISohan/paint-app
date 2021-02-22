import { canvas } from "./main.js";
function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // canvas.style.marginLeft = `${(window.innerWidth - canvas.clientWidth) / 2}px`;
  // canvas.style.marginTop = `${(window.innerHeight - canvas.clientHeight) - 15}px`;
}
window.onload = function () {
  init();
};

window.addEventListener("resize", (e) => {
  init();
});
