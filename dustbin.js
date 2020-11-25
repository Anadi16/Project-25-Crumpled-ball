class Dustbin{
    constructor(x,y,width,height){
        
        var options = {
            isStatic : true,
            restitution : 0,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("dustbingreen.png");
        this.width = width;
        this.height = height;

        
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }

}