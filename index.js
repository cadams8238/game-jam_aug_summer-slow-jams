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
  backgroundColor: '#008000'
};

var game = new Phaser.Game(config);

function preload ()
{

  this.load.image('walls', 'assets/walls.png');
  this.load.image('lady', 'assets/lady.png');
  this.load.image('skeleton', 'assets/skeleton.png');

}

function create ()
{
  this.add.image(400, 300, 'walls');
  var lady = this.add.image(400, 300, 'lady');
  lady.displayWidth = 32;
  lady.displayHeight = 32;
  var skeleton = this.add.image(25, 25, 'skeleton');
  skeleton.displayWidth = 32;
  skeleton.displayHeight = 32;
}

function update ()
{
}
