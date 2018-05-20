var Game = function () {

	var heart2 = [], oldHeart2;

	var addHeart2 = function(j) {

		var dJ = oldHeart2 ? oldHeart2.midle.x + pjs.math.random(150,400) : width;

		var he = game.newImageObject({
			file : 'heart.png',
			x: dJ , y : pjs.math.random(30, 400) ,
			w: width / 25,
			onload : function(){
			}
		});

		var obj = {
			'midle' : he,
		}

		oldHeart2 = obj;
		heart2.push(obj);
	};

	OOP.forInt(15, function() {
		addHeart2(pjs.math.random(0, height));
	});

	var drawHeart2 = function(){
		OOP.forArr(heart2, function(eh, i){
			eh.midle.draw();

			eh.midle.move(p(-1.5, 0));


			if (eh.midle.isInCamera()){
				if (eh.midle.isIntersect(bird)) {
					if (helth == 5)
					{
						heart2.splice(i, 1);
					}
					else if(helth < 5)
					{
						helth ++;
						heart2.splice(i, 1);
					}
					
				}
			}
		});
	};


	var blocks = [], oldBlock = false;
	var space = 80;

	var addBlock = function (y) {

		var dX = oldBlock ? oldBlock.top.x + pjs.math.random(150, 400) : width;

		var o = game.newImageObject({
			file : 'block.png',
			x : dX, y : 0,
			w : width / 10,
			angle : 180,
			onload : function () {
				this.y = -this.h + y - space;
			}
		});

		var o2 = game.newImageObject({
			file : 'block.png',
			x : dX, y : 0,
			w : width / 10,
			onload : function () {
				this.y = y + space;
			}
		});

		var o3 = game.newImageObject({
			file : 'block.png',
			x : dX + 60, y : 0,
			w : width / 10,
		});

		var obj = {
			'top' : o,
			'bottom' : o2,
			'mid' : o3
		}

		oldBlock = obj;
		blocks.push(obj);
	};

	var drawBlocks = function () {
		OOP.forArr(blocks, function (el, i) {
			el.top.draw();
			el.bottom.draw();
			el.mid.draw();
			(el.mid).setVisible( false );
			
				//Скорость

			if (score >= 0 && score < 10){
				el.top.move(p(-1.5, 0));
				el.bottom.move(p(-1.5, 0));
				el.mid.move(p(-1.5, 0));
			}
			if (score >= 10 && score < 20){
				el.top.move(p(-2, 0));
				el.bottom.move(p(-2, 0));
				el.mid.move(p(-2, 0));
			}
			if (score >= 20 && score < 30){
				el.top.move(p(-2.5, 0));
				el.bottom.move(p(-2.5, 0));
				el.mid.move(p(-2.5, 0));
			}
			if (score >= 30 && score < 40){
				el.top.move(p(-3, 0));
				el.bottom.move(p(-3, 0));
				el.mid.move(p(-3, 0));
			}
			if (score >= 40 && score < 50){
				el.top.move(p(-3.5, 0));
				el.bottom.move(p(-3.5, 0));
				el.mid.move(p(-3.5, 0));
			}
			if (score >= 50){
				el.top.move(p(-4, 0));
				el.bottom.move(p(-4, 0));
				el.mid.move(p(-4, 0));
			}

				// Рисование новых

			if (el.top.x + el.top.w < 0) {
				el.mid.x = el.top.x = el.bottom.x = oldBlock.top.x + oldBlock.top.w + pjs.math.random(150, 400);
				oldBlock = el;
				
				if (score > record){
					pjs.memory.local.save('record', score);
				}
				else{
					pjs.memory.local.save('record', score);
				}
				
			}

			if (el.mid.isInCamera()){
				if (el.mid.isStaticIntersect(bird.getStaticBox())) {
					score +=1;
					el.mid.x=0;
					point.play();
					}
				}

			if (el.top.isInCamera()) {
				if (el.top.isIntersect(bird)) {
					if (helth <= 1) {
						die.play();
						gameOver();
					}
					else{
					helth -= 1;
					die.play();
					score1 = score;
					restart();
					}
				}
			}

			if (el.bottom.isInCamera()) {
				if (el.bottom.isIntersect(bird)) {
						if (helth <= 1) {
						die.play();
						gameOver();
					}
					else{
					helth -= 1;
					die.play();
					score1 = score;
					restart();
					}
				}
			}

			if (bird.y < 0) {
					if (helth <= 1) {
						gameOver();
						die.play();
					}
					else{
					helth -= 1;
					die.play();
					score1 = score;
					restart();
					}
			}

			if (bird.y + bird.h > height) {
					if (helth <= 1) {
						gameOver();
						die.play();
					}
					else{
					helth -= 1;
					die.play();
					score1 = score;
					restart();
					}
			}

		});
	};

	var gameOver = function () {
		game.setLoop('GameOver');
	};

	var restart = function() {
		game.setLoop('menu2');
	};



	this.update = function () {

		if(i < 60)
		{
			i++;
		}
		if(i == 60)
		{
			sec++;
			i=0;
			time++;
		}

		if (score >= 0 && score < 5){
				drawBG();
			}
		if (score >= 5 && score < 10){
				drawBG2();
			}
		if (score >= 10 && score < 15){
				drawBG3();
			}
		if (score >= 15 && score < 20){
				drawBG4();
			}


		drawHeart2();

		if (key.isPress('P'))
			if(theme.playing)
				theme.stop();
			else
				theme.play();

		bird.draw();
		bird.dy += 0.5;
		bird.y += bird.dy;
		bird.angle = bird.dy;


		if (mouse.isPress('LEFT')) {
			wing.play();
			bird.dy = -8;
		}
		else if (key.isPress('SPACE')){
			wing.play();
			bird.dy = -8
		}

		drawBlocks();
		drawGR();

		pjs.brush.drawText({
			x : 543,
			y : 1,
			text : 'FPS:' + pjs.system.getFPS(),
			color : 'white',
			font : 'myFont',
			size : 30
		});

		brush.drawText({
			x : width / 2,
			y : height / 20,
			text : score,
			size : 50,
			color : 'white',
			font : 'myFont',
			align : 'center'
		});

		
		brush.drawText({
			x : width / 2,
			y : 5,
			text : 'Time to game: ' + time + ' sec',
			size : 15,
			color : 'white',
			font : 'myFont',
			align : 'center'
		});

		brush.drawText({
			x : width / 11,
			y : height / 100,
			text :  '= ' + helth,
			size : 25,
			color : 'white',
			font : 'myFont',
			align : 'center'
		});

		heart.draw();

	};

	this.entry = function () {

		bird.dy = 0;

		blocks = [], oldBlock = false;

		OOP.forInt(99, function () {
			addBlock(pjs.math.random(space*2, height-space*2));
		});


		bird.setPositionC(p(width / 2, height / 2));
		score = 0;
	};
};