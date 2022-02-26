/* Game configuration */
var gameSettings = {
    playerSpeed: 200,       //player speed when moved or played
}
var config = {
    width: 500,
    height: 500,
    autoCenter: true,
    noMargins: false,
    background: 'black',
    scene: [Scene1, Scene2],
    pixelArt: true,
    //setting up  game physics
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        }
    }
}
//Declaration of our game
var game = new Phaser.Game(config);