const game = new Game();

window.onload = function() {
	document.getElementById('start-button').onclick = function() {
		game.initGame();
		document.getElementById('start-button').style.display = 'none';
	};
};
