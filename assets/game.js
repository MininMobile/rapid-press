const cvg = require("convergejs");
const canvas = document.getElementById("canvas");
const c = new cvg.Canvas(canvas, "600px", "450px", 60);

function init() {
	const squares = {
		// Top Row
		"tl":c.new("box", "tl"),
		"tm":c.new("box", "tm"),
		"tr":c.new("box", "tr"),
		// Middle Row
		"ml":c.new("box", "ml"),
		"mm":c.new("box", "mm"),
		"mr":c.new("box", "mr"),
		// Bottom Row
		"bl":c.new("box", "bl"),
		"bm":c.new("box", "bm"),
		"br":c.new("box", "br")
	};
}