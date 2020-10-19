"use strict";

// LOAD INPUT
var input = document.querySelector("input");
var button = document.querySelector("a");
button.addEventListener('click', function (e) {
  var url = input.value;
  fetchMP3(url);
}); // GET DOWNLOAD LINK

function fetchMP3(url) {
  var trackParams = url.split('/');
  var trackIndex = trackParams.length - 1;
  var trackName = trackParams[trackIndex];
  console.log(trackName);
  button.href = "https://host2.rj-mw1.com/media/mp3/mp3-320/" + trackName + ".mp3";
}