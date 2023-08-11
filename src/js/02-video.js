import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let time;
const timePlay = function (data) {
  time = data.seconds;
  console.log(time);
  localStorage.setItem('videoplayer-current-time', time);
};
player.on('timeupdate', throttle(timePlay, 1000));
let current = localStorage.getItem('videoplayer-current-time');
console.log('currentTime', current);
player.setCurrentTime(current);
