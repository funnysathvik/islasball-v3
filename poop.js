function work(){
    document.getElementById("hllo").innerHTML = "dont cheat next time"
    document.getElementById("pla").src = "rickastley.gif";
}

function preload(){
    music = loadSound("for the future.mp3");
    song = loadSound("Juice WRLD_recording_vocals.wav");
}

function setup(){
    
}

function draw(){
   music.play();
   music.loop();
    song.play();
    song.loop();
}
