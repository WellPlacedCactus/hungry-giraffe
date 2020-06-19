
import Assets from './assets.js'
import { Keyboard } from './input.js'

export class Camera {
	constructor(canvas) {
		this.vpWidth = canvas.width;
		this.vpHeight = canvas.height;
	}

	centerOnEntity(entity) {
		Camera.xOffset = entity.x - this.vpWidth / 2 + entity.width / 2;
		Camera.yOffset = entity.y - this.vpHeight / 2 + entity.height / 2;
	}
}

Camera.xOffset = 0;
Camera.yOffset = 0;

export class ScoreBoard {}

ScoreBoard.score = 0;

export class Entity {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	update() {}

	render(c) {}
}

Entity.DEF_WIDTH = 128;
Entity.DEF_HEIGHT = 128;

export class Player extends Entity {
	constructor() {
		super(0, 0, Entity.DEF_WIDTH, Entity.DEF_HEIGHT);

		this.velX = 0;
		this.velY = 0;
		this.velMax = 20;
		this.acc = 1;
		this.dec = this.acc;
	}

	update() {
		this.input();
		this.move();
	}

	render(c) {
		c.drawImage(
			Assets.giraffe[0],
			this.x - Camera.xOffset,
			this.y - Camera.yOffset,
			this.width,
			this.height);
	}

	input() {
		// left
		if (Keyboard.keys[37] || Keyboard.keys[65]) {
			if (this.velX > -this.velMax) {
				this.velX -= this.acc;
			} else {
				this.velX = -this.velMax;
			}
		} else {
			if (this.velX < 0) {
				this.velX += this.dec;
			}
		}

		// right
		if (Keyboard.keys[39] || Keyboard.keys[68]) {
			if (this.velX < this.velMax) {
				this.velX += this.acc;
			} else {
				this.velX = this.velMax;
			}
		} else {
			if (this.velX > 0) {
				this.velX -= this.dec;
			}
		}

		// up
		if (Keyboard.keys[38] || Keyboard.keys[87]) {
			if (this.velY > -this.velMax) {
				this.velY -= this.acc;
			} else {
				this.velY = -this.velMax;
			}
		} else {
			if (this.velY < 0) {
				this.velY += this.dec;
			}
		}

		// down
		if (Keyboard.keys[40] || Keyboard.keys[83]) {
			if (this.velY < this.velMax) {
				this.velY += this.acc;
			} else {
				this.velY = this.velMax;
			}
		} else {
			if (this.velY > 0) {
				this.velY -= this.dec;
			}
		}
	}

	move() {
		this.x += this.velX;
		this.y += this.velY;
	}
}

export class Tree extends Entity {
	constructor() {
		super(0, 0, Entity.DEF_WIDTH, Entity.DEF_HEIGHT);
		this.dead = false;
	}

	render(c) {
		let image;
		if (!this.dead) {
			image = Assets.tree;
		} else {
			image = Assets.trunk;
		}
		c.drawImage(
			image,
			this.x - Camera.xOffset,
			this.y - Camera.yOffset,
			this.width,
			this.height);
	}
}