var Menu2 = function () {

	this.update = function () {

		drawBG();
		drawGR();

		if (key.isPress('P'))
			if(theme.playing)
				theme.stop();
			else
				theme.play();

		brush.drawText({
			x : width / 2,
			text : 'FlappyBird',
			size : 50,
			color : 'white',
			font : 'myFont',
			align : 'center'
		});

		brush.drawText({
			x : width / 2,
			y : height / 9,
			text : 'YourScore: ' + score,
			size : 50,
			color : 'white',
			font : 'myFont',
			align : 'center'
	});

		var continued = game.newTextObject({
			text : 'continued',
			positionC : p(width/2, height/2),
			font : 'myFont',
			size : 35,
			color : '#254364'
		});

		var end = game.newTextObject({
			text : 'end',
			positionC : p(width/2, height/1.7),
			font : 'myFont',
			size : 35,
			color : '#254364'
		});

		var records = game.newTextObject({
			text : ' Save Records',
			positionC : p(width/2, height/2.4),
			font : 'myFont',
			size : 35,
			color : '#254364'
		});
			records.draw();
 			end.draw();
			continued.draw();

			if (mouse.isPeekObject('LEFT', records)) {
				location = 'index2.html';
				
			location = 'index2.html';
	}
			if (mouse.isPeekObject('LEFT', continued)) {
			game.setLoop('game');
			score = score1;
	}
		if (mouse.isPeekObject('LEFT', end)) {
			helth = 3;
			game.setLoop('GameOver');
	}
	};
};