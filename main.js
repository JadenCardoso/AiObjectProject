objects = [];
status = "";
video = "";
InputtedItem = "";

function setup(){
    canvas = createCanvas(380, 380);
    canvas.position(500, 390);
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML = "Status: Detecting object";
    InputtedItem = document.getElementById("objectInput").value;
}

function modelLoaded(){
    conole.log("model loaded");
    status = true;
}

function draw(){
    image(video, 0, 0, 380, 380);
    if (status = ""){
        objectDetector.detect(video, gotResult);
        for (i=0; i < objects.length ; i++){
            if (objects[i].label == InputtedItem){
                r = random(255);
            g = random(255);
            b = random(255);
            document.getElementById("Status").innerHTML = "status: Objects Detected";
            document.getElementById("NumberOfObjects").innerHTML = "Number Of Objects: " + objects.length;
            fill(r, g, b);
            percentage = floor(objects[i].confidence * 100);
            text(objects[i].label + percentage + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r, g, b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
            else{
                synth = window.speechSynthesis;
                speak_data = "Cannot find this item";
                utterThis = new SpeechSynthesisUtterance(speak_data);
                synth.speak(utterThis);
            }
        }
    }
}

function gotResult(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}
