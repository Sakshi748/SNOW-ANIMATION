class snowy {
    constructor(x, y) {
        var options = {
            restatution: 2,
            friction: 2,
            density: 1
        }
        this.width = 90;
        this.height = 90;
        this.img = loadImage("snow4.webp");
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.img, 0, 0, this.width, this.height);
        pop();
    }
}