var player;
var cursors;
var stars;
var erica;
var rob;
var bbcodetext5;
var bbcodetext4;
var typeConfig;
var avoidance;

var SceneFour = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "SceneFour" });
    },
    init: function() {},
    preload: function() {
        this.load.image('ground', 'assets/platform.png');
        this.load.image('erica', 'assets/erica.png');
        this.load.image('rob', 'assets/rob.png');
        this.load.image('stars', 'assets/stars.jpg');
        this.load.image('avoidance', 'assets/avoidance.png');
        this.load.spritesheet('dude', 'assets/charachter.png', { frameWidth: 405, frameHeight: 457 });
        this.load.plugin('rexbbcodetextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js', true);
        this.load.plugin('rextexttypingplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexttypingplugin.min.js', true);

    },
    create: function() {
        
        
        platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        
        erica = this.add.image(275, 200, 'erica').setScale(.25);
        rob = this.add.image(450, 200, 'rob').setScale(.25);
        
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
        
        var bbcodetext = this.add.rexBBCodeText(20, 30, '', { fontSize: '20px', wrap: { mode: 'word', width: 700 }} );
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
        
                bbcodetext.typing = this.plugins.get('rextexttypingplugin').add(bbcodetext, typeConfig).start('Wow! Owen is are already back! Good job! Now that you know your [color=red][b]unique strenghts[/b][/color] and [color=red][b]type[/b][/color] as well as  some [color=red][b]teamwork skills[/b][/color], you are ready to face the dreaded [color=green][b]DERAILERS[/b][/color].');
            }
        });
        

        this.time.addEvent({
            delay: 13000,
            loop: false,
            callback: () => {
                avoidance = this.add.image(600, 500, 'avoidance').setScale(.5);
            }
        });
        
        
        this.time.addEvent({
            delay: 15000,
            loop: false,
            callback: () => {

                bbcodetext.typing = this.plugins.get('rextexttypingplugin').add(bbcodetext, typeConfig).start('Oh no! Here is a [color=green][b]DERAILER[/b][/color] already! This one is called [color=green][b]AVOIDANCE[/b][/color]. If you desire harmony too much you will [color=green][b]AVOID[/b][/color] conflict. Conflict is not always bad! [color=green][b]AVOIDANCE[/b][/color] prevents serious team issues from being address and stifles the sharing of new ideas. ');
            }
        });
        
        
        
        this.time.addEvent({
            delay: 46000,
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
        
    }
});
