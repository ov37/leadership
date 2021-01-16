var SceneOne = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "SceneOne" });
    },
    init: function() {},
    preload: function() {
        this.load.image("plane", "star.png");
    },
    create: function() {
        this.plane = this.add.image(640, 360, "plane");
    },
    update: function() {}
});
