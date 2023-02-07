import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const CURRENT_TIME = "videoplayer-current-time";

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe, {
    autoplay: true,
});

onFinishedTime();
player.on('timeupdate', throttle(onSaveCurrentTime, 1000));


function onSaveCurrentTime(event) {
    localStorage.setItem(CURRENT_TIME, event.seconds);
};

function onFinishedTime() {
    const savedTime = localStorage.getItem(CURRENT_TIME);
    if (savedTime) {
        player.setCurrentTime(savedTime);
        localStorage.removeItem(CURRENT_TIME);
    };
};

