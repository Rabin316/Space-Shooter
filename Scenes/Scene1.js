class Scene1 extends Phaser.Scene {
    /* Constructor function Calls super() making class inhertit all
     charcteristics of its precedessor the class scene from phaser*/
    constructor() {
        super("BootGame");      //passing parameter "BootGame"
    }
    preload()   //loads image or spritesheets ( multiple  same images with frames)
    {
        this.load.image("background", "assests1/preview.png");
        // this.load.image("background", "assets/background/bg-preview-big.png");
        // this.load.image("ship2", "assests1/ship2.png");
        //this.load.image("ship1","assests1/ship1.png");
        // this.load.image("ship3", "assests1/ship3.png");

        // this.load.image("asteroid", "assets/asteroids/asteroid.png");

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
        this.load.spritesheet("ship5", "assests1/spritesheets/ship5.png", {
            frameWidth: 16,
            frameHeight: 16,
        });

        this.load.spritesheet("explosion", "assests1/spritesheets/explosion.png", {
            frameWidth: 16,
            frameWidth: 16,
        });
        this.load.spritesheet("power-up", "assests1/spritesheets/power-up.png", {
            frameWidth: 16,
            frameHeight: 16,
        });
        //for player
        this.load.spritesheet("player", "assests1/spritesheets/player.png", {
            frameWidth: 16,
            frameHeight: 24
        });

        //for bullets
        this.load.spritesheet("beam", "assests1/spritesheets/beam.png", {
            frameWidth: 16,
            frameHeight: 16,
        });


    }
    create() {
        this.scene.start("PlayGame");   //switches  to Scene2 i.e calls scene 2 and access it properties
        //creating animations
        //for ship1
        this.anims.create({
            key: "ship1_anim",  //creating animation
            frames: this.anims.generateFrameNumbers("ship1"),
            frameRate: 20,
            repeat: -1
        });

        //for ship2
        this.anims.create({
            key: "ship2_anim",  //creating animation
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate: 20,
            repeat: -1
        });

        //for ship3
        this.anims.create({
            key: "ship3_anim",  //creating animation
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "ship5_anim",  //creating animation
            frames: this.anims.generateFrameNumbers("ship5"),
            frameRate: 20,
            repeat: -1
        });

        //for explosions
        this.anims.create({
            key: "explode",  //creating animation
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            //disappear after collision
            repeat: 0,
            hideOnComplete: true,   //explosion will hide after completion
        });

        //for player
        this.anims.create({
            key: "thrust",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 20,
            repeat: -1
        });

        //for bullets
        this.anims.create({
            key: "beam_anim",
            frames: this.anims.generateFrameNumbers("beam"),
            frameRate: 20,
            repeat: -1
        });

        /* // POWER UPS

        //2.1 Two Animations for the power ups
        this.anims.create({
            key: "red",
            frames: this.anims.generateFrameNumbers("power-up", {
                start: 0,
                end: 1
            }),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "gray",
            frames: this.anims.generateFrameNumbers("power-up", {
                start: 2,
                end: 3
            }),
            frameRate: 20,
            repeat: -1
        });
        */

    }
}