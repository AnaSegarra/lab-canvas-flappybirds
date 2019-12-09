class Game {
	constructor() {
		this.canvas;
		this.ctx;
		this.width;
		this.height;
	}
	startGame() {
		this.canvas = document.getElementById('canvas');
		this.ctx = this.canvas.getContext('2d');
		this.width = this.canvas.width;
		this.height = this.canvas.height;
		console.log(this);
	}
}
