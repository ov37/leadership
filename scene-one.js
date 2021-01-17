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
        this.load.plugin('rexbbcodetextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js', true);

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
            250, 
            50, 
            "Meet Owen", 
            {
                fontSize: 50,
                color: "#ffffff",
                fontStyle: "bold"
            }
        );
        
        
        
        
        player.setVelocityX(100);

        player.anims.play('right', true);
        
         this.time.addEvent({
            delay: 2000,
            loop: false,
            callback: () => {
                player.setVelocityX(0);

                player.anims.play('turn');
                
                var s2 = `Hi! I'm Owen. I'm an engineering student at Cornell University looking to become a better leader. I'm kind of unsure where to start... I heard about this [color=blue][b]Cornell Engineering Leadership Certification Program[/b][/color] - Do you think that is a good place to start?`;

        this.add.rexBBCodeText(50, 150, s2, {
            fontSize: '25px',
            wrap: {
                mode: 'word',
                width: 700
            }
        })
            }
        })
        
        this.time.addEvent({
            delay: 18000,
            loop: false,
            callback: () => {
                
                var s3 = `[color=green][b]Yes?[/b][/color]`;

            this.add.rexBBCodeText(50, 450, s3, {
                fontSize: '25px',
                wrap: {
                    mode: 'word',
                    width: 700
                }
            })
                
            }
        })
        
        this.time.addEvent({
            delay: 20000,
            loop: false,
            callback: () => {
                
                var s4 = `Great! Lets get started.`;

            this.add.rexBBCodeText(50, 480, s4, {
                fontSize: '25px',
                wrap: {
                    mode: 'word',
                    width: 700
                }
            })
                
            player.setVelocityX(100);

            player.anims.play('right', true);
                
            }
        })
        
    },
    update: function() {}
});


function pauseAnim (player)
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }
