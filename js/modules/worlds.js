
import { Camera, ScoreBoard, Player, Tree } from './entities.js'
import { randi, collision } from './utils.js'

export default class World {
	constructor(canvas) {
		this.canvas = canvas;
		this.camera = new Camera(canvas);
		this.entities = [];

		this.player = new Player();
		this.player.x = 0;
		this.player.y = 0;

		const range = 5000;
		for (let i = 0; i < 500; i++) {
			const x = randi(-range, range);
			const y = randi(-range, range);
			this.spawn(new Tree(), x, y);
		}
	}

	update() {
		this.player.update();
		this.camera.centerOnEntity(this.player);

		for (var i = this.entities.length - 1; i >= 0; i--) {
			const entity = this.entities[i];
			entity.update();

			if (collision(this.player, entity)) {
				if (entity instanceof Tree) {
					if (entity.dead) return;
					entity.dead = true;
					ScoreBoard.score++;
					console.log(ScoreBoard.score);
				}
			}
		}
	}

	render(c) {
		for (var i = this.entities.length - 1; i >= 0; i--) {
			const entity = this.entities[i];
			entity.render(c);
		}
		this.player.render(c);
	}

	spawn(entity, x, y) {
		entity.x = x;
		entity.y = y;
		this.entities.push(entity);
	}
}