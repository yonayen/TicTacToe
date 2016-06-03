$(function() {
	var player = 1;
	var table = $('table');
	var messages = $('.messages');
	var turn = $('.turn');
	displayNextPlayer(turn, player);

	$('td').click(function() {
		td = $(this);
		var state = getState(td);
		if(!state) {
			var pattern = definePatternForCurrentPlayer(player);
			// Pattern for player is 'x' or 'o'
			changeState(td, pattern);
			if(checkIfPlayerWon(table, pattern)) {
				messages.html('Player ' + player + ' has won.');
				turn.html('');
			}
		}
	});
});