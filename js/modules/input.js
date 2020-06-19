
export class Keyboard {
	constructor() {
		Keyboard.keys = [];
		this.init();
	}

	init() {
		window.addEventListener('keydown', event => {
			Keyboard.keys[event.keyCode] = true;
		});
		window.addEventListener('keyup', event => {
			Keyboard.keys[event.keyCode] = false;
		});
	}
}

export class Mouse {
	constructor(element) {
		Mouse.x = 0;
		Mouse.y = 0;
		Mouse.buttons = [];
		this.element = element;
		this.init();
	}

	init() {
		this.element.addEventListener('mousemove', event => {
			Mouse.x = event.x;
			Mouse.y = event.y;
		});
		this.element.addEventListener('mousedown', event => {
			Mouse.buttons[event.button] = true;
		});
		this.element.addEventListener('mouseup', event => {
			Mouse.buttons[event.button] = false;
		});
	}
}