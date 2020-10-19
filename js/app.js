// LOAD INPUT
let input = document.querySelector("input");
let button = document.querySelector("a");
button.addEventListener('click', e => {
    let url = input.value;
    fetchMP3(url);
});

// GET DOWNLOAD LINK
function fetchMP3(url){
    let trackParams = url.split('/');
    let trackIndex = trackParams.length - 1;
    let trackName = trackParams[trackIndex];
    console.log(trackName);
    button.href = "https://host2.rj-mw1.com/media/mp3/mp3-320/" + trackName + ".mp3";
}