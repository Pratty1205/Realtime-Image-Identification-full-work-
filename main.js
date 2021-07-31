noseX = 0;
noseY = 0;

function preload() {
    mustache_filter = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas = createCanvas(600, 450);
    video = createCapture(VIDEO);
    canvas.center();
    video.size(600, 450);
    video.hide();
    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}

function modeLoaded() {
    console.log("Posenet is initialized");
}

function draw() {
    image(video, 0, 0, 600, 450);
    image(mustache_filter, noseX, noseY, 120, 50);
}

function take_snapshot() {
    save(YouNoobNumber1.png);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 60;
        noseY = results[0].pose.nose.y;
        console.log("noseX" + noseX);
        console.log("noseY" + noseY)
    }
}