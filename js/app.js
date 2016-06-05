// DEFINE EVENTS WHEN BOX IS CLICKED BY PLAYER
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

// PLAYER 1 GETS 'X' and other (or player 2) gets 'O'
function definePatternForCurrentPlayer(player) {
  if(player == 1) {
    return 'cross';
  } else {
    return 'circle';
  }
}

// TELLS WHICH PLAYER IS NEXT
function setNextPlayer(player) {
  if(player == 1) {
    return player = 2;
  } else {
    return player = 1;
  }
}

// DISPLAYS THE 'ACTIVE' PLAYER IN TURN DIV
function displayNextPlayer(turn, player) {
  turn.html('Player turn : '+player);
}

// WINNER DECLARED IF ANY ONE THE OPTIONS BELOW IS MET
function checkIfPlayerWon(table, pattern) {
  var won = 0;
  if(table.find('.item1').hasClass(pattern) && table.find('.item2').hasClass(pattern) && table.find('.item3').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item1').hasClass(pattern) && table.find('.item4').hasClass(pattern) && table.find('.item7').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item1').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item4').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item6').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item7').hasClass(pattern) && table.find('.item8').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item2').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item8').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item3').hasClass(pattern) && table.find('.item6').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item3').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item7').hasClass(pattern)) {
    won = 1;
  }
  return won;
}

// CLEAR 'X' and 'O's from td on table
function reset(table) {
  table.find('td').each(function() {
    $(this).removeClass('circle').removeClass('cross');
  });


}