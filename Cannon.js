class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
  }
  
  display(){
    push()
    //translate(this.x,this.y)
   //rotate(this.angle)
    imageMode(CENTER)
    image(cannonImg,this.x,this.y,this.width,this.height)
    pop()

    image(cannonBaseImg,70,20,200,200)
    noFill()
  }
}
