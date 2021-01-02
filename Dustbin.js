class Dustbin {
    constructor() {
        this.body1 = Bodies.rectangle(499, height - 65, 20, 100);
        this.body2 = Bodies.rectangle(701, height - 65, 20, 100);
        this.body3 = Bodies.rectangle(600, height - 10, 200, 20);
        this.img = loadImage("dustbingreen.png");//An error occured here
        //this.width = 
        //http://127.0.0.1:8887/dustbingreen.png
        //https://projectsassets.s3.us-east-2.amazonaws.com/dustbingreen.png

        Body.setStatic(this.body1, true);
        Body.setStatic(this.body2, true);
        Body.setStatic(this.body3, true);

        World.add(world, this.body1);
        World.add(world, this.body2);
        World.add(world, this.body3);
        //Task 3 can not be done unless the image is present. Task 3 requires image sizing through investigation, testing, and debugging.
    }

    display() {
        fill("white");
        //push();
        /*rect(this.body1.position.x, this.body1.position.y, 20, 100);
        rect(this.body2.position.x, this.body2.position.y, 20, 100);
        rect(this.body3.position.x, this.body3.position.y, 200, 20);*/
        imageMode(CENTER);
        image(this.img, 600, this.body2.position.y - 110);
        //, this.width, this.height
        //strokeWeight(0);
        
        //stroke("white");
        //pop();
    }
}
