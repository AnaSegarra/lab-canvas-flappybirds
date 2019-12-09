const game = new Game();

window.onload = function() {
	document.getElementById('start-button').onclick = function() {
		game.startGame();
	};
};
