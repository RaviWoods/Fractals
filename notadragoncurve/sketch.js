var len
var sideLen = 3
var lastKeyPress = false

function setup() {
	createCanvas(800, 500);
	background(0,0,0);	
	angleMode(DEGREES);
	len = width/4
}

function draw() { 
	background(0,0,0);	
	stroke(255);
	translate(width/3, height/3)
	if (keyIsPressed === true && keyCode === UP_ARROW && !lastKeyPress)
		sideLen *= 2
		if(sideLen > len)
			sideLen = 3
		lastKeyPress = true
	if(!(keyIsPressed === true && keyCode === UP_ARROW))
		lastKeyPress = false
	console.log(lastKeyPress)
	iterate(len,sideLen)
}


function iterate(len,sideLen) {
	
	if (len >= sideLen) {
		push()
		rotate(45)
		iterate(len/sqrt(2),sideLen)
		translate(len/sqrt(2),0)
		rotate(-90)
		iterate(len/sqrt(2),sideLen)
		pop()
	} else {
		line(0, 0, len, 0)
		return
	}
}
