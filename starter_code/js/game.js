class Game {
	constructor() {
		this.canvas;
		this.ctx;
		this.width;
		this.height;
		this.player;
	}

	initGame() {
		this.canvas = document.getElementById('canvas');
		this.ctx = this.canvas.getContext('2d');
		this.width = this.canvas.width;
		this.height = this.canvas.height;
		this.player = new Player(this.ctx, 50, 50, 'images/flappy.png');

		window.requestAnimationFrame(this.start.bind(this));
	}

	start() {
		this.clear();
		this.drawAll();
		this.player.move();
		window.requestAnimationFrame(this.start.bind(this));
	}

	drawAll() {
		this.player.draw();
	}

	clear() {
		this.ctx.clearRect(0, 0, this.width, this.height);
	}
}
