function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    fill("#c61a09")
    circle(30,30,40);
    circle(600,30,40);
    circle(30,450,40);
    circle(600,450,40);
    rect()
   
}

function take_snapshot() {
  save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}