//business logic
var player1 = "";
var player2 = "";

var throwdice = function() {
  return Math.floor(6 * Math.random()) + 1;
}

$(document).ready(function() {
  $('#player1-roll').click(function() {
    $('#score1').text(9);

  });
});
$(document).ready(function() {
  $('#player2-roll').click(function() {
    $('#score2').text(6);

  });
});
$(document).ready(function() {
  $('#player1-hold').click(function() {
    $('#score1').text(5);

  });
});
$(document).ready(function() {
  $('#player2-hold').click(function() {
    $('#score2').text(3);

  });
});
