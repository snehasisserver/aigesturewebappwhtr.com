var noseX=0;
var noseY=0;
var difference =0;
var leftWristX = 0;
var rightWristX = 0;
function setup(){
  video = createCapture(VIDEO);
  video.size(550,500);
  video.position(150,150)

 var canvas = createCanvas(550,550);
 canvas.position(850,150);
 
 poseNet = ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is initialised");
}
function draw(){
 background("#2A9B00");
 document.getElementById("square_side").innerHTML="Width and height of the square will be = " + difference + " px";
 fill("#ff9999");
 stroke("#330000");
 square(noseX,noseY,difference);
 
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

console.log("Nose x is = " + noseX + " , " + " Nose y is = " + noseY);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;

difference = floor(leftWristX - rightWristX);
console.log("The left Wrist x is = " + leftWristX + " , The right wrist x is = " + rightWristX + " and the diffrence is = " + difference);

    }
}