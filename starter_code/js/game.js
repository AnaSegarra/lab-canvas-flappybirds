class Game {
	constructor() {
		this.canvas;
		this.ctx;
		this.width;
		this.height;
		this.player;
		this.obstacleTop;
		this.obstacleBottom;
		this.frame = 0;

		this.positionX = 1000;
	}

	initGame() {
		document.getElementById('start-button').style.display = 'none';

		this.canvas = document.getElementById('canvas');
		this.ctx = this.canvas.getContext('2d');
		this.width = this.canvas.width;
		this.height = this.canvas.height;
		this.player = new Player(this.ctx, 50, 50, 50, 100, 'images/flappy.png');

		window.requestAnimationFrame(this.start.bind(this));
	}

	start() {
		this.generateObstacles();

		this.clear();
		this.drawAll();
		this.moveAll();

		document.getElementById('velocity').innerHTML = Math.floor(this.player.gravitySpeed);

		if (this.hasCollided()) {
			document.getElementById('start-button').style.display = 'initial';
			return;
		}
		window.requestAnimationFrame(this.start.bind(this));
	}

	drawAll() {
		this.player.draw();
		this.obstacleTop.draw();
		this.obstacleBottom.draw();
	}

	moveAll() {
		this.player.move();
		this.positionX -= 200;
	}

	clear() {
		this.obstacles = [];
		this.ctx.clearRect(0, 0, this.width, this.height);
	}

	hasCollided() {
		return this.player.y >= this.height - this.player.height;
	}

	generateObstacles() {
		let minHeight = 20;
		let maxHeight = 200;
		let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
		let minGap = 50;
		let maxGap = 200;
		let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

		this.obstacleTop = new Obstacle(this.ctx, 80, height, this.positionX, 0, 'images/obstacle_top.png');
		this.obstacleBottom = new Obstacle(
			this.ctx,
			80,
			this.height - height - gap,
			this.width,
			height + gap,
			'images/obstacle_bottom.png'
		);
	}
}
