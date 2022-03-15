class Mainscreen extends Phaser.Scene {
    constructor() {
        super('loadscreen') // for calling the parameter
    }
    preload() {
        this.load.image("background", "assests1/preview.png");
        //this.load.image("background", "assets/background/bg-preview-big.png");
        //this.load.image("btn1", "assests1/start.png")
        this.load.image("asteroid", "assets/asteroids/asteroid.png");

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
        });
        //for player
        this.load.spritesheet("player", "assests1/spritesheets/player.png", {
            frameWidth: 16,
            frameHeight: 24
        });
        //start image
        this.load.image("start", "assests1/start.png");
        this.load.image("control", "assests1/control.png")
        this.load.image("title", "assests1/title.png");
        //for bitmap text
        this.load.bitmapFont("pixelFont", "assests1/font/font.png", "assests1/font/font.xml");
        //for audio
        this.load.audio("audio_pickup", ["assests1/sounds/pickup.mp3"]);
        this.load.audio("audio_space", ["assests1/sounds/Deepspace.mp3"]);

    }

    create() {
        //for audio
        this.levelupSound = this.sound.add("audio_pickup");
        this.music = this.sound.add("audio_space");
        var musicconfig = {
            mute: false,
            volume: 2,
            rate: 1.5,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
        this.music.play(musicconfig);

        this.bg = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.bg.setOrigin(0, 0);
        this.title1 = this.add.image(config.width / 2, config.height * 0.30, "title").setScale(0.8);
        this.title1.setDepth(1);
        let playbutton = this.add.image(config.width / 2, config.height / 2, "start").setScale(0.6);
        playbutton.setDepth(1);
        let controlbtn = this.add.image(config.width / 2, config.height / 2 + 40, "control").setScale(0.6);
        controlbtn.setDepth(1);
        // let hoverplayer = this.add.sprite(0, 0, "player").setInteractive();
        // hoverplayer.setVisible(false);

        this.asteroid = this.add.image(config.width / 2, config.height / 2, "asteroid");
        this.asteroid.setScale(0.9);

        this.ship1 = this.add.sprite(config.width / 2 - 50, config.height, "ship1");
        this.ship1.setScale(2);
        this.ship2 = this.add.sprite(config.width / 2, config.height, "ship2");
        this.ship3 = this.add.sprite(config.width / 2 + 50, config.height, "ship3");
        let hoversprite = this.add.sprite(100, 100, "player");
        hoversprite.setVisible(false);
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
            key: "player_anim",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 20,
            repeat: -1
        });
        //for playing the animations
        this.ship1.play("ship1_anim");
        this.ship2.play("ship2_anim");
        this.ship3.play("ship3_anim");
        hoversprite.play("player_anim");
        //for making ships destroyable by clicking
        this.ship1.setInteractive();
        this.ship2.setInteractive();
        this.ship3.setInteractive();
        this.asteroid.setInteractive();

        //this scection is for options i.e MAIN MENU

        //var title = this.add.bitmapText(100, 150, "pixelFont", "SPACE SHOOTER 2D", 50);

        //for mouse hovering part
        //for playbutton
        playbutton.setInteractive({
            useHandCursor: true
        });
        playbutton.on("pointerover", () => {
            hoversprite.setVisible(true);
            hoversprite.x = playbutton.x - playbutton.width + 50;
            hoversprite.y = playbutton.y;
        });
        playbutton.on('pointerout', () => {
            hoversprite.setVisible(false)
        })
        //for controlbtn
        controlbtn.setInteractive({
            useHandCursor: true
        });
        controlbtn.on("pointerover", () => {
            hoversprite.setVisible(true);
            hoversprite.x = controlbtn.x - controlbtn.width + 143;
            hoversprite.y = controlbtn.y;
        });
        controlbtn.on('pointerout', () => {
            hoversprite.setVisible(false)
        })

        //this part is for scene change by clicking
        playbutton.on('pointerdown', () => {
            this.levelupSound.play();
            this.scene.switch("BootGame");
        });
        controlbtn.on('pointerdown', () => {
            this.levelupSound.play();
            this.scene.switch("View");
        });

    }
    moveShip(ship, speed) {
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
    }
    update() {
        //make background images y-axis tile for repetation
        this.bg.tilePositionY -= 0.5;
        this.asteroid.angle += 3;

        //calling function moveShip
        this.moveShip(this.ship1, 2);
        this.moveShip(this.ship2, 2.5);
        this.moveShip(this.ship3, 3);
        this.moveShip(this.asteroid, 2.5);
    }
}