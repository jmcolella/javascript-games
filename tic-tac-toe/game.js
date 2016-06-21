function Game() {
  this.player1 = "X";
  this.player2 = "O";
  this.board = [["-","-","-"],
                ["-","-","-"],
                ["-","-","-"]];
  this.moves = 0;
  this.winner = [];
};

Game.prototype.makeMove = function( targetIndex, rowIndex, player ) {
  for( var i = 0; i < this.board.length; i++ ) {
    for( var j = 0; j < this.board[i].length; j++ ) {
      if( rowIndex === i && targetIndex === j ) {
        if( player === this.player1 ) {
          this.board[i][j] = "X";
        } else if( player == this.player2 ) {
          this.board[i][j] = "O";
        };
      };
    };
  };
};

Game.prototype.placeMarker = function( target, player ) {
  $(target).addClass("marker");
   $(target).removeClass("plain");
  if( player === this.player1 ) {
    $(target).text("X");
  } else if( player === this.player2 ) {
    $(target).text("O");
  };
};

Game.prototype.isWon = function() {
  this.horizontalWinner( this.board );
  this.verticalWinner( this.board );
  this.diagonalWinner( "left" );
  this.diagonalWinner();
  if( this.winner[0] === this.player1 ) {
    return this.player1
  } else if( this.winner[0] === this.player2 ) {
    return this.player2
  };
};

Game.prototype.horizontalWinner = function( board ) {
  board.forEach( function( row ) {
    if( row.join("").includes("XXX") ) {
      this.winner.push( this.player1 );
    } else if ( row.join("").includes("OOO") ) {
      this.winner.push( this.player2 );
    };
  }.bind(this));
};

Game.prototype.verticalWinner = function( board ) {
  var unzipBoard = _.unzip( board );
  this.horizontalWinner( unzipBoard );
};

Game.prototype.rotate = function( array, n ) {
  return array.slice(n, array.length).concat(array.slice(0, n));
}

Game.prototype.diagonalWinner = function( direction ) {
  var rotateArray = []
  this.board.forEach( function( row, index ) {
    if( direction === "left" ) {
      rotateArray.push( this.rotate( row, -(index + 1) ) );
    } else {
      rotateArray.push( this.rotate( row, (index + 1) ) );
    }
  }.bind(this));
  this.verticalWinner( rotateArray );
};