var width = 640, height = 480;

var pjs = new PointJS('2D', width, height);

pjs.system.initFullScale();
pjs.system.initFullScale();
pjs.system.initFPSCheck();
pjs.keyControl.isInputMode();
pjs.keyControl.getInputChar();

var math   = pjs.math; 
var lm = pjs.memory.local;
var log = pjs.system.log;
var game = pjs.game;
var OOP = pjs.OOP;
var math = pjs.math;
var p = pjs.vector.point;
var s = pjs.vector.size;
var brush = pjs.brush;
var mouse = pjs.mouseControl.initMouseControl();
var key = pjs.keyControl.initKeyControl();      

var bg = [], oldB;
OOP.forInt(3, function (i) {
	oldB = game.newImageObject({
		file : 'bg.png',
		h : height,
		onload : function () {
			this.x = i * this.w;
		}
	});
	bg.push(oldB);
});

var drawBG = function () {
	OOP.forArr(bg, function (el) {
		el.draw();

		el.move(p(-1, 0));

		if (el.x + el.w < 0) {
			el.x = oldB.x + oldB.w - 3;
			oldB = el;
		}

	});
};

var gr = [], oldG;
OOP.forInt(25, function (i) {
	oldG = game.newImageObject({
		file : 'gr.png',
		w : width / 20,
		onload : function () {
			this.x = i * this.w;
			this.y = -this.h + height;
		}
	});
	gr.push(oldG);
});

var drawGR = function () {
	OOP.forArr(gr, function (el) {
		el.draw();

		el.move(p(-1.5, 0));

		if (el.x + el.w < 0) {
			el.x = oldG.x + oldG.w - 3;
			oldG = el;
		}

	});
};

var records = new Records(11); 
var s = 6;

OOP.forInt(7, function (i) { 
	records.addRecord(pjs.math.random(0,150), 'Player ' + i); 
});

var MyGame = function () {


	
	this.update = function () {

		var record = lm.load(record);

		drawBG();
		drawGR();
		
		// Update function

		brush.drawText({
			x : width / 2,
			y : 10,
			text : 'Records',
			size : 50,
			color : 'white',
			font : 'myFont',
			align : 'center'
		});

		//brush.drawText({
		//	x : 10,
		//	y : 10,
		//	text : record,
		//	size : 50,
		//	color : 'white',
		//	font : 'myFont',
		//	align : 'center'
		//});

		var recArr = [];
		OOP.forArr(records.getRecords(), function (el) {
			recArr.push(el.info + ' - ' + el.record);
		}); 
		
		brush.drawTextLines({
			x : width/2.8, y : height/7,
			lines : recArr,
			size : 25,
			color : '#254364',
			font : 'myFont'
		});
		
		var back = game.newTextObject({
			text : 'Back',
			positionC : p(width/2, height/1.15),
			font : 'myFont',
			size : 35,
			color : '#254364'
		});
		
		var save = game.newTextObject({
			text : 'Save',
			positionC : p(width/2, height/1.25),
			font : 'myFont',
			size : 35,
			color : '#254364'
		});

		if (mouse.isPeekObject('LEFT', back)) {
			location = 'index.html';
		};

		if (mouse.isPeekObject('LEFT', save)) {
			
		};

		back.draw();
		save.draw();

		
	};
};
game.newLoopFromClassObject('myGame', new MyGame());

game.startLoop('myGame');