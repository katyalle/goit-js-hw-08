
import Player from '@vimeo/player';
import throttle  from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const LS_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(addKey, 1000));

function addKey(event) {
    const currentTime = event.seconds;
    localStorage.setItem(LS_KEY, JSON.stringify(currentTime));
}

const savedTime = localStorage.getItem(LS_KEY) || 0;
console.log(savedTime);

player.setCurrentTime(savedTime);