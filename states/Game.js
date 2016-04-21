Game= function(game){}

Game.prototype={
    create:function(){
        this.bulletTime=0;
    this.game.backgroundColor = '#2d2d2d';
    ///Agrega la fisica
     
    ///
     /////Frutas
    /*  this.fruitsGroup=this.game.add.group();
      this.fruitsGroup.enablebody=true;
      this.fruitsGroup.physicsBodyType = Phaser.Physics.ARCADE;*/
     ////Balas
      this.laserGroup=this.game.add.group();
      this.laserGroup.enablebody=true;
      this.laserGroup.physicsBodyType=Phaser.Physics.ARCADE;
     ///
     this.laserGroup.createGuns();
     
  /*   this.fruitsGroup.forEach(function(element)
     {
         this.fruitsGroup.create(this.game.world.radomX,this.game.world.radomY,"fruit");
     });
    
    */
    
        ///player 
    this.player=this.game.add.sprite(400,500,'player');
    this.player.animations.add('walkingLeft',[0,1,2,3,1],5,true);
    this.player.animations.add('walkingRight',[5,6,7,8,5],5,true);
     this.player.anchor.setTo(0.5);
        ////
         this.game.physics.arcade.enable(this.player);
         ///
         
         this.player.body.collideWorldBounds=true;
         
         
    this.cursors=this.game.input.keyboard.createCursorKeys();
        
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
    
     update:function(){
         
       
     if(this.cursors.left.isDown){
     // this.player.x -=2;
         this.player.body.velocity.x=-180;
         this.player.animations.play('walkingLeft');
    }else if(this.cursors.right.isDown){
      //this.player.x +=2;
          this.player.body.velocity.x=+180;
          this.player.animations.play('walkingRight');
          
    }else {
        this.player.body.velocity.x=0;
      this.player.animations.stop();
      this.player.frame = 3;
    }
    if(this.cursors.up.isDown){
    this.laserGroup.fireBullets();
    }

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
    },
    
    
    
    
}