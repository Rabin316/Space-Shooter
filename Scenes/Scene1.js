class Scene1 extends Phaser.Scene {
    /* Constructor function Calls super() making class inhertit all
     charcteristics of its precedessor the class scene from phaser*/
    constructor() {
        super("BootGame");      //passing parameter "BootGame"
    }
    preload()   //loads image
    {
        this.load.image("background", "assets/background/bg-preview-big.png");
        this.load.image("ship1", "assests1/ship1.png");
        this.load.image("ship2", "assests1/ship2.png");
        this.load.image("ship3", "assests1/ship3.png");
    }
    create() {
        this.scene.start("PlayGame");   //switches  to Scene2
    }
}