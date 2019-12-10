class Player {
	constructor(ctx, width, height, image) {
		this.ctx = ctx;
		this.width = width;
		this.height = height;
		this.gravity = 0.1;
		this.gravitySpeed = 0.5;
		this.x = 50;
		this.y = 100;

		this.jump = 0;

		this.image = new Image();
		this.image.src = image;

		this.setListeners();
	}

	draw() {
		this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	}

	move() {
		this.y += this.gravitySpeed + this.jump;
		this.gravitySpeed += this.gravity;
	}

	setListeners() {
		document.addEventListener('keydown', e => {
			if (e.keyCode === 32) {
				this.jump = -20;
				this.gravitySpeed = 0;
			}
		});
		document.addEventListener('keyup', e => {
			if (e.keyCode === 32) {
				this.jump = 0;
			}
		});
	}
}
