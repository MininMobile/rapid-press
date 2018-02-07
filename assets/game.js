function init() {

const cvg = require("convergejs");
const canvas = document.getElementById("canvas");
const c = new cvg.Canvas(canvas, "600px", "450px", 60);

const squares = [
	// Top Row
	c.new("box", "tl"),
	c.new("box", "tm"),
	c.new("box", "tr"),
	// Middle Row
	c.new("box", "ml"),
	c.new("box", "mm"),
	c.new("box", "mr"),
	// Bottom Row
	c.new("box", "bl"),
	c.new("box", "bm"),
	c.new("box", "br")
];

}