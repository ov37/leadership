var TitleScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "TitleScene" });
    },
    init: function() {},
    preload: function() {
        this.load.image("plane", "phaser.png");
    },
    create: function() {
        this.plane = this.add.image(400, 300, "plane");
        this.time.addEvent({
            delay: 3000,
            loop: false,
            callback: () => {
                this.scene.start("SceneOne");
            }
        })
    },
    update: function() {}
});
