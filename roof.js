class roof {
    constructor(x,y,width,height) {
        var options = {
            'restitution':2.0,
            'friction':0.5,
            'density':0.5,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("grey");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };