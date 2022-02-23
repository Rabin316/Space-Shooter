class Scene1 extends Phaser.Scene {
    /* Constructor function Calls super() making class inhertit all
     charcteristics of its precedessor the class scene from phaser*/
    constructor() {
        super("BootGame");      //passing parameter "BootGame"
    }
    preload()   //loads image
    {
        this.load.image("background", "assets/background/bg-preview-big.png");
        this.load.image("enemy1", "assets/enemy/sprites/enemy1.png");
        // this.load.image("enemy2", "assets/enemy/sprites/enemy2.png");
        // this.load.image("enemy3", "assets/enemy/sprites/enemy3.png");
    }
    create() {
        this.scene.start("PLayGame");   //switches  to Scene2
    }
}