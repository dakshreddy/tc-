class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.3,
            length: 250
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    fly(){

        this.rope.bodyA = null;
    }

    display(){
        if(this.rope.bodyA !== null){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
 
        push();
        stroke ("red")
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

        pop();
    }
}
}