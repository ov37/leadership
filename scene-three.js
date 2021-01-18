var player;
    var stars;
    var platforms;
    var cursors;
    var score = 0;
    var scoreText;

var wood;
var paused = 0;
var text;
var count = 0;

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
        this.load.image('bomb', 'assets/bomb.png');
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
            250, 
            20, 
            "Use the arrow keys to move", 
            {
                fontSize: 40,
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

        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
        scoreText.visible = false;
        

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
        else
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
            paused = 0;
        }
    }
});

function collectStar (player, star)
    {
        star.disableBody(true, true);
        
        wood = this.add.image(400, 400, 'wood');
        wood.displayWidth = 50;
        wood.displayHeight = 400;
        scoreText.visible = True;
        paused = 1;

        if(count == 0){
            scoreText.setText('Score: ' + 1);
            count++;
        }
        else if(count == 1){
            scoreText.setText('Score: ' + 2);
            count++;
        }
        else if(count == 2){
            scoreText.setText('Score: ' + 3);
            count++;
        }
        else if(count == 3){
            scoreText.setText('Score: ' + 4);
            count++;
        }
        else if(count == 4){
            scoreText.setText('Score: ' + 5);
            count++;
        }
        else if(count == 5){
            scoreText.setText('Score: ' + 6);
            count++;
        }

    }
