const config = {
    type: Phaser.AUTO,

    parent: "game",

    width: 1280,
    height: 720,

    backgroundColor: "#202020",

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },

    scene: {

        create() {

            this.add.text(
                460,
                340,
                "rpg project",
                {
                    fontSize: "32px",
                    color: "#ffffff"
                }
            );

        }

    }

};

new Phaser.Game(config);
