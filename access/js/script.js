const audio = document.getElementById('audio');
const contentInBtn = document.getElementById('contentStatus');
const selectSong = document.getElementById('selectSong');
var isPlaying = true;

window.addEventListener('load', function() {
    if(isPlaying) {
        audio.play();
    }else {
        audio.pause();
    }
});

function changeSong() {
    var selectedSong = selectSong.value;
    console.log(selectedSong);
    audio.src = selectedSong;
}

function toogleAudio() {
    if (isPlaying) {
        audio.pause();
        contentInBtn.innerHTML = 'Làm tí nhạc đê';
    } else {
        audio.play();
        contentInBtn.innerHTML = 'TẮT NHẠC ĐI!!!';
    }
    isPlaying=!isPlaying;
}