
import { Camera } from './entities.js'

export function loadImage(path) {
	return new Promise((resolve, reject) => {
		const image = new Image();
		image.onload = function() {
			resolve(image);
		};
		image.src = path;
	});
}

export function randi(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

export function randf(min, max) {
	return Math.random() * (max - min) + min;
}

export function collision(entity1, entity2) {
	const rect1 = {
		x: entity1.x - Camera.xOffset,
		y: entity1.y - Camera.yOffset,
		width: entity1.width,
		height: entity1.height
	};

	const rect2 = {
		x: entity2.x - Camera.xOffset,
		y: entity2.y - Camera.yOffset,
		width: entity2.width,
		height: entity2.height
	};

	if (rect1.x < rect2.x + rect2.width &&
		rect1.x + rect1.width > rect2.x &&
		rect1.y < rect2.y + rect2.height &&
		rect1.y + rect1.height > rect2.y) {
		return true;
	} else {
		return false;
	}
}