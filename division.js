class Division{
 constructor(x,y,width,height){
 var options = {
  
    isStatic: true
 }
this.body = Bodies.rectangle(x,y,width,height,options);
this.width= width;
this.height = height;
// for (var k = 0;k <= width; k=k+80 ){
//    divisions.push(new Divisions(k.height-divisionHeight/2,10,divisionHeight))
//     }
 }
display(){
var pos = this.body.position;
//divisions.display();
rectMode = (CENTER);
fill("white");
rect(pos.x,pos.y,this.width,this.height);
}
};