function createSnowflake() {
	const snowflake = document.createElement('div');
	snowflake.classList.add('snowflake');
	snowflake.textContent = '❄';
	snowflake.style.left = Math.random() * window.innerWidth + 'px';
	snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
	snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

	document.getElementById('wrapper').appendChild(snowflake);

	setTimeout(() => {
		snowflake.remove();
	}, 7 * 1000);
}

setInterval(createSnowflake, 350);
