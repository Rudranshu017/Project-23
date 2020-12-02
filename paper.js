class Paper {  constructor(x, y, width, height, radius) {
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body = Matter.Bodies.circle(x,y, radius, options);
    this.width = width;
    this.height = height;
    this.radius = radius;
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    ellipse(0,0, this.width, this.height);
    pop();
  }
};
    
 