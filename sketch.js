var vehicles = [];

function preload() {
  console.log("preload() started");
  console.log("prelod() finished");
}

function setup() {
  console.log("setup() started");
  windowResized();
  for (var i = 1; i <= 10; i++) {
    vehicles.push(new Vehicle(width/2, height/2));
  } 
  console.log("setup() finished");

}

function draw() {
  background(0);
  vehicles.forEach(function(v) {
    v.update();
    v.draw();
  });
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);

  // Reset variables here
}
