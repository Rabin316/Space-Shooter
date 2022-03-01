class mainscreen extends Phaser.Scene {
    constructor() {
        super('loadscreen') // for calling the parameter
    }
    preload() {
        this.load.image("background", "assets/background/bg-preview-big.png");
        //this.load.image("btn1", "assests1/start.png")
        /*             this.load.spritesheet("ship1", "assests1/spritesheets/ship1.png", {
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
                    }); */
    }

    create() {
        this.bg = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.bg.setOrigin(0, 0);

        /*  this.ship1 = this.add.sprite(config.width / 2 - 50, config.height / 2, "ship1");
         this.ship1.setScale(2);
         this.ship2 = this.add.sprite(config.width / 2, config.height / 2, "ship2");
         this.ship3 = this.add.sprite(config.width / 2 + 50, config.height / 2, "ship3");
 
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
 
         //for playing the animations
         this.ship1.play("ship1_anim");
         this.ship2.play("ship2_anim");
         this.ship3.play("ship3_anim");
 
         //for making ships destryable by clicking
         this.ship1.setInteractive();
         this.ship2.setInteractive();
         this.ship3.setInteractive();
         //this.asteroid.setInteractive(); */

        //Clickable button image
        /*  var btn = this.add.image(0, 0, "btn1");
         btn.setOrigin(0, 0);
         btn.setScale(0.1);
         btn.setInteractive({
             useHandCursor: true
         });
         btn.on('pointerdown', () => this.clickButton(
             this.scene.switch("BootGame")
         )) */
        // var title = this.add.text(100, 100, "SPACE SHOOTER 2D");
        var text1 = this.add.text(200, 200, "Start");
        text1.setInteractive(    //for making text interractive
            {
                useHandCursor: true
            });
        text1.on('pointerdown', () => this.clickButton(
            this.scene.switch("BootGame")       //enters Scene1 and to Scene 2 after clicked
        ));
        //Enter Control SCene
        var text2 = this.add.text(200, 240, "Controls");
        text2.setInteractive(    //for making text interractive
            {
                useHandCursor: true
            });
        text2.on('pointerdown', () => this.clickButton(
            this.scene.switch("View")
        ));

    }
    /*  moveShip(ship, speed) {
         ship.y += speed;
         if (ship.y > config.height) {
             this.resetShipPos(ship);
         }
     }
     //repeats the movement of ships
     resetShipPos(ship) {
         ship.y = 0;
         var randomX = Phaser.Math.Between(0, config.width);
         ship.x = randomX;
     } */
    update() {
        //make images y-axis tile for repetation
        this.bg.tilePositionY -= 0.5;

        //calling function moveShip
        // this.moveShip(this.ship1, 2);
        // this.moveShip(this.ship2, 2.5);
        // this.moveShip(this.ship3, 3);
    }
}