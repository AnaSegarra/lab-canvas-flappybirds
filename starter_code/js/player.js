class Player {
	constructor(ctx, width, height, x, y, image) {
		this.ctx = ctx;
		this.width = width;
		this.height = height;
		this.gravity = 0.2;
		this.gravitySpeed = 0.7;
		this.x = x;
		this.y = y;

		this.jump = 0;

		this.image = new Image();
		this.image.src = image;

		this.setListeners();
	}

	draw() {
		this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	}

	move() {
		if (this.y + this.gravitySpeed + this.jump < 0) {
			this.y = 0;
		} else {
			this.y += this.gravitySpeed + this.jump;
		}
		this.gravitySpeed += this.gravity;
	}

	setListeners() {
		let keyHeld = true;
		document.addEventListener('keydown', e => {
			if (!keyHeld) return;
			if (e.keyCode === 32) {
				this.jump = -10;
				this.gravitySpeed = 0;
				keyHeld = false;
			}
		});
		document.addEventListener('keyup', e => {
			if (e.keyCode === 32) {
				this.jump = 0;
				keyHeld = true;
			}
		});
	}
}
