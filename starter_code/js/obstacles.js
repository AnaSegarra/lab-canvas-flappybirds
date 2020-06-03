class Obstacle {
	constructor(ctx, width, height, x, y, image) {
		this.ctx = ctx;
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
		this.image = new Image();
		this.image.src = image;
	}
	draw() {
		this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	}
	move() {
		this.x -= 100;
	}
}
