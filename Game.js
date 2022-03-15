/* Game configuration */
var gameSettings = {
    playerSpeed: 200,       //player speed when moved or played
}
var config = {
    width: 500,
    height: 500,
    autoCenter: true,
    background: 'black',
    banner: false,
    scene: [Mainscreen, Control, Scene1, Scene2, GameOver],
    pixelArt: true,
    //setting up  game physics
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
        }
    },
    scale: {
        // mode: Phaser.Scale.FIT,
    },
}
//Declaration of our game object
var game = new Phaser.Game(config);

/* var resscene = this.scene.get("Scene2");
resscene.scene.restart(); */
//game.scene.start('loadscreen');
