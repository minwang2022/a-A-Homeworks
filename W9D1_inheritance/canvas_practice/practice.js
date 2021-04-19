document.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementById("mycanvas");
    canvasEl.width = 500;
    canvasEl.height = 500;
  
    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 500, 500);

    ctx.beginPath();
    ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();

// const canvas = document.getElementById('mycanvas');

// canvas.width = 500;
// canvas.height = 500;

// const ctx = canvas.getContext("2d");
// canvas.fillStyle = "red";
// ctx.fillRect(0, 0, 500, 500);


// // Set line width
// ctx.lineWidth = 10;

// // Wall
// ctx.strokeRect(75, 140, 150, 110);

// // Door
// ctx.fillRect(130, 190, 40, 60);
    
// // Roof
// ctx.beginPath();
// ctx.moveTo(50, 140);
// ctx.lineTo(150, 60);
// ctx.lineTo(250, 140);
// ctx.closePath();
// ctx.stroke();

});
