/*function Iteration(length) {
	this.length;
	this.lines = [];

}
*/

function myLine(x1_,y1_,x2_,y2_) {
	this.x1 = x1_
	this.y1 = y1_
	this.x2 = x2_
	this.y2 = y2_
	this.width = Math.sqrt(pow((x2_-x1_),2) + pow((y2_-y1_),2))

	this.show = function() {
		line(this.x1,this.y1,this.x2,this.y2)
	}
}