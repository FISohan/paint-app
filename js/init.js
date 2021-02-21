var canvas = document.getElementById("canvas");
function init() {
  canvas.width = window.innerWidth / 1.05;
  canvas.height = window.innerHeight / 1.2;
  canvas.style.marginLeft = `${(window.innerWidth - canvas.clientWidth) / 2}px`;
  canvas.style.marginTop = `${(window.innerHeight - canvas.clientHeight) - 15}px`;
  
}
window.onload = function () {
  init();
};

window.addEventListener("resize", (e) => {
  init();
});
