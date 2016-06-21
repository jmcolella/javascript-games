$(document).ready(function(){
  var game = new Game();
  $("#board").on("click", "td.plain", function(e) {
    e.preventDefault();
    var cellIndex = $(e.target).index();
    var rowIndex = $(e.target).parent().index();
    if ($(e.target).hasClass("plain")) {
      if ( game.moves % 2 === 0 ) {
        debugger;
        game.makeMove(cellIndex, rowIndex, game.player1);
        game.placeMarker(e.target, game.player1);
      } else {
        game.makeMove(cellIndex, rowIndex, game.player2);
        game.placeMarker(e.target, game.player2);
      };
      game.moves += 1
    };
  });


});