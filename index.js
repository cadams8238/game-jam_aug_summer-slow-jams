var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    backgroundColor: '#008000'
};

var game = new Phaser.Game(config);

function preload ()
{
  this.load.image('lady', 'assets/lady.png');
  this.load.image('skeleton', 'assets/skeleton.png');

}

function create ()
{
  this.add.image(400, 300, 'lady');
  this.add.image(25, 25, 'skeleton');

}

function update ()
{
}
