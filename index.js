#!/usr/bin/env node

const path = require('path');
const player = require('play-sound')(opts = {});
const termImg = require('term-img2');

player.play(path.resolve(__dirname, './mp3/inceptionbutton.mp3'), err => { if(err) console.log(err); });
termImg(path.resolve(__dirname, './img/we-need-to-go-deeper.jpg'), {log: true, fallback: () => console.log('We need to go deeper.')});
