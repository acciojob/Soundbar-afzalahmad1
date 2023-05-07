const audio = document.getElementById("audio");
function play(src) {
	audio.src=src;
	audio.play();
}

function stop() {
	audio.pause();
}