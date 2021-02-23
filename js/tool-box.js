import { config } from "./paint.js";
const lineTools = document.getElementById("line-tool");
const shapeTools = document.getElementById("shape-tool");
const eraseTools = document.getElementById("erase-tool");

document
  .querySelector(".show_line_tools")
  .addEventListener("click", showLineTools);
document
  .querySelector(".show_shape_tools")
  .addEventListener("click", showShapeTools);
document
  .querySelector(".show_erase_tools")
  .addEventListener("click", showEraseTools);

function showLineTools() {
  lineTools.style.display = "initial";
  shapeTools.style.display = "none";
  eraseTools.style.display = "none";

  config.isLIne = true;
  config.isErase = false;
  config.isShape = false;
}

function showShapeTools() {
  lineTools.style.display = "none";
  shapeTools.style.display = "initial";
  eraseTools.style.display = "none";

  
  config.isLIne = false;
  config.isErase = false;
  config.isShape = true;

  console.log(config);
}

function showEraseTools() {
  lineTools.style.display = "none";
  shapeTools.style.display = "none";
  eraseTools.style.display = "initial";

  
  config.isLIne = false;
  config.isErase = true;
  config.isShape = false;
}
