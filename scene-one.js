var SceneOne = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "SceneOne" });
    },
    init: function() {},
    preload: function() {},
    create: function() {
        var text = this.add.text(
            400, 
            300, 
            "Meet Owen", 
            {
                fontSize: 50,
                color: "#ffffff",
                fontStyle: "bold"
            }
        );//.setOrigin(0.5);
    },
    update: function() {}
});
