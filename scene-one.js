var player;

var SceneOne = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "SceneOne" });
    },
    init: function() {},
    preload: function() {
        this.load.image('ground', 'assets/platform.png');
        this.load.spritesheet('dude', 'assets/charachter.png', { frameWidth: 405, frameHeight: 457 });
    },
    create: function() {
        
        platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        
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
        
        var text = this.add.text(
            50, 
            50, 
            "Meet Owen", 
            {
                fontSize: 50,
                color: "#ffffff",
                fontStyle: "bold"
            }
        );//.setOrigin(0.5);
        
        player.setVelocityX(100);

        player.anims.play('right', true);
        
         this.time.addEvent({
            delay: 2000,
            loop: false,
            callback: pauseAnim
        })
        
    },
    update: function() {}
});


function pauseAnim (player)
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }
