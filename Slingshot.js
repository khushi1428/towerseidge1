class Slingshot{

    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:20,
            stiffness:0.04

        }
        this.pointB=pointB
        this.sling= Constraint.create(options)
        World.add(this.sling,world)

        fly(){
            this.sling.bodyA=null;
        }
           display(){
               if(this.sling.bodyA){
                   var pointA = this.sling.bodyA.position;
                   var pointB = this.pointB

                   strokeWeight(4)
                   fill("red")
                   line(pointA.x,pointA.y,pointB.x,pointB.y);

               }
           }
        }

        

        
  






}
    