//note: use ctrl/Cmd + t to auto format your code (indentations)

var img;
//var img2;
//var img3;
var initials = "ar"; // your initials
var choice = "1"; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot = 61; // last screenshot never taken

let button; //https://p5js.org/reference/p5/createButton/

function preload() {
  // preload() runs once, it may make you wait
  //  img = loadImage('cat.png');  // cat.jpg needs to be next to this .js file
  // you can link to an image on your github account
  img = loadImage(
    "https://media.tenor.com/HW1ox7ZZUrsAAAAi/peanut-greyson.gif"
  );
  //  img2 = loadImage('https://arao-sjsu.github.io/images/round.png');
  //  img3 = loadImage('https://veryprofessional3d.github.io/images/rainbow.gif');
}

function setup() {
  pixelDensity(12);
  createCanvas(600, 600); // canvas size
  background(screenbg); // use our background screen color

  button = createButton("clear canvas");
  button.position(500, 645);
  //call clear_print() when the button is pressed
  button.mousePressed(clear_print);

  button = createButton("save img");
  button.position(500, 620);
  //call clear_print() when the button is pressed
  button.mousePressed(saveme);

  button = createButton("help text");
  button.position(500, 670);
  //call clear_print() when the button is pressed
  button.mousePressed(helpText);

  //want to style your buttons?? https://editor.p5js.org/msboyles/sketches/Vdfl8pLCB_
  //use css - https://editor.p5js.org/kjhollen/sketches/58WL8zYu1

  helpText();
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
  }
  if (mouseIsPressed) {
    newkeyChoice(choice); // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) {
  //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic functionx

  if (toolChoice == "1") {
    strokeWeight(4);
    stroke(0);
    line(pmouseX, mouseY, mouseX, pmouseY);
  } else if (toolChoice == "2") {
    strokeWeight(20);
    stroke(0);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == "3") {
    fill(0, 0, 255);
    strokeWeight(0.4);
    stroke(255, 255, 255, 50);
    ellipse(mouseX, mouseY, 29, 29);
    
  } else if (toolChoice == "4") {
      strokeWeight(4);
    stroke(0, 225, 255);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (key == "5") {

    stroke(0, 255, 0, 36);
    spray(255, 46, 193, 30);
    spray(200, 160, 23, 30);
    spray(255, 200, 253, 30);
    
  } else if (toolChoice == "6") {
    strokeWeight(3);
    stroke(255, 255, 0);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == "7") {
strokeWeight(1);
    stroke(0);
    line(pmouseX, mouseY, mouseX -1, pmouseY- 20);
    
  } else if (toolChoice == "8") {
    stroke(0);
    strokeWeight(0);
    fill(255, 100, 0, 20);
    ellipse(mouseX, mouseY, 60, 10);
    
  } else if (toolChoice == "9") {

    square(random(width), mouseY, random(30, 50));
    
  } else if (toolChoice == "0") {
    fill(random(255), random(255), random(255), random(255)); //random RGBA colors
    stroke(random(255), random(255), random(255), random(255));
    strokeWeight(4);
    line(mouseX, pmouseY, pmouseX, width);
    
  } else if (toolChoice == "m" || toolChoice == "M") {
    // g places the image we pre-loaded

    image(img, mouseX, mouseY, mouseX / 10, mouseX / 16); //what does this do?
    //  } else if (toolChoice == 'h' || toolChoice == 'H') { // g places the image we pre-loaded
    //    image(img2, mouseX-25, mouseY-25, 50, 50,20);
    //  } else if (toolChoice == 'i' || toolChoice == 'I') { // g places the image we pre-loaded
    //    image(img3, mouseX-25, mouseY-25, 50, 50,20);
  } //else if (toolChoice == 'x' || key == 'X') {

  //clearflag = 1;g

  //}
  else if (key == "p" || key == "P") {
    saveme(); // call saveme which saves an image of the screen
  }
}

function clear_print() {
  // clears the screen by resetting the background
  background(screenbg); // set the screen back to the background color
}

function saveme() {
  //this will save the name as the intials, date, time and a millis counting number.
  // it will always be larger in value then the last one.
  filename = initials + day() + hour() + minute() + second();
  if (second() != lastscreenshot) {
    // don't take a screenshot if you just took one
    saveCanvas(filename, "jpg");
    key = "";
  }
  lastscreenshot = second(); // set this to the current second so no more than one per second
}

function keyPressed() {
  //https://p5js.org/reference/p5/keyPressed/
  if (key === "x" || key === "X") {
    clear_print();
  } else if (key === "p" || key === "P") {
    saveme();
  }
}
function spray(r, g, b) {
  strokeWeight(2);
  for (let i = 8; i < 50; i++) {
    point(mouseX + random(-100, 100), mouseY + random(-100, 100));
  }
}
function helpText() {
  fill("black");
  strokeWeight(0.2);
  textSize(15);
  text("press numerical keys from 1 - 0 for different strokes", 60, 30);
  text(
    "use buttons to save or clear canvas, or press x or p | press M",
    60,
    45
  );
}
