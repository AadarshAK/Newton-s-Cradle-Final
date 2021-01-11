class Slingshot{
    constructor(bodyA, bodyB, offsetX,offsetY){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x:offsetX,y:offsetY},
            stiffness: 1,
            length: 250
        }

        this.sling = Constraint.create(options);
       // this.pointB=pointB;
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        World.add(world, this.sling);
    }

/*    fly(){
        this.sling.bodyA=null;
    }*/

    display(){
       /* if(this.sling.bodyA){*/
        push();
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y);
        pop();
    }
    }
    
