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
			// adds 'x' or 'o' to space
			if(checkIfPlayerWon(table, pattern)) {
				messages.html('Player ' + player + ' has won.');
				turn.html('');
			} else {
				player = setNextPlayer(player);
				displayNextPlayer(turn, player);
			}
		} else {
			// if game hasn't been won and someone clicks on selected box
			messages.html('This box is already checked.')
		}
	});

	$('.reset').click(function() {

	});

		}
			}
	});
});