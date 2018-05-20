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
			records.addRecord(23, 'Владислав');
		};
		back.draw();
		save.draw();

		
	};
};