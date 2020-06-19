
import World from './modules/worlds.js'
import { Keyboard, Mouse } from './modules/input.js'

resize();
const canvas = document.getElementById('viewport');
const context = canvas.getContext('2d');
context.imageSmoothingEnabled = false;

const keyboard = new Keyboard();
const mouse = new Mouse(canvas);
const world = new World(canvas);

async function loadResources() {
	requestAnimationFrame(loop);
}

function loop() {
	requestAnimationFrame(loop);
	context.fillStyle = 'black';
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillRect(0, 0, canvas.width, canvas.height);

	world.update();
	world.render(context);
}

function resize() {
	const viewport = document.getElementById('viewport');
	viewport.width = window.innerWidth;
	viewport.height = window.innerHeight;
}

window.onload = loadResources;
window.onresize = resize;