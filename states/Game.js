Game= function(game){}

Game.prototype={
    create:function(){
        this.bulletTime=0;
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
      this.laserGroup.physicsBodyType=Phaser.Physics.ARCADE;
     ///
     
     this.fruitsGroup.forEach(function(element)
     {
         this.fruitsGroup.create(this.game.world.radomX,this.game.world.radomY,"fruit");
     });
    
    
    
        
    this.player=this.game.add.sprite(400,500,'player');
        
        
        
    },
    createGuns:function(){
        var laser=this.game.add.sprite(0,0,"bullets");
        laser.visible=false;
        laser.exists=false;
         laser.checkWorldBounds=true;
          laser.events.onOutOfBounds.add(resetBullet, this);
    },
    resetBullet:function(laser){
        laser.kill;
    },
    FireBullets:function(){
          if (this.game.time.now > this.bulletTime)
    {
        var laser = this.laserGroup.getFirstDead();

        if (laser)
        {
            laser.reset(this.player.X + 6, this.player.Y- 8);
            laser.body.velocity.y = -300;
            this.bulletTime = this.game.time.now + 150;
        }
    }

    }
    
    
    
    
}