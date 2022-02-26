class Beam extends Phaser.GameObjects.Sprite {
    constructor(scene) {

        var x = scene.player.x;
        var y = scene.player.y - 10;

        super(scene, x, y, "beam");

        // add to scene
        scene.add.existing(this);

        //
        this.play("beam_anim");
        scene.physics.world.enableBody(this);
        this.body.velocity.y = - 250;


        //add the beam to the projectiles group
        scene.projectiles.add(this);

    }


    update() {

        //beam will self destruct after reeaching end of our game configuration
        if (this.y < 32) {
            this.destroy();
        }
    }
}