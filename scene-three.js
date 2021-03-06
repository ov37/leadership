var player;
    var stars;
    var platforms;
    var cursors;
    var score = 0;
    var scoreText;

var wood;
var paused = 0;
var texttop;
var count = 0;
var type;

var SceneThree = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "SceneThree" });
    },
    init: function() {},
    preload: function() {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        //this.load.image('star', 'assets/star.png');
        this.load.image('star', 'assets/squirrel.png');
        this.load.image('wood', 'assets/sign.png');
        this.load.image('type', 'assets/type.png');
        this.load.image('harmony', 'assets/harmony.png');
        this.load.image('empathy', 'assets/empathy.png');
        this.load.image('responsibility', 'assets/responsibility.png');
        this.load.image('arranger', 'assets/arranger.png');
        this.load.image('skills', 'assets/skills.png');
        //this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('dude', 'assets/charachter.png', { frameWidth: 405, frameHeight: 457 });
    },
    create: function() {
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
        
        var texttop = this.add.text(
            30, 
            20, 
            "Use the arrow keys to move, SPACE to close", 
            {
                fontSize: 30,
                color: "#ffffff",
                fontStyle: "bold"
            }
        );
        
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

        cursors = this.input.keyboard.createCursorKeys();
       
       stars = this.physics.add.group({
            key: 'star',
            repeat: 5,
            setXY: { x: 75, y: 0, stepX: 120 },
            setScale: { x: .15, y: .15 }
        });

           
        stars.children.iterate(function (child) {

            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

        });

        

        this.physics.add.collider(player, platforms);
        this.physics.add.collider(stars, platforms);
        
        this.physics.add.overlap(player, stars, collectStar, null, this);
    },
    update: function() {
         if (cursors.left.isDown && !paused)
        {
            player.setVelocityX(-160);

            player.anims.play('left', true);
        }
        else if (cursors.right.isDown && !paused)
        {
            player.setVelocityX(160);

            player.anims.play('right', true);
        }
        else if(count <6)
        {
            player.setVelocityX(0);

            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down && !paused)
        {
            player.setVelocityY(-330);
        }
        
        if (cursors.space.isDown && paused)
        {
            wood.visible= false;
            scoreText.visible = false;
            type.visible = false;
            if(count < 6) {
                paused = 0;
            }
            else {
                player.setCollideWorldBounds(true);
                player.setVelocityX(100);

                player.anims.play('right', true);
                
                this.time.addEvent({
                    delay: 4000,
                    loop: false,
                    callback: () => {
                        this.scene.start("SceneFour");
                    }
            })
            }
        }
    }
});

function collectStar (player, star)
    {
        star.disableBody(true, true);
        
        wood = this.add.image(400, 400, 'wood');
        wood.displayWidth = 600;
        wood.displayHeight = 400;
        
        paused = 1;

        if(count == 0){
            type = this.add.image(400, 280, 'type');
            scoreText = this.add.text(180, 320, 'I make people feel at ease and can turn an awkward tense situation into a lighthearted one.', { fontSize: '20px', fill: '#000000', fontStyle: "bold", wordWrap: { width: 500 } });
            count++;
        }
        else if(count == 1){
             type = this.add.image(400, 280, 'harmony');
            scoreText = this.add.text(180, 320, 'I strive to find agreement and compromise. I promote common ground and try to avoid conflict.', { fontSize: '20px', fill: '#000000', fontStyle: "bold", wordWrap: { width: 500 } });
            count++;
        }
        else if(count == 2){
            type = this.add.image(400, 280, 'empathy');
            scoreText = this.add.text(180, 320, ' I can sense and anticipate emotional needs of people around me. I value people feeling heard and work to ensure emotional security.', { fontSize: '20px', fill: '#000000', fontStyle: "bold", wordWrap: { width: 500 } });
            count++;
        }
        else if(count == 3){
            type = this.add.image(400, 280, 'responsibility');
            scoreText = this.add.text(180, 320, 'I am true to my word and ethics. People know they can count on me to get tasks done.', { fontSize: '20px', fill: '#000000', fontStyle: "bold", wordWrap: { width: 500 } });
            count++;
        }
        else if(count == 4){
             type = this.add.image(400, 280, 'arranger');
            scoreText = this.add.text(180, 320, 'I am not afraid of a complex problem and enjoy managing a lot of moving variables and embracing changing and volatile environments.', { fontSize: '20px', fill: '#00000', fontStyle: "bold", wordWrap: { width: 500 } });
            count++;
        }
        else if(count == 5){
            type = this.add.image(400, 280, 'skills');
            scoreText = this.add.text(180, 320, 'An assortment of skills! This includes networking, leading in the moment, giving feedback, project management, managing conflict. ', { fontSize: '20px', fill: '#000000', fontStyle: "bold", wordWrap: { width: 500 } });
            count++;
        }

    }
