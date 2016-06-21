$(document).ready(function(){
  var game = new Game();
  $("#board").on("click", "td.plain", function(e) {
    e.preventDefault();
    debugger;
    if ($(e.target).hasClass("plain")) {
      if ( game.moves % 2 === 0 ) {
        $(e.target).toggleClass("x");
        $(e.target).removeClass("plain");
        x = true;
      } else {
        $(e.target).toggleClass("o");
        $(e.target).removeClass("plain");
        x = false
      };
    };
  });


});