class GameOver extends Phaser.Scene {
    constructor() {
        super("gameover");
    }

    preload() {
        this.load.image("background", "assests1/preview.png");
        this.load.image("gameover", "assests1/gameover.png");
        this.load.image("Again", "assests1/Again.png");
        this.load.bitmapFont("pixelFont", "assests1/font/font.png", "assests1/font/font.xml");
    }
    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);
        var retry = this.add.image(config.width / 2, config.height / 2, "Again").setScale(0.5);
        this.gameover = this.add.image(config.width / 2, config.height * 0.30, "gameover").setScale(0.8);
        retry.setInteractive(    //for making text interractive
            {
                useHandCursor: true
            });
        retry.on('pointerdown', () => this.clickButton(
            this.scene.start("PlayGame")
        ));
    }
    update() {
        this.background.tilePositionY -= 0.5;
    }
}