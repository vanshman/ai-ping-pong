video = "";
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	video.creatCapture(VIDEO);
	video.size(600, 400)
	instializeInSetup(mario);
}

function draw() {
	game()
}