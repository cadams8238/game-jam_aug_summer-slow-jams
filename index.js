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
}

function create ()
{
  this.add.image(400, 300, 'walls');
}

function update ()
{
}
