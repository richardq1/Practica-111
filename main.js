var game = new Phaser.Game(800,600,Phaser.AUTO)


game.state.add('Preloader',Preloader);///Nombre y luego es la clase
game.state.add('Game',Game);
game.state.start('Preloader'); //con el juego comienze entra a preloader
