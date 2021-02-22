import { canvas } from "./main.js";
function init() {
  canvas.width = window.innerWidth / 1.25;
  canvas.height = window.innerHeight / 1.01;
}
window.onload = function () {
  init();
};

window.addEventListener("resize", (e) => {
  init();
});
