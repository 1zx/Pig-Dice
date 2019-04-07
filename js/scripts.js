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



$(document).ready(function() {

      $("button#start").click(function(event) {
        player1 = new Player(true);
        player2 = new Player(false);


      });

      function Player(turn) {
        this.roll = 0;
        this.tempscore = 0;
        this.totalscore = 0;
        this.turn = turn;
        this.playerName;
      }

      Player.prototype.rollone = function() {
        if (this.roll === 1) {
          this.tempscore = 0;
          alert(" Sorry! Your turn is over!")

        } else {
          this.tempscore += this.roll;
        }
      }

      Player.prototype.hold = function() {
        this.totalscore += this.tempscore;
        this.tempscore = 0;

        alert(" Oops! your turn is over,");
      }

      Player.prototype.winnerCheck = function() {
        if (this.totalscore >= 100) {
          alert(this.playerName + " You are the winner!");
        }
      }

  

$("button#player1-roll").click(function(event) {
  player1.roll = throwdice();
  $("#die-roll-1").text(player1.roll);
  player1.rollone();
  $("#round-total-1").text(player1.tempscore);
});

$("button#player2-roll").click(function(event) {
  player2.roll = throwdice();
  $("#die-roll-2").text(player2.roll);
  player2.rollone();
  $("#round-total-2").text(player2.tempscore);
});

$("button#player1-hold").click(function(event) {
  player1.hold();
  $("#total-score-1").text(player1.totalscore);
  $("#round-total-1").empty();
  $("#die-roll-1").empty();
  player1.winnerCheck();
});

$("button#player2-hold").click(function(event) {
  player2.hold();
  $("#total-score-2").text(player2.totalscore);
  $("#round-total-2").empty();
  $("#die-roll-2").empty();
  player2.winnerCheck();
});

});
