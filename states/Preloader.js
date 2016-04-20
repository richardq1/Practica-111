Preloader = function(game){Preloader}

Preloader.prototype={
    
    preload:function(){
        this.game.load.image('laser',"assets/images/bullet0.png");
        this.game.load.spritesheet("fruits","assets/images/fruits.png",32,32);
        this.game.load.spritesheet("player","assets/images/dude.png");
    },
    create:function(){
        this.game.state.start('Game');
    }
}