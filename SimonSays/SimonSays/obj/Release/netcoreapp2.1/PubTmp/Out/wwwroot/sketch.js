let bx;
let by;
let boxSize = 150;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let anrbox1;
let anrbox2;
let anrbox3;
let anrbox4;
let testSound;

function preload() {
    testSound = loadSound('E.mp3');
}

function setup() {
    var w = 720, h = 400
    createCanvas(w, h);

    anrbox1 = new AnrBox(150, 25, 150, 'red');
    anrbox2 = new AnrBox(300, 25, 150, 'yellow');
    anrbox3 = new AnrBox(150, 175, 150, 'green');
    anrbox4 = new AnrBox(300, 175, 150, 'blue');

    //testSound = loadSound('sources/E.mp3');
    testSound.play();
}

function draw() {
    // six-digit hexadecimal RGB notation
    background('#222222');

    anrbox1.render(mouseX, mouseY);
    anrbox2.render(mouseX, mouseY);
    anrbox3.render(mouseX, mouseY);
    anrbox4.render(mouseX, mouseY);
    
}