function init() {

const cvg = require("convergejs");
const canvas = document.getElementById("canvas");
const c = new cvg.Canvas(canvas, "600px", "450px", 60);

const controls = [
	"Q",
	"w",
	"E",
	"A",
	"S",
	"D",
	"Z",
	"X",
	"C"
];

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

const overlay = [
	// Top Row
	c.new("box", "tl-o"),
	c.new("box", "tm-o"),
	c.new("box", "tr-o"),
	// Middle Row
	c.new("box", "ml-o"),
	c.new("box", "mm-o"),
	c.new("box", "mr-o"),
	// Bottom Row
	c.new("box", "bl-o"),
	c.new("box", "bm-o"),
	c.new("box", "br-o")
];

squares.forEach(elem => {
	elem.style([["background", "black"]]);
	elem.size({ height:"125px", width:"125px" });
});

overlay.forEach(over => {
	over.style([["background", "lime"], ["transition", "all 5s"], ["opacity", "0.0"]]);
	over.size({ height:"125px", width:"125px" });

	GameButton(over, controls);
});

Spread(squares, c);
Spread(overlay, c);

}

function GameButton(e, controls) {
	let delay = what();
	let button = controls[what()];

	setTimeout(() => {
		
	}, delay);
}

function Spread(arr, c) {
	arr[1].move({ x:((c.getSize().x/2)-(arr[1].getSize().x/2))+"px" });
	arr[2].move({ x:((c.getSize().x)-(arr[2].getSize().x))+"px" });
	arr[3].move({ y:((c.getSize().y/2)-(arr[3].getSize().y/2))+"px" });
	arr[4].move({ y:((c.getSize().y/2)-(arr[4].getSize().y/2))+"px" });
	arr[4].move({ x:((c.getSize().x/2)-(arr[4].getSize().x/2))+"px" });
	arr[5].move({ y:((c.getSize().y/2)-(arr[5].getSize().y/2))+"px" });
	arr[5].move({ x:((c.getSize().x)-(arr[5].getSize().x))+"px" });
	arr[6].move({ y:((c.getSize().y)-(arr[6].getSize().y))+"px" });
	arr[7].move({ x:((c.getSize().x/2)-(arr[7].getSize().x/2))+"px" });
	arr[7].move({ y:((c.getSize().y)-(arr[7].getSize().y))+"px" });
	arr[8].move({ x:((c.getSize().x)-(arr[8].getSize().x))+"px" });
	arr[8].move({ y:((c.getSize().y)-(arr[8].getSize().y))+"px" });
}