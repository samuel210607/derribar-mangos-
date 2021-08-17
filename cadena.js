class cadena {
    constructor (bodyA, pointB){
var options = {
    bodyA: bodyA, 
    pointB: pointB,
    stiffness: 0.04, 
    lenght: 2
}
this.pointB = pointB;
this.tirachinas = Constraint.create(options)
World.add (world, this.tirachinas)
}

union (body){

    this.tirachinas.bodyA = body;
}
fly ()
{
    this.tirachinas.bodyA = null;
}
display (){
    if (this.tirachinas.bodyA){
        var pointA, pointB
        pointA = this.tirachinas.bodyA.position;
        pointB = pointB = this.pointB;
        push ();
line (pointA.x, pointA.y, pointB.x, pointB.y)
pop ();   
}
}
};