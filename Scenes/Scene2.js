class Scene2 extends Phaser.Scene {
    constructor() {
        super("PlayGame");  //passing parameter
    }


    //function create for image creation after loading
    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);
        // this.asteroid = this.add.image(config.width / 2, config.height / 2, "asteroid");
        // this.asteroid.setScale(1);
        //this.asteroid.flipX = true;

        // this.ship1 = this.add.image(config.width / 2 - 50, config.height / 2, "ship1");
        // this.ship2 = this.add.image(config.width / 2, config.height / 2, "ship2");
        // this.ship3 = this.add.image(config.width / 2 + 50, config.height / 2, "ship3");

        //using sprites
        this.ship1 = this.add.sprite(config.width / 2 - 50, config.height / 2, "ship1");
        this.ship1.setScale(2);
        this.ship2 = this.add.sprite(config.width / 2, config.height / 2, "ship2");
        this.ship3 = this.add.sprite(config.width / 2 + 50, config.height / 2, "ship3");
        // this.ship1.setScale(2);
        // this.ship1.flipY = true;
        // this.ship2.flipY = true;
        // this.ship3.flipY = true;

        //player sprite
        this.player = this.physics.add.sprite(config.width / 2 - 8, config.height - 64, "player");
        this.player.play("thrust");

        //for playing the animations
        this.ship1.play("ship1_anim");
        this.ship2.play("ship2_anim");
        this.ship3.play("ship3_anim");

        //for making ships destryable by clicking
        this.ship1.setInteractive();
        this.ship2.setInteractive();
        this.ship3.setInteractive();
        //this.asteroid.setInteractive();

        //event that acts whenever an interactive object is clicked or touched
        this.input.on('gameobjectdown', this.destroyShip, this);

        // for asteroids physics
        // var asteroids = this.physics.add.image(16, 16, "asteroid");
        // this.physics.world.setBoundsCollision();

        // //this.asteroid = this.physics.add.group();
        // asteroids.setVelocity(100, 100);
        // asteroids.powerUp.setCollideWorldBounds(true);
        // asteroids.setBounce(1);

        //
        this.physics.world.setBoundsCollision();

        // this.powerUps = this.physics.add.group();

        // 2.2 Add multiple objects
        /*         var maxObjects = 4;
                for (var i = 0; i <= maxObjects; i++) {
                    var powerUp = this.physics.add.sprite(16, 16, "power-up");
                    this.powerUps.add(powerUp);
                    powerUp.setRandomPosition(0, 0, game.config.width, game.config.height);
        
                    // set random animation
                    if (Math.random() > 0.5) {
                        powerUp.play("red");
                    } else {
                        powerUp.play("gray");
                    }
        
                    // setVelocity
                    powerUp.setVelocity(100, 100);
                    // 3.2
                    powerUp.setCollideWorldBounds(true);
                    // 3.3
                    powerUp.setBounce(1);
        
                } */

        //keyboard Events
        this.cursorKeys = this.input.keyboard.createCursorKeys();

        //making fixed boundaries for player
        this.player.setCollideWorldBounds(true);

        //event spacebar key



    }


    //function for moving ships y-axis and repeats and appears at random position from the top after reaching bottom of game config
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

    //for animation of explosion after being clicked
    destroyShip(pointer, gameObject) {
        gameObject.setTexture("explosion");
        gameObject.play("explode");
    }

    //upadte function for updating the objects
    update() {
        //this.ship2.angle += 3;

        // this.asteroid.angle += 1;
        // this.moveShip(this.asteroid, 2.5);

        //calling function moveShip
        this.moveShip(this.ship1, 2);
        this.moveShip(this.ship2, 2.5);
        this.moveShip(this.ship3, 3);

        //make images y-axis tile for repetation
        this.background.tilePositionY -= 0.5;

        this.movePlayerManager();

        //Event for the player shooting, just once per key pressing
        /* if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
            console.log("Fire!");
        } */
    }
    //function  for player movement
    movePlayerManager() {

        this.player.setVelocity(0);

        if (this.cursorKeys.left.isDown) {
            this.player.setVelocityX(-gameSettings.playerSpeed);
        } else if (this.cursorKeys.right.isDown) {
            this.player.setVelocityX(gameSettings.playerSpeed);
        }

        if (this.cursorKeys.up.isDown) {
            this.player.setVelocityY(-gameSettings.playerSpeed);
        } else if (this.cursorKeys.down.isDown) {
            this.player.setVelocityY(gameSettings.playerSpeed);
        }
    }
}