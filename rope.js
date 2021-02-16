class rope{
    constructor (bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;

    
        var options={
            bodyA :bodyA,
            bodyB : bodyB,
      
        }
         
        this.bodyB = bodyB
        this.rope =Constraint.create(options);
        World.add(world,this.rope)
    
    }
    display(){

        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(5);
        var Anchor1X=pointA.offsetX
        var Anchor1X=pointA.offsetX

        var  Anchor2X=pointB.offsetX
        var Anchor2Y=pointB.offsetY

        Line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

        }
    }
    


}

