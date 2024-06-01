function work(){
    document.getElementById("hllo").innerHTML = "dont cheat next time"
    document.getElementById("pla").src = "rickastley.gif";
}

function preload(){
    music = loadSound("for the future.mp3");
}

function setup(){
    
}

function draw(){
   music.play();
   music.loop();
}
