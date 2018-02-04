function SpaceShip(name, life) {
  this.Name = name;
  this.Life = life;
  this.Speed = 0;
  this.ShowName = function() {
    return this.Name;
  };
  this.changeName = function(name) {
    this.Name = name;
  };
}

var SpaceShip1 = new SpaceShip("SpaceRacer", 10);
var SpaceShip2 = new SpaceShip("SpaceRacer", 10);
var SpaceShip3 = new SpaceShip("SpaceRacer", 10);

SpaceShip1.changeName("SpaceDestroyer");

SpaceShip1.ShowName();

SpaceShip.prototype.fly = function() {
  if (this.speed == 0) {
    this.speed = 5;
  } else {
    this.speed = this.speed + 1;
  }
};
