/* global Phaser*/

'use strict';

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  backgroundColor: '#008000'
};

var walls;
var lady;
var skeleton;

var game = new Phaser.Game(config);

function preload ()
{

  this.load.image('walls', 'assets/walls.png');
  this.load.image('lady', 'assets/lady.png');
  this.load.image('skeleton', 'assets/skeleton.png');

}



function create ()
{
  walls = this.physics.add.staticGroup();
  walls.create(400, 300, 'walls');

  lady = this.add.image(400, 300, 'lady').setScale(2);
  skeleton = this.add.image(25, 25, 'skeleton').setScale(2);
//   var walls = this.physics.add.staticGroup();
//   walls.create(400, 300, 'walls');


//   this.physics.add.collider(skeleton, walls);

}

function update ()
{
}
