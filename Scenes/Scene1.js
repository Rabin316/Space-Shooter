class Scene1 extends Phaser.Scene {
    /* Constructor function Calls super() making class inhertit all
     charcteristics of its precedessor the class scene from phaser*/
    constructor() {
        super("BootGame");      //passing parameter "BootGame"
    }
    preload()   //loads image
    {
        this.load.image("background", "assets/background/bg-preview-big.png");
        // this.load.image("ship2", "assests1/ship2.png");
        //this.load.image("ship1","assests1/ship1.png");
        // this.load.image("ship3", "assests1/ship3.png");
        this.load.spritesheet("ship1", "assests1/spritesheets/ship1.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("ship2", "assests1/spritesheets/ship2.png", {
            frameWidth: 32,
            frameHeight: 16,
        });
        this.load.spritesheet("ship3", "assests1/spritesheets/ship3.png", {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet("explosion", "assests1/spritesheets/explosion.png", {
            frameWidth: 16,
            frameWidth: 16,
        })

    }
    create() {
        this.scene.start("PlayGame");   //switches  to Scene2
    }
}