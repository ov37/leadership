var TitleScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "TitleScene" });
    },
    init: function() {},
    preload: function() {
        this.load.image("top", "assets/owens.png");
        this.load.image("middle", "assets/leadership.png");
        this.load.image("bottom", "assets/portfolio.png");
    },
    create: function() {
        this.top = this.add.image(400, 200, "top");
        this.middle = this.add.image(400, 300, "middle");
        this.bottom = this.add.image(400, 400, "bottom");
        /*this.time.addEvent({
            delay: 3000,
            loop: false,
            callback: () => {
                this.scene.start("SceneOne");
            }
        })*/
    },
    update: function() {}
});
