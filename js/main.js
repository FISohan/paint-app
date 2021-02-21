var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

function drawLine(x,y){
    context.beginPath();
    context.rect(x, y, 10, 10);
    context.closePath();
    
    
}

canvas.addEventListener("mousemove",(e)=>{
    drawLine(e.clientX - 35,e.clientY - 101)
    console.log(e);
})