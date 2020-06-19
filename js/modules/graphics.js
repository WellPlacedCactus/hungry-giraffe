
export class SpriteSheet {
	constructor(image, spriteSize) {
		this.image = image;
		this.spriteSize = spriteSize;
		this.sprites = [];
		this.loadSprites();
	}

	loadSprites() {
		const rows = this.image.height / this.spriteSize;
		const cols = this.image.width / this.spriteSize;

		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < cols; x++) {
				const buffer = document.createElement('canvas');
				const context = buffer.getContext('2d');
				buffer.width = this.spriteSize;
				buffer.height = this.spriteSize;
				context.drawImage(
					this.image,
					x * this.spriteSize,
					y * this.spriteSize,
					this.spriteSize,
					this.spriteSize,
					0, 0,
					buffer.width,
					buffer.height);
				this.sprites[x + y * cols] = buffer;
			}
		}
	}
}