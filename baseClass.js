class BaseClass {
    constructor(x, y,w,h,angle) {
      var options = {
        'density':1.0,
        'friction': 1.0,
        'restitution':0.8,
      };
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.width = w
      this.height = h;
      this.image = loadImage("sprites/base.png")
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      //pos.x = mouseX;
      //pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);

      imageMode(CENTER)
      image(this.image,0, 0, this.width, this.height);
      pop();
    };
  };
  