class Control extends Phaser.Scene {
    constructor() {
        super("View");
    }
    preload() {
        this.load.image("background", "assets/background/bg-preview-big.png");
        this.load.image("arrowkey1", "assests1/arrowkey1.png");
        this.load.bitmapFont("pixelFont", "assests1/font/font.png", "assests1/font/font.xml");
        this.load.image("howtoplay", "assests1/howtoplay.png")
        this.load.image("back", "assests1/back.png")
        this.load.image("leftarrow", "assests1/leftarrow.png");
        this.load.image("rightarrow", "assests1/rightarrow.png");
        this.load.image("uparrow", "assests1/uparrow.png");
        this.load.image("downarrow", "assests1/downarrow.png");
        this.load.image("spacebar", "assests1/spacebarkey.png");
        this.load.image("left", "assests1/left.png");
    }
    create() {
        this.bg2 = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.bg2.setOrigin(0, 0);
        this.add.image(config.width / 2, config.height * 0.10, "howtoplay").setScale(0.5);

        this.add.bitmapText(config.width / 4, config.height / 5, "pixelFont", "Arrow Keys", 25);
        let key = this.add.image(config.width / 3, config.height / 3, "arrowkey1");
        key.setScale(0.2);

        this.add.image(config.width / 5.3 + 30, config.height / 1.9, "leftarrow").setScale(0.2);
        this.add.bitmapText(config.width / 5.3 + 55, config.height / 2 + 10, "pixelFont", "LEFT", 20)

        this.add.image(config.width / 5.3 + 30, config.height / 1.63, "rightarrow").setScale(0.2);
        this.add.bitmapText(config.width / 5.3 + 55, config.height / 2 + 50, "pixelFont", "RIGHT", 20)

        this.add.image(config.width / 5.3 + 30, config.height / 1.42, "uparrow").setScale(0.2)
        this.add.bitmapText(config.width / 5.3 + 55, config.height / 2 + 95, "pixelFont", "UP", 20)

        this.add.image(config.width / 5.3 + 30, config.height / 1.26, "downarrow").setScale(0.2)
        this.add.bitmapText(config.width / 5.3 + 55, config.height / 1.5 + 55, "pixelFont", "DOWN", 20)

        this.add.image(config.width / 2 + 100, config.height / 3, "spacebar").setScale(0.25);
        this.add.bitmapText(config.width / 2 + 70, config.height / 5.5 + 30, "pixelFont", "PRESS", 25);
        this.add.bitmapText(config.width / 2 + 60, config.height / 4 + 70, "pixelFont", "TO SHOOT", 25);

        this.add.image(config.width / 2.5, config.height * 0.93, "left").setScale(0.15);

        var back = this.add.image(config.width / 2, config.height * 0.93, "back").setScale(0.6);
        back.setInteractive(    //for making text interractive
            {
                useHandCursor: true
            });
        back.on('pointerdown', () => {
            this.scene.switch("loadscreen");
        });
        /*   var text = this.add.text(200, 240, "Controls");
          text.setInteractive(    //for making text interractive
              {
                  useHandCursor: true
              }); */

    }
    update() {
        this.bg2.tilePositionY -= 0.5;
    }
}