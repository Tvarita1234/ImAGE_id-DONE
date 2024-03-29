objectDetector = "";
img = "";
objects = [];
status = "";

function preload(){
img = loadImage('cat-dog.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(img, 0, 0, 640, 420);
   


if(status !="")
{
    for( i = 0; i < objects.length; i++)
    {
        document.getElementById("status").innerHTML = "Status : Objects Detected";
       
        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(object[i].lable + " " + precent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(object[i].x, object[i].y, object[i].width, object[i].height);
    }
}


}
