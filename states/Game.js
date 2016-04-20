Game= function(game){}

Game.prototype={
    create:function(){
    this.game.backgroundColor = '#2d2d2d';
    ///Agrega la fisica
     
    ///
     /////Frutas
      this.fruitsGroup=this.game.add.group();
      this.fruitsGroup.enablebody=true;
      this.fruitsGroup.physicsBodyType = Phaser.Physics.ARCADE;
     ////Balas
      this.laserGroup=this.game.add.group();
      this.laserGroup.enablebody=true;
      this.laserGr
     ///
    this.player=this.game.add.sprite(400,500,'player');
        
        
        
    }
    
    
    
    
}