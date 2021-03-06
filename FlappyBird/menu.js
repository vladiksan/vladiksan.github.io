var Menu = function () {

	this.update = function () {

		var time = pjs.game.getTime();

		function checkTime(i){
		if (i<10){
			i="0" + i;
		}
			return i;
		}
		var t = new Date();


		drawBG();
		bird.draw();

		if (key.isPress('P'))
			if(theme.playing)
				theme.stop();
			else
				theme.play();

		drawGR();

		brush.drawText({
			x : width / 2,
			y : height / 6,
			text : 'FlappyBird',
			size : 50,
			color : 'white',
			font : 'myFont',
			align : 'center'
		});

		brush.drawText({
			x : width / 2,
			y : 10,
			text : checkTime(t.getHours()) + ':' + checkTime(t.getMinutes()) + ':' + checkTime(t.getSeconds()),
			size : 25,
			color : 'white',
			font : 'myFont',
			align : 'center'
		});

		var records = game.newTextObject({
			text : 'Records',
			positionC : p(width/2, height/3),
			font : 'myFont',
			size : 35,
			color : '#254364'
		});
		var name = game.newTextObject({
			text : 'Hello ' + user_name + ' ' + user_fam,
			positionC : p(width/2, height/1.5),
			font : 'myFont',
			size : 23,
			color : '#254364'
		});
		
		name.draw();
		records.draw();

		if (key.isPress('SPACE')) {
			return game.setLoop('game');
		}

		if (mouse.isPeekObject('LEFT', records)) {
			location = 'index2.html';
		}

		if (mouse.isPeekObject('LEFT', name)) {

		}
	};
};

