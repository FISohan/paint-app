import { canvas } from "./main.js";
function init() {
  canvas.width = window.innerWidth / 1.011;
  canvas.height = window.innerHeight / 1.23;
}
window.onload = function () {
  init();
};

window.addEventListener("resize", (e) => {
  init();
});
