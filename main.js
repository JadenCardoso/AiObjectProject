status = "";
video = "";

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector("cocossd",gotResults)
    document.getElementById("status").innerHTML = "Status: Detecting object";
    InputtedItem = document.getElementById("objectInput").value;
}

function modelLoaded(){
    conole.log("model loaded");
    status = "true";
}

function draw(){
    image(video, 0, 0, 380, 380);
}