class Drop {

    constructor(x,y){

        var options = {
            restitution: 0.2,
           friction: 0.001
        }
        this.body = Matter.Bodies.circle(x,y,5,options);
        Matter.World.add(world,this.body);
    }
    update(){
        if (this.body.position.y > 800){
         //   console.log("i am here")
            Matter.Body.setPosition(this.body, {x:random(0,600),y:random(0,400)})
           
        }
    }

    display(){

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,5);
        pop();
    }
}