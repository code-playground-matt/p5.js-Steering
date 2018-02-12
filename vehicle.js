function Vehicle(x_, y_) {
  this.pos = createVector(x_, y_);

}

Vehicle.prototype.update = function () {
  this.pos.add(createVector(random(-2,2),random(-2,2)));
};

Vehicle.prototype.draw = function () {
  fill(255);
  stroke(255);
  strokeWeight(4);
  point(this.pos.x, this.pos.y);
};
