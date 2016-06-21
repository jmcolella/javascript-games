function Game() {
  this.player1 = "X";
  this.player2 = "O";
  this.board = [["-","-","-"],
                ["-","-","-"],
                ["-","-","-"]];
  this.moves = 0;
  this.winner = [];
};

// Game.prototype.makeMove = function(targetIndex, rowIndex, player) {

// };