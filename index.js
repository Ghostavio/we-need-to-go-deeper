#!/usr/bin/env node

const player = require('play-sound')(opts = {});
const termImg = require('term-img2');

player.play('./mp3/inceptionbutton.mp3', function(err){});
termImg('./img/we-need-to-go-deeper.jpg', {log: true});
