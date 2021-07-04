class Plinkos{
    constructor(x,y,radius){
    var options = {
   
       isStatic: true
    }
   this.body = Bodies.circle(x,y,radius,options);
   this.radius= radius;
   
    }
   display(){
   var pos = this.body.position;
   //ellipsetMode = (CENTER);
   fill("white");
   ellipse(pos.x,pos.y,this.radius);
   }
   };