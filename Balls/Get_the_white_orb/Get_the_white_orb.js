let balls = [];
var ballx = 300;
var bally = 300;
var ballSize = 40;
var value = 0
var score = 100;
var gameState = "L1"

function setup() {
    createCanvas(600, 600);
    textAlign(CENTER);
    textSize(20);
    balls.push(new Ball());
}

timer = 100;
function draw() {
    background(220);
    for (let i = 0; i < balls.length; i++) {
        balls[i].move();
        balls[i].display();

        // Check for edge collisions and ball-to-ball collisions
        balls[i].checkEdges();

        for (let j = i + 1; j < balls.length; j++) {
            balls[i].checkCollision(balls[j]);
        }
    }
    if (value) {
        if (timer > 0) {
            timer = timer - 0.1;
        }
        else {
            balls.push(new Ball(ballSize, ballSize));
            timer = 50;
        }
    }
    else {
        timer = 10
    }
    if (gameState == "L1") {
        levelOne();
    }
    if (gameState == "L2") {
        levelTwo();
    }
    stroke(255);
    strokeWeight(3);
    text(("Score: " + score), width / 2, 40);
}

function levelOne() {
    stroke(255);
    strokeWeight(score);
    var distToBall = dist(ballx, bally, mouseX, mouseY);
    if (distToBall < ballSize + ballSize) {
        ballx = random(width);
        bally = random(height);
        score = score - 1
        value = value + 1
    }
    if (value > 100) {
        gameState = "L2"
    }
    if (balls) {

    }

    line(ballx, bally, mouseX, mouseY);
    fill(0);
    ellipse(ballx, bally, ballSize, ballSize);
}
function levelTwo() {
    text("YOU WIN!!", width / 2, height - 20);
    var distToBall = dist(ballx, bally, mouseX, mouseY);
    if (distToBall < ballSize + ballSize * value) {
        ballx = random(width);
        bally = random(height);

    }


    line(ballx, bally, mouseX, mouseY)
    ellipse(ballx, bally, ballSize, ballSize);
}
class Ball {
    constructor(x = random(width), y = random(height)) {
        this.position = createVector(x, y);
        this.velocity = createVector(random(-4, 4), random(-4, 4 / 2));
        this.radius = 20;
        this.color = color(random(255), random(255), random(255));
    }

    move() {
        this.position.add(this.velocity);
    }
    // Display the ball
    display() {
        fill(this.color);
        noStroke();
        ellipse(this.position.x, this.position.y, this.radius * 2);
    }
    // Check for collisions with edges and change color on impact
    checkEdges() {
        let hitEdge = false;

        if (this.position.x - this.radius <= 0 || this.position.x + this.radius > width) {
            this.velocity.x *= -1;
            hitEdge = true;
        }

        if (this.position.y - this.radius <= 0 || this.position.y + this.radius > height) {
            this.velocity.y *= -1;
            hitEdge = true;
        }
        if (hitEdge) {
            this.color = color(random(255), random(255), random(255));
        }
    }
    checkCollision(other) {
        let distance = dist(this.position.x, this.position.y, other.position.x, other.position.y);
        let minDist = this.radius + other.radius;

        if (distance < minDist) {

            let temp = this.velocity.copy();
            this.velocity = other.velocity.copy();
            other.velocity = temp.copy();
        }
    }
}
