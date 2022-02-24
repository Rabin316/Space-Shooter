class Scene2 extends Phaser.Scene {
    constructor() {
        super("PlayGame");
    }
    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);
        this.ship1 = this.add.image(config.width / 2 - 50, config.height / 2, "ship1");
        this.ship2 = this.add.image(config.width / 2, config.height / 2, "ship2");
        this.ship3 = this.add.image(config.width / 2 + 50, config.height / 2, "ship3");
        this.ship1.setScale(2);
        this.ship1.flipY = true;
        this.ship2.flipY = true;
        this.ship3.flipY = true;
    }
    moveShip(ship, speed) {
        ship.y += speed;
        if (ship.y > config.height) {
            this.resetShipPos(ship);
        }
    }
    resetShipPos(ship) {
        ship.y = 0;
        var randomX = Phaser.Math.Between(0, config.width);
        ship.x = randomX;
    }

    update() {
        //this.ship2.angle += 3;
        this.moveShip(this.ship1, 2);
        this.moveShip(this.ship2, 2.5);
        this.moveShip(this.ship3, 3);
        this.background.tilePositionY -= 0.5;
    }
}