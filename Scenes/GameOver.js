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
    }
    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);
        var retry = this.add.image(config.width / 2, config.height / 1.8, "retry").setScale(0.3);
        var mainmenu = this.add.image(config.width / 2, config.height / 1.5, "back").setScale(0.5);
        mainmenu.setInteractive(    //for making  interractive clickable
            {
                useHandCursor: true
            });
        mainmenu.on('pointerdown', () => {
            this.scene.switch("loadscreen");
        });
        this.gameover = this.add.image(config.width / 2, config.height * 0.30, "gameover").setScale(0.8);
        retry.setInteractive(    //for making  interractive clickable
            {
                useHandCursor: true
            });
        retry.on('pointerdown', () => {
            this.scene.switch("PlayGame");
        });
    }
    update() {
        //this.background.tilePositionY -= 0.5;
    }

}