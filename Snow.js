class Snow{
    constructor(x,y,radius){
    
    var options={
        restitution:0.4,
        friction:0.1,
        density:0.1
    }
    this.snow = Bodies.circle(x,y,radius,options)
    this.radius=radius
    this.img=loadImage("snow5.webp")
    }
    updateY(){ 
        if (this.Snow.position.y > height){
            Matter.Body.setPosition (this.Snow,{x:random(0,800),y:random(0,400)})
        }
    display()
        imageMode(CENTER)
        image(this.img,this.snow.position.x,this.snow.position.y,this.radius,this.radius)
    }
    }

