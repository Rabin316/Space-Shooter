/* Game configuration */
var gameSettings = {
    playerSpeed: 200,       //player speed when moved or played
}
var config = {
    width: 500,
    height: 490,
    autoCenter: true,
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
//Decaration of our game
var game = new Phaser.Game(config);