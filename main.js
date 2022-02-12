function preload()
{

}

nx = 0;
ny = 0;
lfwx = 0;
rgwx = 0;
diff = 0;

function setup(){
canvas = createCanvas(500,500);
canvas.position(800, 150);
video = createCapture(VIDEO);
video.size(400, 400);
video.position(200, 180);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results){

    if (results.length > 0){
       console.log(results);
 nx = results[0].pose.nose.x;
 ny = results[0].pose.nose.y;
 console.log("Nose X = " + nx + "and Nose Y = " + ny);
 lfwx = results[0].pose.leftWrist.x;
 rgwx = results[0].pose.rightWrist.x;
 console.log("Left Wrist X = " + lfwx + "and Right Wrist X = " + rgwx);
 diff = lfwx - rgwx;
Rounded = Math.round(diff);
 document.getElementById("lr_measurements").innerHTML = "The width and height of the square is " + Rounded;
    }
}

function modelLoaded(){
 console.log("Model is loaded successfully");
}
function draw(){

background('lightblue');
fill('green');
stroke('blue');
square(nx, ny, diff);
}