class control extends Phaser.Scene {
    constructor() {
        super("View");
    }
    preload() {
        this.load.image("background", "assets/background/bg-preview-big.png");
    }
    create() {
        this.bg2 = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.bg2.setOrigin(0, 0);
        var view = this.add.text(0, 0, "Spacebar=> Shoot")
        var text = this.add.text(200, 200, "Back");
        text.setInteractive(    //for making text interractive
            {
                useHandCursor: true
            });
        text.on('pointerdown', () => this.clickButton(
            this.scene.switch("loadscreen")
        ));
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