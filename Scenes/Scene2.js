class Scene2 extends Phaser.Scene {
    constructor() {
        super("PLayGame");
    }
    create() {
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
        this.enemy1 = this.add.image(config.width / 2 - 100, config.height / 2, "enemy1");
        this.enemy1.setScale(1.5);
        this.enemy1.flipy = true;
        // this.enemy2 = this.add.image(config.width / 2, config.height / 2, "enemy2");
        // this.enemy3 = this.add.image(config.width / 2 + 50, config.height / 2, "enemy3");
    }
    upadte() {
        this.enemy1.angle += 3;
    }
}