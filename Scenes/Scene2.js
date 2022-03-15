class Scene2 extends Phaser.Scene {
    constructor() {
        super("PlayGame");  //passing parameter
    }
    init() {

    }
    preload() {
        this.load.bitmapFont("pixelFont", "assests1/font/font.png", "assests1/font/font.xml");
        this.load.image("left", "assests1/left.png");
        //audio files
        this.load.audio("audio_beam", ["assests1/sounds/beam.mp3"]);
        this.load.audio("music", ["assests1/sounds/sci-fi_platformer12.mp3"]);
        this.load.audio("audio_explosion", ["assests1/sounds/explosion.mp3"]);
        this.load.audio("audio_pickup", ["assests1/sounds/pickup.mp3"]);
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

        //for audio
        this.beamSound = this.sound.add("audio_beam");
        this.explosionSound = this.sound.add("audio_explosion");
        this.levelupSound = this.sound.add("audio_pickup");
        this.music = this.sound.add("music");
        /*    var musicconfig = {
               mute: false,
               volume: 1,
               rate: 1,
               detune: 0,
               seek: 0,
               loop: false,
               delay: 0
           }
           this.music.play(musicconfig); */
        //using sprites
        this.ship1 = this.add.sprite(config.width / 2 - 50, config.height, "ship1");
        this.ship1.setScale(2);
        this.ship2 = this.add.sprite(config.width / 2, config.height, "ship2");
        this.ship3 = this.add.sprite(config.width / 2 + 50, config.height, "ship3");
        // this.ship1.setScale(2);
        // this.ship1.flipY = true;
        // this.ship2.flipY = true;
        // this.ship3.flipY = true;

        //for enabling physics collision
        this.enemies = this.physics.add.group();
        this.enemies.add(this.ship1);
        this.enemies.add(this.ship2);
        this.enemies.add(this.ship3);

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
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.projectiles = this.add.group();

        //Object Collision
        //for power-up collision
        /*  this.physics.add.collider(this.projectiles,this.powerUps,function(projectile,powerUp){
            this.projectile.destroy();  //objects will be destroyed whnen shot
        }); */

        //avoiding bounce of powerup objects
        //this.physics.add.overlap(this.player,this.powerUps,this.pickPowerUp,null,this);

        //Overlap function between player and enemies ship
        this.physics.add.overlap(this.player, this.enemies, this.damageplayer, null, this);
        this.physics.add.overlap(this.projectiles, this.enemies, this.hitEnemy, null, this);

        var turn = this.add.image(config.width / 2, config.height * 0.93, "left").setScale(0.15);
        turn.setInteractive({
            useHandCursor: true
        });
        turn.on('pointerdown', () => {
            this.scene.restart();
            this.scene.switch("loadscreen");
        });

        var graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 1);
        graphics.beginPath();
        graphics.moveTo(0, 0);
        graphics.lineTo(config.width, 0);
        graphics.lineTo(config.width, 20);
        graphics.lineTo(0, 20);
        graphics.lineTo(0, 0);

        graphics.closePath();
        graphics.fillPath();

        //for SCore
        this.score = 0;
        //var formatscore = this.scorezero(this.score, 6)
        this.scorevalue = this.add.bitmapText(10, 5, "pixelFont", "SCORE:0", 16);
    }
    //callback Function for powerUps pick up
    /*    pickPowerUp(player, powerUp) {
           powerUp.disableBody(true, true);        //using disable phyics
       } */

    //callback function for damageplayer line 111
    damageplayer(player, enemy) {
        this.resetShipPos(enemy);   //resets position enemy ships

        // this.scene.pause();       for pausing when player get hit
        //resets position of player
        // player.x = config.width / 2 - 8;
        // player.y = config.height - 64;
        var explosion = new Explosion(this, player.x, player.y);
        player.disableBody(true, true);//disable the ship and hide it after it explodes
        this.explosionSound.play();

        //this.resetPlayer(); //resets player after hit
        this.time.addEvent({
            delay: 1000,        //delay after Hit
            callback: this.resetPlayer, //calling reset player function
            callbackScope: this,
            loop: true,
        });

    }

    //function resetPlayer()
    resetPlayer() {
        //this.scene.restart();
        this.scene.start("gameover");
        //this.levelupSound.play();
        /* var x = config.width / 2 - 8;
        var y = config.height + 64; */
        //this.player.enableBody(true, x, y, true, true);  //reviving player again
    }

    //callback function for hitenemy line 112
    hitEnemy(projectile, enemy) {
        var explosion = new Explosion(this, enemy.x, enemy.y);
        projectile.destroy();
        //for counting score
        this.score += 10;
        //var formatscore = this.scorezero(this.score, 6);
        this.scorevalue.text = "SCORE: " + this.score;   //can also put FormatSCore instead of this.score 
        this.resetShipPos(enemy);
        //audio
        this.explosionSound.play();
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
        //gameObject.play("explode");

    }

    //upadte function for updating the objects
    update() {
        //level 1
        if (this.score >= 100) {
            this.moveShip(this.ship1, 2);
            this.moveShip(this.ship2, 2);
            this.moveShip(this.ship3, 2);
        }
        //leve 2
        if (this.score >= 300) {
            this.moveShip(this.ship1, 2.5);
            this.moveShip(this.ship2, 2.5);
            this.moveShip(this.ship3, 2.5);
        }
        //leve 2
        if (this.score >= 500) {
            this.moveShip(this.ship1, 3.5);
            this.moveShip(this.ship2, 3.5);
            this.moveShip(this.ship3, 3.5);
        }
        //leve 2
        if (this.score >= 650) {
            this.moveShip(this.ship1, 4.5);
            this.moveShip(this.ship2, 4.5);
            this.moveShip(this.ship3, 4.5);
        }
        //this.ship2.angle += 3;

        // this.asteroid.angle += 1;
        // this.moveShip(this.asteroid, 2.5);

        //calling function moveShip
        this.moveShip(this.ship1, 1.6);
        this.moveShip(this.ship2, 2);
        this.moveShip(this.ship3, 1.8);

        //make images y-axis tile for repetation
        this.background.tilePositionY -= 0.5;

        this.movePlayerManager();

        //Event for the player shooting, just once per key pressing
        //JustDown event will be activated only once each key is pressed
        /*  if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
             //calling a function to create beam(bullet)
             this.shootBeam();
         } */
        if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
            if (this.player.active) {
                this.shootBeam();
            }
        }

        //update all the beam bullets
        for (var i = 0; i < this.projectiles.getChildren().length; i++) {
            var beam = this.projectiles.getChildren()[i];
            beam.update();
        }
    }
    //shootbeam function
    /*  shootBeam() {
         var beam =this.physics.add.sprite(this.player.x,this.player.y,"beam");
     } */
    shootBeam() {
        var beam = new Beam(this);
        this.beamSound.play();  //audio
    }
    //function  for player movement
    movePlayerManager() {

        this.player.setVelocity(0);
        //for left and right movement
        if (this.cursorKeys.left.isDown) {
            this.player.setVelocityX(-gameSettings.playerSpeed);
        } else if (this.cursorKeys.right.isDown) {
            this.player.setVelocityX(gameSettings.playerSpeed);
        }
        //for up and down movement
        if (this.cursorKeys.up.isDown) {
            this.player.setVelocityY(-gameSettings.playerSpeed);
        } else if (this.cursorKeys.down.isDown) {
            this.player.setVelocityY(gameSettings.playerSpeed);
        }
    }
}