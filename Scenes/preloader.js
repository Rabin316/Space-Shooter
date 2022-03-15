class Preload extends Phaser.Scene {
    constructor() {
        super("preload");
    }
    preload() {
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        assetText.setOrigin(0.5, 0.5);
        percentText.setOrigin(0.5, 0.5);
        loadingText.setOrigin(0.5, 0.5);
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 520, 50);

        this.load.image("logo", "assests1/logo.png");
        for (var i = 0; i < 300; i++) {
            this.load.image("logo" + i, "logo.png");
        }
        this.load.on('progress', function (value) {
            console.log(value);
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });
        this.load.on("fileprogress", function (file) {
            console.log(file.src);
            assetText.setText('Loading asset: ' + file.key);

        })
        this.load.on("complete", function () {
            console.log("complete");
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        });
    }

    create() {
        var logo = this.add.image(config.width / 2, config.height / 2, "logo").setScale(0.09);
        //this.scene.start("loadscreen");
    }
}