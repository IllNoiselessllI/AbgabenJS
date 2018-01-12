var context = document.getElementById('puzzle').getContext('2d');

var img = new Image();
img.src = 'http://images.cryhavok.org/d/30473-1/Sabaton+-+Primo+Victoria.jpg';
img.addEventListener('load', drawTiles, false);

var size = document.getElementById('puzzle').width;
tileCount = 3;

var tileSize = size / tileCount;

var click = new Object;
click.x = 0;
click.y = 0;

var empty = new Object;
empty.x = 0;
empty.y = 0;

var solved = false;

var board;
setBoard();


document.getElementById('puzzle').onclick = function(e) {
    
  click.x = Math.floor((e.pageX - this.offsetLeft) / tileSize);
  click.y = Math.floor((e.pageY - this.offsetTop) / tileSize);
    
  if (distance(click.x, click.y, empty.x, empty.y) == 1) {
    slideTile(empty, click);
    drawTiles();
  }
    
  if (solved) {
    setTimeout(function() {alert("Through the gates of hell!");}, 500);
  }
};

function setBoard() {
  board = new Array(tileCount);
    
  for (var i = 0; i < tileCount; ++i) { 
      
    board[i] = new Array(tileCount);
      
    for (var j = 0; j < tileCount; ++j) {
        
      board[i][j] = new Object;
      board[i][j].x = (tileCount - 1) - i;
      board[i][j].y = (tileCount - 1) - j;
    }
  }
  empty.x = board[tileCount - 1][tileCount - 1].x;
  empty.y = board[tileCount - 1][tileCount - 1].y;
  solved = false;
}

function drawTiles() {
  context.clearRect ( 0 , 0 , size , size );
    
  for (var i = 0; i < tileCount; ++i) { 
      
    for (var j = 0; j < tileCount; ++j) {
        
      var x = board[i][j].x;
      var y = board[i][j].y;
      if(i != empty.x || j != empty.y || solved == true) {
          
        context.drawImage(img, x * tileSize, y * tileSize, tileSize, tileSize,
            i * tileSize, j * tileSize, tileSize, tileSize);
      }
    }
  }
}

function distance(x1, y1, x2, y2) {
    
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function slideTile(toLoc, fromLoc) {
  if (!solved) {
    board[toLoc.x][toLoc.y].x = board[fromLoc.x][fromLoc.y].x;
    board[toLoc.x][toLoc.y].y = board[fromLoc.x][fromLoc.y].y;
    board[fromLoc.x][fromLoc.y].x = tileCount - 1;
    board[fromLoc.x][fromLoc.y].y = tileCount - 1;
    toLoc.x = fromLoc.x;
    toLoc.y = fromLoc.y;
    checkSolved();
  }
}

function checkSolved() {
  var flag = true;
  for (var i = 0; i < tileCount; ++i) {
      
    for (var j = 0; j < tileCount; ++j) {
        
      if (board[i][j].x != i || board[i][j].y != j) 
        flag = false;
    }
  }
  solved = flag;
}
