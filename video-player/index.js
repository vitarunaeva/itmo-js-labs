let videoPlayer = document.getElementById("videoPlayer");
let progress = document.querySelector(".progress-line");
let volumeSlider = document.getElementById("volume");
let currentTime = document.getElementById("currentTime");

function videoPlay() {
    videoPlayer.play();
}

function videoPause() {
    videoPlayer.pause();
}

videoPlayer.addEventListener("timeupdate", function () {
    let redProgress = videoPlayer.currentTime / videoPlayer.duration;
    progress.style.width = redProgress * 100 + "%";
});

videoPlayer.addEventListener("timeupdate",function(){

    let volumePosition = videoPlayer.currentTime / videoPlayer.duration;

    progress.style.width = volumePosition * 100 +'%';

    convertTime(Math.round(videoPlayer.currentTime));
});

function convertTime(seconds)
{
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent = min + ":" + sec;

    totalTime(Math.round(videoPlayer.duration));
}

function totalTime(seconds)
{
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent += " / " + min + ":" + sec;
}


function changeVolume(){

    videoPlayer.volume = volumeSlider.value;

    if(volumeSlider.value == 0){

        $("#speaker").attr("src","img/icons/mute.png");
    }
    else{
        $("#speaker").attr("src","img/icons/speaker.png");
    }
}