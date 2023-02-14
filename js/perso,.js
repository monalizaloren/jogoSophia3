class Perso {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
      this.ballImage = loadImage("./img/ava.png");
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
     
    display() {
      if (keyIsDown(RIGHT_ARROW) ) {
        this.x += 0.02;
      }
  
      
      push();
      translate(this.x, this.y);
    
      imageMode(CENTER);
      image(this.ballImage, 0, 0, this.width, this.height);
      pop();
    }
  
  }
  