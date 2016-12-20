var len
var sideLen = 2
var lastmouseIsPressed = false

function setup() {
	createCanvas(800, 500);
	background(0,0,0);	
	angleMode(DEGREES);
	len = width
}

function draw() { 
	background(0,0,0);	
	stroke(255);
	translate(0, 2*height/3)
	if (keyIsPressed === true && keyCode === UP_ARROW && !lastKeyPress)
		sideLen *= 3
		if(sideLen > len*3)
			sideLen = 2
		lastKeyPress = true
	if(!(keyIsPressed === true && keyCode === UP_ARROW))
		lastKeyPress = false
	console.log(lastKeyPress)
	iterate(len,sideLen)
}


function iterate(len,sideLen) {
	if (len >= sideLen) {
		push()
		iterate(len/3,sideLen)
		translate(len/3,0)
		rotate(-60)
		iterate(len/3,sideLen)
		translate(len/3,0)
		rotate(120)
		iterate(len/3,sideLen)
		translate(len/3,0)
		rotate(-60)
		iterate(len/3,sideLen)
		pop()
	} else {
		line(0, 0, len, 0)
		return
	}
}
