leftWristx = 0
leftWristy = 0
rightWristx = 0
rightWristy = 0
leftwristscore = 0
rightwristscore = 0
song = ""

function preload() {
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(500, 250);
    video = createCapture(VIDEO);
    video.size(500, 500)
    video.hide()
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 500, 500)

    stroke("#FF0000");
    fill("FF0000");

circle(leftWristx,leftWristy,20);

if(rightwristscore > 0.2)
{



if(rightWristy >0 && rightWristy <=100)
{
document.getElementById("speed").innerHTML = "Speed = 0.5x";
song.rate(0.5);
}

if(rightWristy >100 && rightWristy <=200)
{
document.getElementById("speed").innerHTML = "Speed = 1x";
song.rate(1);
}

if(rightWristy >200 && rightWristy <=300)
{
document.getElementById("speed").innerHTML = "Speed = 1.5x";
song.rate(1.5);
}

if(rightWristy >300 && rightWristy <=400)
{
document.getElementById("speed").innerHTML = "Speed = 2x";
song.rate(2);
}

if(rightWristy >400 && rightWristy <=500)
{
document.getElementById("speed").innerHTML = "Speed = 2.5x";
song.rate(2.5);
}
}


if(leftwristscore > 0.2)
{
InNumberLeftWristY =Number(leftWristy);
remove_decimals = floor(InNumberLeftWristY);
volume = remove_decimals/500;
document.getElementById("volume").innerHTML = "Volume =" + volume;
song.setVolume(volume);
}

}

function modelLoaded() {
    console.log("posenetisinitialized")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        rightWristy = results[0].pose.rightWrist.y;
leftwristscore = results[0].pose.keypoints[9].score
rightwristscore = results[0].pose.keypoints[10].score
    }
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function stop() {
    song.stop()
}