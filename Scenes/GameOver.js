class GameOver extends Phaser.Scene {
    constructor() {
        super("gameover");
    }
    preload() {
        this.load.image("background", "assests1/preview.png");
        this.load.image("gameover", "assests1/gameover.png");
        this.load.image("retry", "assests1/retry.png");
        this.load.image("back", "assests1/back.png");
        this.load.bitmapFont("pixelFont", "assests1/font/font.png", "assests1/font/font.xml");
        this.load.audio("audio_pickup", ["assests1/sounds/pickup.mp3"]);
        this.load.audio("gameover", ["assests1/sounds/game_over.mp3"]);
        this.load.spritesheet("player", "assests1/spritesheets/player.png", {
            frameWidth: 16,
            frameHeight: 24
        });
    }
    create() {
        this.levelupSound = this.sound.add("audio_pickup");
        this.gameover = this.sound.add("gameover", {
            mute: false,
            volume: 2,
            rate: 1.5,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        });
        //this.gameover.play();
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);
        var retry = this.add.image(config.width / 2, config.height / 1.8, "retry").setScale(0.3);
        var mainmenu = this.add.image(config.width / 2, config.height / 1.6, "back").setScale(0.5);
        let hoversprite = this.add.sprite(100, 100, "player");
        hoversprite.setVisible(false);
        this.anims.create({
            key: "player_anim",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 20,
            repeat: -1
        });
        hoversprite.play("player_anim");
        mainmenu.setInteractive(    //for making  interractive clickable
            {
                useHandCursor: true
            });
        mainmenu.on('pointerdown', () => {
            this.levelupSound.play();
            this.scene.switch("loadscreen");
        });
        this.gameover = this.add.image(config.width / 2, config.height * 0.30, "gameover").setScale(0.8);
        retry.setInteractive(    //for making  interractive clickable
            {
                useHandCursor: true
            });
        retry.on('pointerdown', () => {
            this.levelupSound.play();
            this.scene.start("PlayGame");
        });
        mainmenu.on("pointerover", () => {
            hoversprite.setVisible(true);
            hoversprite.x = mainmenu.x - mainmenu.width + 50;
            hoversprite.y = mainmenu.y;
        });
        mainmenu.on('pointerout', () => {
            hoversprite.setVisible(false)
        })
        retry.on("pointerover", () => {
            hoversprite.setVisible(true);
            hoversprite.x = retry.x - retry.width + 185;
            hoversprite.y = retry.y;
        });
        retry.on('pointerout', () => {
            hoversprite.setVisible(false);
        })
    }
    update() {
        this.background.tilePositionY -= 0.5;
    }

}