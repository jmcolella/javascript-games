function Game() {
  this.player1 = "red";
  this.player2 = "yellow";
  this.board = [["-","-","-","-","-","-","-"],
                ["-","-","-","-","-","-","-"],
                ["-","-","-","-","-","-","-"],
                ["-","-","-","-","-","-","-"],
                ["-","-","-","-","-","-","-"],
                ["-","-","-","-","-","-","-"]];
  this.moves = 0;
  this.winner = []
};

Game.prototype.placeChip = function(targetIndex, parentIndex, player) {
  for( var i = 0; i < this.board.length; i++ ) {
    for( var j = 0; j < this.board[i].length; j++ ) {
      if( parentIndex == i && targetIndex == j ) {
        if( player == this.player1) {
          this.board[i][j] = "x"
          console.log(this.board)
        } else {
          this.board[i][j] = "o"
          console.log(this.board)
        };
      };
    };
  };
};

Game.prototype.changeColor = function( target, player ) {
  $( target ).css("background-color", player );
  $( target ).removeClass( "plain" );
};

Game.prototype.checkWinner = function() {
  this.horizontalWinner();
  this.verticalWinner();
  if( this.winner = this.player1 ) {
    return "player1"
  } else if( this.winner = this.player2 ){
    return "player2"
  };
};

Game.prototype.horizontalWinner = function() {
  this.board.forEach( function( row ) {
    if( row.join("").includes("xxxx") ) {
      this.winner.push( this.player1 );
      console.log("player1")
    } else if( row.join("").includes("oooo") ) {
      this.winner.push( this.player2 );
    }
  })
};

Game.prototype.verticalWinner = function() {
  var unzipBoard = _.unzip(this.board);
  unzipBoard.forEach( function( row ) {
    if( row.join().includes("xxxx") ) {
      this.winner.push( this.player1 )
    } else if( row.join().includes("oooo") ) {
      this.winner.push( this.player2 )
    }
  });
};
