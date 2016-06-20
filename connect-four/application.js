$(document).ready(function() {
  var game = new Game();
  $("#board").on("click", "td.plain", function(e) {
    e.preventDefault();
    var cellIndex = $(e.target).index();
    var rowIndex = $(e.target).parent().index();
    if ($(e.target).hasClass("plain")) {
      if (!($(e.target).parent().siblings().eq(rowIndex).children().eq(cellIndex).hasClass("plain"))) {
        if (game.moves % 2 == 0) {
          game.placeChip( cellIndex, rowIndex, game.player1 )
          game.changeColor( e.target, game.player1 );
          if( game.checkWinner() === "player1" ) {
            $("#player1-win-message").show();
            $(document).off("click");
            setTimeout(function(){
              window.location.reload();
            }, 5000);
          };
        } else {
          game.placeChip( cellIndex, rowIndex, game.player2 )
          game.changeColor( e.target, game.player2 );
          if( game.checkWinner() === "player2" ) {
            $("#player2-win-message").show();
            $(document).off("click");
            setTimeout(function(){
              window.location.reload();
            }, 5000);
          };
        };
        game.moves += 1
      };
    };
  })
});

