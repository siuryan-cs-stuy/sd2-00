var slate = document.getElementById("slate");
var ctx = slate.getContext("2d");

var toggle = document.getElementById("toggle");
var clear = document.getElementById("clear");

var isSquare = true;

var size = 20;

slate.addEventListener("click", function() {

  var x, y;

  if (isSquare) {
    x = event.offsetX - size / 2;
    y = event.offsetY - size / 2;
  } else {
    x = event.offsetX;
    y = event.offsetY;
  }

  ctx.fillStyle = "black";
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  ctx.fillStyle = "lightsteelblue";

  if (isSquare) {
    ctx.fillRect(x, y, size, size);
  } else {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fill();
  }

});

toggle.addEventListener("click", function() {
  isSquare = !isSquare;
});

clear.addEventListener("click", function() {
  ctx.clearRect(0, 0, 500, 500);
  ctx.beginPath();
});
