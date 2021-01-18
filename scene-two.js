var player;

var SceneTwo = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "SceneTwo" });
    },
    init: function() {},
    preload: function() {
        this.load.image('ground', 'assets/platform.png');
        this.load.image('erica', 'assets/erica.png');
        this.load.image('rob', 'assets/rob.png');
        this.load.spritesheet('dude', 'assets/charachter.png', { frameWidth: 405, frameHeight: 457 });
        this.load.plugin('rexbbcodetextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js', true);
        this.load.plugin('rextexttypingplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexttypingplugin.min.js', true);

    },
    create: function() {
        
        
        platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        
        this.add.image(300, 400, 'erica').setScale(.25);
        this.add.image(500, 400, 'rob').setScale(.25);
        
        player = this.physics.add.sprite(-50, 490, 'dude');
        player.setScale(0.2);
        player.setBounce(0.2);
        player.setCollideWorldBounds(false);
        
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 1, end: 4 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 0 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.physics.add.collider(player, platforms);
        
        var typeConfig = {
            speed: 0.05 * 1000,
            typeMode: 'left-to-right' // 'left-to-right', 'right-to-left', 'middle-to-sides', 'sides-to-middle'
        }
        
        player.setVelocityX(100);

        player.anims.play('right', true);
        
        this.time.addEvent({
            delay: 2000,
            loop: false,
            callback: () => {
                player.setVelocityX(0);

                player.anims.play('turn');
        
                var bbcodetext = this.add.rexBBCodeText(100, 100, '', { fontSize: '20px'} );
                bbcodetext.typing = this.plugins.get('rextexttypingplugin').add(bbcodetext, typeConfig).start('Whoa! Who are you???');
            }
        });
        
        
        
    },
    update: function() {}
});
