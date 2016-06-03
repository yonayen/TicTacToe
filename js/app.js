
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
		        messages.html('Player '+player+' has won.');
		        turn.html('');
		    } else {
		        player = setNextPlayer(player);
		        displayNextPlayer(turn, player);
		      }
		    } else {
		      messages.html('This box is already checked.');
		    }
		  });

//  RESET THE BOARD!

  $('.reset').click(function() {
    player = 1;
    messages.html('');
    reset(table);
    displayNextPlayer(turn, player);
  });

});

//  CHECK IF 'td' has been filled with 'x' or 'o'
function getState(td) {
  if(td.hasClass('cross') || td.hasClass('circle')) {
    return 1;
  } else {
    return 0;
  }
}

//  ADDS PATTERN TO THE 'td'
function changeState(td, pattern) {
  return td.addClass(pattern);
}

// 
function definePatternForCurrentPlayer(player) {
  if(player == 1) {
    return 'cross';
  } else {
    return 'circle';
  }
}


});