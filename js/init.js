var canvas = document.getElementById("canvas");

function init() {
    canvas.width = window.innerWidth/1.05;
    canvas.height = window.innerHeight /1.2;
    var h = canvas.clientHeight;
    var w = canvas.clientWidth;
    canvas.style.marginLeft = `${(window.innerWidth - w) / 2}px`;
    canvas.style.marginTop = `${window.innerHeight - h - 15}px`
  }
  window.onload = function () {
    init();
  };
  
  window.addEventListener("resize", (e) => {
      init()
  });