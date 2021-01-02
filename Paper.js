class Paper {
    constructor() {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.radius = 70;

        this.body = Bodies.circle(25, height - 10, this.radius, options);
        this.img = loadImage("https://projectsassets.s3.us-east-2.amazonaws.com/paper.png");//An error occured here
        //https://projectsassets.s3.us-east-2.amazonaws.com/dustbingreen.png
        //https://projectsassets.s3.us-east-2.amazonaws.com/paper.png
        World.add(world, this.body);
        //Task 3 can not be done unless the image is present. Task 3 requires image sizing through investigation, testing, and debugging.

    }

    display() {
        fill("rgb(255, 0, 255)");
        //push();
        ellipse(this.body.position.x, this.body.position.y, 50, 50);
        //image(this.img, this.body.position.x, this.body.position.y, 50, 50);
        //pop();
    }
}
/*
Issues(1):
When the "paper image" link is clicked, a big black empty screen will be seen. Therefore, please verify the assigned paper image link for this project.
When the image() command is used, the paper does not change its appearance.
*/

//Problems(1): The radius of the paper object inhibits the paper's force.