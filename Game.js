/* Game configuration */
var gameSettings = {
    playerSpeed: 200,       //player speed when moved or played
}
var config = {
    width: 480,
    height: 640,
    autoCenter: true,
    background: 'black',
    banner: false,
    scene: [Mainscreen, Control, Scene1, Scene2, GameOver],
    pixelArt: true,
    roundPixels: true,
    //setting up  game physics
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        }
    },
    scale: {
        //mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
}
//Declaration of our game object
var game = new Phaser.Game(config);

/* var resscene = this.scene.get("Scene2");
resscene.scene.restart(); */
//game.scene.start('loadscreen');
