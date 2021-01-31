   class Hammer {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1.5,
          'friction':0.3,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      fill("yellow");
      pos.x = mouseX;
      pos.y = mouseY;
    
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     rectMode(CENTER);
     strokeWeight(3);
     stroke("yellow")
    rect(0, 0, this.width, this.height);
      pop();
    }
  };
  