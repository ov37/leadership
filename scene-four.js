var player;
var cursors;
var stars;
var erica;
var rob;

var bbcodetext;
var bbcodetext2;
var typeConfig;
var avoidance;
var bill;

var state = 0;

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
        this.load.image('bill', 'assets/bill.png');
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
        
        bbcodetext = this.add.rexBBCodeText(20, 30, '', { fontSize: '20px', wrap: { mode: 'word', width: 785 }} );
        var bbcodetext3 = this.add.rexBBCodeText(100, 100, '', { fontSize: '20px', wrap: { mode: 'word', width: 300 }} );
        bbcodetext4 = this.add.rexBBCodeText(400, 175, '', { fontSize: '20px', wrap: { mode: 'word', width: 350 } } );

        cursors = this.input.keyboard.createCursorKeys();
        
        this.time.addEvent({
            delay: 2000,
            loop: false,
            callback: () => {
                player.setVelocityX(0);
                player.anims.play('turn');
        
                bbcodetext.typing = this.plugins.get('rextexttypingplugin').add(bbcodetext, typeConfig).start('Wow! Owen you are already back! Good job! Now that you know your [color=red][b]unique strenghts[/b][/color] and [color=red][b]type[/b][/color] as well as some [color=red][b]teamwork skills[/b][/color], you are ready to face the dreaded [color=green][b]DERAILERS[/b][/color].');
            }
        });
        

        this.time.addEvent({
            delay: 12000,
            loop: false,
            callback: () => {
                avoidance = this.add.image(600, 450, 'avoidance').setScale(.5);
            }
        });
        
        
        this.time.addEvent({
            delay: 14000,
            loop: false,
            callback: () => {

                bbcodetext.typing = this.plugins.get('rextexttypingplugin').add(bbcodetext, typeConfig).start('Oh no! Here is a [color=green][b]DERAILER[/b][/color] already! This one is called [color=green][b]AVOIDANCE[/b][/color]. If you desire harmony too much you will [color=green][b]AVOID[/b][/color] conflict. Conflict is not always bad! [color=green][b]AVOIDANCE[/b][/color] prevents serious team issues from being addressed and stifles the sharing of new ideas. ');
            }
        });
        
        
        this.time.addEvent({
            delay: 29000,
            loop: false,
            callback: () => {
                bbcodetext.typing = this.plugins.get('rextexttypingplugin').add(bbcodetext, typeConfig).start('Press the SPACE BAR to be aware of your tendency to compromise and instead promote discussion and giving critical feedback!');
            }
        });
        
        
        
        
        
    },
    update: function() {
        
        if (cursors.space.isDown && state == 0)
        {
           
           avoidance.visible = false;
           bbcodetext.typing = this.plugins.get('rextexttypingplugin').add(bbcodetext, typeConfig).start('Nice! You defeated [color=green][b]AVOIDANCE[/b][/color]. You still have one more [color=green][b]DERAILER[/b][/color] left and you are going to need all the help you can get.');
           this.time.addEvent({
            delay: 9000,
            loop: false,
            callback: () => {
                bbcodetext.typing = this.plugins.get('rextexttypingplugin').add(bbcodetext, typeConfig).start('Here ... Take the [color=purple][b]National Society of Professional Engineers Code of Ethics![/b][/color]. I heard you are particulary guided by [color=red][b]engineers shall not decieve their clients, employer or public[/b][/color] as well as[color=red][b]engineers should strive to serve the public interest[/b][/color].');
            }
        });
            
            this.time.addEvent({
            delay: 25000,
            loop: false,
            callback: () => {
                bill = this.add.image(650, 450, 'bill').setScale(1.5);
            }
        });
            
            this.time.addEvent({
            delay: 27000,
            loop: false,
            callback: () => {
                bbcodetext.typing = this.plugins.get('rextexttypingplugin').add(bbcodetext, typeConfig).start('Oh no! The last [color=green][b]DERAILER[/b][/color] is here! This is your [color=green][b]INNER CRITIC[/b][/color]! He is the little voice in your head that downplays your contributions to the team and constantly tells you how worthless you are. When you listen to your [color=green][b]INNER CRITIC[/b][/color] it is impossible to lead effectively and you isolate yourself.');
            }
        });
            
            this.time.addEvent({
            delay: 44000,
            loop: false,
            callback: () => {
                bbcodetext.typing = this.plugins.get('rextexttypingplugin').add(bbcodetext, typeConfig).start('Press the RIGHT ARROW KEY to remind yourself of your strenghts and acomplishments as well as lean on those around you in order to reaffirm your worth and prove your [color=green][b]INNER CRITIC[/b][/color] wrong!');
            }
        });
            state = 1;
        }
        
        else if (cursors.right.isDown)
        {
            state = 2;
            bill.visible = false;
            bbcodetext.typing = this.plugins.get('rextexttypingplugin').add(bbcodetext, typeConfig).start('Nice! You defeated your [color=green][b]INNER CRITIC[/b][/color]! You have completed your quest to become a better engineering leader! What are you going to do with all these skills and who are you going to strive to be?');
            this.time.addEvent({
            delay: 12000,
            loop: false,
            callback: () => {
                stars = this.add.image(400, 300, 'stars');
                bbcodetext2 = this.add.rexBBCodeText(20, 50, '', { fontSize: '25px', wrap: { mode: 'word', width: 780 } } );
                bbcodetext2.typing = this.plugins.get('rextexttypingplugin').add(bbcodetext2, typeConfig).start('My [color=red][b]professional goals[/b][/color] are to obtain one or more Masters degrees, work for an environmental or health sensing company, become an embedded systems team lead on project from design to manufacturing, and change careers at least once.\n\nMy [color=red][b]personal goals[/b][/color] are to move to the west coast, live abroad temporarily, and own a small sustainable farm or restaurant to serve as a community center.\n\nI [color=red][b]strive to be[/b][/color] an engineering leader that uses my generosity and empathy to make a lasting impact on people\' lives around me and inspires people to live a more connected and communal life.\n\n Thank You Erica and Rob. Game Over.');
            }
        });
            
        }
    }
});
