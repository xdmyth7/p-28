class Launcher{
    constructor(body,anchor){
        var option={bodyA,body,
            pointB,anchor,
            stiffness:0.004,
            length:1
        }

        this.bodyA = body;
        this.pointB = anchor;
        this.Launcher = Constraint.create(options);
        World.add(world,this.Launcher);
    }

    attach(body){
        this.launcher.bodyA=body;
    }

    fly(){
        this.launcher.bodyA=null;  
    }

    display(){
        if(this.launcher.bodyA){
        }

          var pointA = this.bodyA.position;
          var pointB = this.bodyB;

          strokeWeight(2);
          line(pointA.x,PointA.y,pointB.x,point.y);

    }

}

