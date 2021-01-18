var player;
var cursors;
var stars;
var erica;
var rob;
var bbcodetext5;
var bbcodetext4;
var typeConfig;


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
        this.load.image('stars', 'assets/stars.jpg');
        this.load.spritesheet('dude', 'assets/charachter.png', { frameWidth: 405, frameHeight: 457 });
        this.load.plugin('rexbbcodetextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js', true);
        this.load.plugin('rextexttypingplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexttypingplugin.min.js', true);

    },
    create: function() {
        
        
        platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        
        this.add.image(475, 460, 'erica').setScale(.25);
        this.add.image(650, 460, 'rob').setScale(.25);
        
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
        
        typeConfig = {
            speed: 0.05 * 1000,
            typeMode: 'left-to-right' // 'left-to-right', 'right-to-left', 'middle-to-sides', 'sides-to-middle'
        }
        
        player.setVelocityX(100);

        player.anims.play('right', true);
        
        var bbcodetext = this.add.rexBBCodeText(100, 100, '', { fontSize: '20px', wrap: { mode: 'word', width: 300 }} );
        var bbcodetext2 = this.add.rexBBCodeText(400, 175, '', { fontSize: '20px', wrap: { mode: 'word', width: 350 } } );
        var bbcodetext3 = this.add.rexBBCodeText(100, 100, '', { fontSize: '20px', wrap: { mode: 'word', width: 300 }} );
        bbcodetext4 = this.add.rexBBCodeText(400, 175, '', { fontSize: '20px', wrap: { mode: 'word', width: 350 } } );

        cursors = this.input.keyboard.createCursorKeys();


        
        this.time.addEvent({
            delay: 2000,
            loop: false,
            callback: () => {
                player.setVelocityX(0);

                player.anims.play('turn');
        
                
                bbcodetext.typing = this.plugins.get('rextexttypingplugin').add(bbcodetext, typeConfig).start('Whoa! Who are you???');
            }
        });
        
        this.time.addEvent({
            delay: 3000,
            loop: false,
            callback: () => {
                bbcodetext2.typing = this.plugins.get('rextexttypingplugin').add(bbcodetext2, typeConfig).start('We are the people that will help guide you through this leadership journey of yours...\nCall us your ... [color=green][b]INSTRUCTORS![/b][/color]');
            }
        });
        
        
        this.time.addEvent({
            delay: 10000,
            loop: false,
            callback: () => {
                bbcodetext2.visible = false;
                bbcodetext4.typing = this.plugins.get('rextexttypingplugin').add(bbcodetext4, typeConfig).start('What can you tell us about yourself?');
            }
        });
        
        this.time.addEvent({
            delay: 12000,
            loop: false,
            callback: () => {
                bbcodetext.visible = false;
                bbcodetext3.typing = this.plugins.get('rextexttypingplugin').add(bbcodetext3, typeConfig).start('Well... I can tell you about my [color=red]core values[/color] and [color=red]purpose[/color].');
            }
        });
        
        
        this.time.addEvent({
            delay: 16000,
            loop: false,
            callback: () => {
                bbcodetext3.visible = false;
                stars = this.add.image(400, 300, 'stars');
                bbcodetext5 = this.add.rexBBCodeText(20, 50, '', { fontSize: '25px', wrap: { mode: 'word', width: 780 } } );

                bbcodetext5.typing = this.plugins.get('rextexttypingplugin').add(bbcodetext5, typeConfig).start('My first core value is [color=red][b]being present[/b][/color]. I pay close attention to my surroundings and the implicit and explicit emotions of my teamates. I value flexibility and diverse ideas and am always open to changing plans. I think about how to maximize today without minimizing the future.\n\nAnother core value of mine is [color=red][b]helping others[/b][/color]. I want to be a leader people can count on and feel safe around. I desire person-to-person interactions and direct impact rather than a broad or abstract reach. People’s emotional and mental health are more important and have more weight on my decision making than productivity or cost.\n\nMy [color=red][b]purpose[/b][/color] is to provide connection and security to those who feel alone.\n\n\nPress SPACE to advance.');
                bbcodetext5.typing.setTypeSpeed(0.01 * 1000);

                /*this.time.addEvent({
                    delay: 35000,
                    loop: false,
                    callback: () => {
                        //bbcodetext5.typing = this.plugins.get('rextexttypingplugin').add(bbcodetext5, typeConfig).start('Press space');
                    }
                });*/
            }
        });
        
        
    },
    update: function() {
        if (cursors.space.isDown)
        {
            stars.visible = false;
            bbcodetext5.visible = false;
            bbcodetext4.typing = this.plugins.get('rextexttypingplugin').add(bbcodetext4, typeConfig).start('Excellent start! Next, you will search for [color=red][b]unique strenghts[/b][/color] and [color=red][b]professional skills[/b][/color], but be careful. I hear they like to hide in the form of a certain airborne rodent...');
            this.time.addEvent({
                    delay: 7000,
                    loop: false,
                    callback: () => {
                        bbcodetext4.visible = false;
                        erica.visible = false;
                        rob.visible = false;
                        player.setVelocityX(100);

                        player.anims.play('right', true);
                        
                    }
                });
        
        }
    }
});
