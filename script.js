let score = 0;
let slicers = 0;
document.getElementById("poopski").innerHTML = "score - "+score;
function shoot(){
    shootvar = Math.random();
    console.log(shootvar)
    if (shootvar<0.5){
        document.getElementById("play").src="islasmakes.png";
        document.getElementById("hello").innerHTML="YOU MADE IT!!!!!!!"
        score = score + 1;
        slicers = slicers+1;
        document.getElementById("dop").innerHTML = "Your score is: " + slicers;
    }
    else{
        document.getElementById("play").src="islasmissbasketball.png";
        document.getElementById("hello").innerHTML="you missed try again"
    }
    document.getElementById("shootbutton").onclick = rizz;
}
function reset(){
    let shootvar = 0;
    document.getElementById("play").src="islasabouttoshootbasketball.png";
    document.getElementById("hello").innerHTML="";
    document.getElementById("shootbutton").onclick = shoot;
}

function rizz(){
    document.getElementById("shootbutton").onclick = shoot;
    window.location = "poop.html"
}

function playMusic(){
    music = loadSound("Janji - Heroes Tonight (feat. Johnning) [NCS Release].mp3");
}

function setup(){
    
}

function draw(){
   music.play();
   music.loop();
}
