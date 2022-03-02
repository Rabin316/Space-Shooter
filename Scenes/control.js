class control extends Phaser.Scene {
    constructor() {
        super("View");
    }
    preload() {
        this.load.image("background", "assets/background/bg-preview-big.png");
        // this.load.image("arrowkey1", "assests1/arrowkey1.png");
        this.load.bitmapFont("pixelFont", "assests1/font/font.png", "assests1/font/font.xml");
    }
    create() {
        this.bg2 = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.bg2.setOrigin(0, 0);
        //let key = this.add.image(config.width / 3, config.height / 3, "arrowkey1");
        //key.setScale(0.15);
        var texttitle = this.add.bitmapText(130, 50, "pixelFont", "How To play", 55);

        // var back = this.add.bitmapText(200, 400, "pixelFont", "BACK", 30);
        back.setInteractive(    //for making text interractive
            {
                useHandCursor: true
            });
        back.on('pointerdown', () => this.clickButton(
            this.scene.switch("loadscreen")
        ));
        /*   var text = this.add.text(200, 240, "Controls");
          text.setInteractive(    //for making text interractive
              {
                  useHandCursor: true
              }); */

    }
    update() {
        //this.bg2.tilePositionY -= 0.5;
    }
}