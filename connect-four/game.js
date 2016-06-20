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
        } else {
          this.board[i][j] = "o"
        };
      };
    };
  };
};

Game.prototype.changeColor = function( target, player ) {
  $( target ).css("background-color", player );
  $( target ).removeClass( "plain" );
};

Game.prototype.horizontalWinner = function() {
  this.board.forEach( function( row ) {
    if( row.join("").includes("xxxx") ) {
      this.winner.push( this.player1 );
    } else if( row.join("").includes("oooo") ) {
      this.winner.push( this.player2 );
    }
  }.bind(this))
};

Game.prototype.verticalWinner = function( board ) {
  var unzipBoard = _.unzip(board);
  unzipBoard.forEach( function( row ) {
    if( row.join("").includes("xxxx") ) {
      this.winner.push( this.player1 )
    } else if( row.join("").includes("oooo") ) {
      this.winner.push( this.player2 )
    }
  }.bind(this));
};

Game.prototype.rotate = function( array, n ) {
   return array.slice(n, array.length).concat(array.slice(0, n));
};

Game.prototype.diagonalWinner = function( direction ) {
  var rotateArray = []
  this.board.forEach(function( row, index ) {
    if(direction == "left") {
      rotateArray.push( this.rotate( row, -(index+1) ) )
    } else {
      rotateArray.push( this.rotate( row, (index+1) ) )
    };
  }.bind(this));
  this.verticalWinner( rotateArray);
};

Game.prototype.checkWinner = function() {
  this.horizontalWinner();
  this.verticalWinner( this.board );
  this.diagonalWinner();
  this.diagonalWinner("left");
  if( this.winner[0] === this.player1 ) {
    return "player1"
  } else if( this.winner[0] === this.player2 ){
    return "player2"
  };
};
