class Division {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x, y, 10, {isStatic:true});
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("black");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
