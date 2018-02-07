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

squares.forEach(elem => {
	elem.style([["background", "black"]]);
});

squares[1].move({ x:((c.getSize().x/2)-(squares[1].getSize().x/2))+"px" });
squares[2].move({ x:((c.getSize().x)-(squares[2].getSize().x))+"px" });
squares[3].move({ y:((c.getSize().y/2)-(squares[3].getSize().y/2))+"px" });
squares[4].move({ y:((c.getSize().y/2)-(squares[4].getSize().y/2))+"px" });
squares[4].move({ x:((c.getSize().x/2)-(squares[4].getSize().x/2))+"px" });
squares[5].move({ y:((c.getSize().y/2)-(squares[5].getSize().y/2))+"px" });
squares[5].move({ x:((c.getSize().x)-(squares[5].getSize().x))+"px" });
squares[6].move({ y:((c.getSize().y)-(squares[6].getSize().y))+"px" });
squares[7].move({ x:((c.getSize().x/2)-(squares[7].getSize().x/2))+"px" });
squares[7].move({ y:((c.getSize().y)-(squares[7].getSize().y))+"px" });
squares[8].move({ x:((c.getSize().x)-(squares[8].getSize().x))+"px" });
squares[8].move({ y:((c.getSize().y)-(squares[8].getSize().y))+"px" });

}