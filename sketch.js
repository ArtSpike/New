var database;
var gameState =0;
playerCount =0;

var game, player, form;
var allPlayers,player1, player2, player3, player4, players;

function setup() {
  createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();

  game.getState();
  game.start();
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("white");  

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  drawSprites();
}