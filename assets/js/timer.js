document.addEventListener('DOMContentLoaded', function () {
	const countdownWrapper = document.getElementById('countdown');
	const happyWrapper = document.getElementById('happy');
	const fireworksWrapper = document.getElementById('fireworks');

	// Help animation to be happy
	happyWrapper.addEventListener('animationstart', () => {
		happyWrapper.style.display = 'block';
		happyWrapper.style.height = 'auto';
	});

	const days = document.getElementById('days');
	const hours = document.getElementById('hours');
	const minutes = document.getElementById('minutes');
	const seconds = document.getElementById('seconds');

	function countdown() {
		const currentDate = new Date();
		const eventDate = new Date(
			`${currentDate.getFullYear()}-12-25T00:00:00`
		);
		// const eventDate = new Date(
		// 	`${currentDate.getFullYear()}-12-18T21:34:30`
		// );

		if (eventDate <= currentDate) {
			countdownWrapper.classList.add('happy');
			happyWrapper.classList.add('happy');

			if ((currentDate - eventDate) / 1000 <= 30) {
				fireworksWrapper.onanimationend = () => {};
				fireworksWrapper.onanimationiteration = () => {};

				fireworksWrapper.style.display = 'block';
			} else if (fireworksWrapper.style.display === 'block') {
				fireworksWrapper.onanimationiteration = () => {
					fireworksWrapper.style.display = 'none';
				};
				fireworksWrapper.onanimationend = () => {
					fireworksWrapper.style.display = 'none';
				};
			}
			return;
		}

		if (
			countdownWrapper.classList.contains('happy') ||
			happyWrapper.classList.contains('happy')
		) {
			countdownWrapper.classList.remove('happy');
			happyWrapper.classList.remove('happy');
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
	setInterval(countdown, 500);
});
