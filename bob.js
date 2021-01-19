class Bob {
    constructor(x,y,radius) {
      
      var options = {
          isStatic: true,
          restitution:0.3,
          density:0.1,
          friction:0.5
      }
      
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius
      
      
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      
      imageMode(RADIUS);
      fill("red");
      ellipse(pos.x, pos.y, this.radius*2,this.radius*2);
      
    }
  };