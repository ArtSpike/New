class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }

      player1 = createSprite(100,200,30,30);
      player2 = createSprite(200,200,30,30);
      player3 = createSprite(300,200,30,30);
      player4 = createSprite(400,200,30,30);
      players = [player1, player2,player3,player4];

    }
  
    play(){
      form.hide();
      textSize(30);
      text("Game Start", 120, 100);
      
      Player.getPlayerInfo();
      
  
      if(allPlayers !== undefined){
        var index=0;
        var x=0,y;
        
        for(var plr in allPlayers){
          index = index+1;
          //x= x+100
          x= displayWidth - allPlayers[plr].x;
          y= displayHeight - allPlayers[plr].y;
          players[index -1].x =x;
          players[index -1].y =y;
          if (plr === "player" + player.index){
            players[index-1].shapeColor = "red";
            camera.position.x = players[index-1].x;
            camera.position.y = players[index-1].y;

          }
          
        }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.y +=10
        player.update();
      }
      if(keyIsDown(DOWN_ARROW) && player.index !== null){
        player.y -=10
        player.update();
      }
      if(keyIsDown(LEFT_ARROW) && player.index !== null){
        player.x -=10
        player.update();
      }
      if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.x +=10
        player.update();
      }

      drawSprites();
    }
  }