var slate = document.getElementById("slate");
var ctx = slate.getContext("2d");

var toggle = document.getElementById("toggle");
var clear = document.getElementById("clear");

var isSquare = true;

var size = 20;

slate.addEventListener("click", function() {
  ctx.beginPath();
  ctx.fillStyle = "lightsteelblue";

  if (isSquare) {
    var x = event.offsetX - size / 2;
    var y = event.offsetY - size / 2;
    ctx.fillRect(x, y, size, size);
  } else {
    var x = event.offsetX;
    var y = event.offsetY;
    ctx.arc(x, y, size, 0, 2 * Math.PI);
  }

  ctx.fill();

});

toggle.addEventListener("click", function() {
  isSquare = !isSquare;
});

clear.addEventListener("click", function() {
  ctx.clearRect(0, 0, 500, 500);
});
