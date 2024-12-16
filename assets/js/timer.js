document.addEventListener('DOMContentLoaded', function () {
	const days = document.getElementById('days');
	const hours = document.getElementById('hours');
	const minutes = document.getElementById('minutes');
	const seconds = document.getElementById('seconds');

	function countdown() {
		const currentDate = new Date();
		const eventDate = new Date(`${currentDate.getFullYear()}-12-25T00:00:00`);

		if (eventDate < currentDate) {
			// TODO:
			console.log('Christmas has passed!');
			return;
		}

		const totalSeconds = (eventDate - currentDate) / 1000;

		const d = Math.floor(totalSeconds / 3600 / 24);
		const h = Math.floor(totalSeconds / 3600) % 24;
		const m = Math.floor(totalSeconds / 60) % 60;
		const s = Math.floor(totalSeconds) % 60;

		days.innerHTML = d < 10 ? '0' + d : d;
		hours.innerHTML = h < 10 ? '0' + h : h;
		minutes.innerHTML = m < 10 ? '0' + m : m;
		seconds.innerHTML = s < 10 ? '0' + s : s;
	}

	countdown();
	setInterval(countdown, 1000);
});
