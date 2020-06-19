
import { SpriteSheet } from './graphics.js'
import { loadImage } from './utils.js'

export default class Assets {}

const image = loadImage('./assets/textures/sprites.png')
	.then(image => {
		const sheet = new SpriteSheet(image, 16);

		Assets.giraffe = [
			sheet.sprites[0],
			sheet.sprites[1],
			sheet.sprites[2]
		];
		Assets.tree = sheet.sprites[3];
		Assets.appleTree = sheet.sprites[4];
		Assets.trunk = sheet.sprites[5];
	});
