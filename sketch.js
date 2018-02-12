function preload() {
  console.log("preload() started");
  console.log("prelod() finished");
}

function setup() {
  console.log("setup() started");
  windowResized();
  console.log("setup() finished");
}

function draw() {
  background(0);

}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);

  // Reset variables here
}
