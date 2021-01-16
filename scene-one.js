var platforms;
var players;

var SceneOne = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "SceneOne" });
    },
    init: function() {},
    preload: function() {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        //this.load.image('star', 'assets/star.png');
        this.load.image('star', 'assets/squirrel.png');
        this.load.image('bomb', 'assets/bomb.png');
        //this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('dude', 'assets/charachter.png', { frameWidth: 405, frameHeight: 457 });
    },
    create: function(platforms) {
        this.add.image(400, 300, 'sky');

        platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');
        
        player = this.physics.add.sprite(100, 450, 'dude');
        player.setScale(0.2);
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
    },
    update: function() {}
});
