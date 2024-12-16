function changeLights() {
	lightsWrapper = document.getElementsByClassName('lights');
	screenSize = window.innerWidth;
	lights = [];

	colorOrder = ['red', 'green', 'blue', 'yellow'];

	for (let i = 0; i < Math.floor(screenSize / 90); i++) {
		let light = document.createElement('div');
		light.classList.add('light');
		light.classList.add(colorOrder[i % colorOrder.length]);

		lights.push(light);
	}

	wrappers = [lightsWrapper.up, lightsWrapper.down];
	wrappers.forEach(wrapper => {
		wrapper.innerHTML = '';
	});

	lights.forEach(light => {
		lightsWrapper.up.appendChild(light.cloneNode(true));
	});

	lights.reverse().forEach(light => {
		lightsWrapper.down.appendChild(light.cloneNode(true));
	});
}

document.addEventListener('DOMContentLoaded', () => {
	changeLights();

	window.addEventListener('resize', () => {
		changeLights();
	});
});
