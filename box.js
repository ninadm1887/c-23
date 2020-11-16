class Box { 
    constructor(x, y, width,height){
     
    this.body = Bodies.rectangle(x, y, width, height,);
    this.x=x; 
    this.y=y; 
    this.width = width; 
    this.height = height;
    World.add(world, this.body);
    } 
    display(){
    var pos =this.body.position;
    
    push(); 
    rectMode(CENTER);
    fill("red");
    rect(this.x,this.y,this.width, this.height);
    pop();
    }
    }