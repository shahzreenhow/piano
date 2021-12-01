var audioOne = document.getElementById("audioOne");
var audioTwo = document.getElementById("audioTwo");
var audioThree = document.getElementById("audioThree");
var audioFour = document.getElementById("audioFour");

var key = document.getElementsByClassName("key");

//arrays
var keys = [];
var sound = [];

sound[0] = new Howl ({
    src: ["audio/1.mp3"],
});

sound[1] = new Howl ({
    src: ["audio/2.mp3"],
});

sound[2] = new Howl ({
    src: ["audio/3.mp3"],
});

sound[3] = new Howl ({
    src: ["audio/4.mp3"],
});

sound[4] = new Howl ({
    src: ["audio/5.mp3"],
});

sound[5] = new Howl ({
    src: ["audio/6.mp3"],
});

sound[6] = new Howl ({
    src: ["audio/7.mp3"],
});

sound[7] = new Howl ({
    src: ["audio/8.mp3"],
});

sound[8] = new Howl ({
    src: ["audio/9.mp3"],
});

sound[9] = new Howl ({
    src: ["audio/laser.mp3"],
});


// document.addEventListener("keydown", keyPressed);
// document.addEventListener("keyup", keyReleased);

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function keyPressed(event) {
    console.log(event.keyCode);

    if(event.keyCode ==65) {
        audioOne.play();
        key[0].style.backgroundColor = "red";
    }

    if(event.keyCode ==83) {
        audioTwo.play();
        key[1].style.backgroundColor = "green";
    }

    if(event.keyCode ==68) {
        audioThree.play();
        key[2].style.backgroundColor = "blue";
    }

    if(event.keyCode ==70) {
        audioFour.play();
        key[3].style.backgroundColor = "yellow";
    }
}


function keyReleased(event) {
    if(event.keyCode ==65) {
        key[0].style.backgroundColor = 'white';
    }

    if(event.keyCode ==83) {
        key[1].style.backgroundColor = 'white';
    }

    if(event.keyCode ==68) {
        key[2].style.backgroundColor = 'white';
    }

    if(event.keyCode ==70) {
        key[3].style.backgroundColor = 'white';
    }
}


function keyDown(event) {
    keys[event.keyCode] = true;

    if(keys[65]) {
        sound[0].play();
        key[0].style.backgroundColor = "skyblue";
    }

    if(keys[83]) {
        sound[1].play();
        key[1].style.backgroundColor = "skyblue";
    }

    if(keys[68]) {
        sound[2].play();
        key[2].style.backgroundColor = "skyblue";
    }

    if(keys[70]) {
        sound[3].play();
        key[3].style.backgroundColor = "skyblue";
    }

    if(keys[71]) {
        sound[4].play();
        key[4].style.backgroundColor = "skyblue";
    }

    if(keys[72]) {
        sound[5].play();
        key[5].style.backgroundColor = "skyblue";
    }

    if(keys[74]) {
        sound[6].play();
        key[6].style.backgroundColor = "skyblue";
    }

    if(keys[75]) {
        sound[7].play();
        key[7].style.backgroundColor = "skyblue";
    }

    if(keys[76]) {
        sound[8].play();
        key[8].style.backgroundColor = "skyblue";
    }

    if(keys[186]) {
        sound[9].play();
        key[9].style.backgroundColor = "skyblue";
    }
}

function keyUp(event) {
    delete keys[event.keyCode];

    if(event.keyCode ==65) {
        key[0].style.backgroundColor = "white";
    }

    if(event.keyCode ==83) {
        key[1].style.backgroundColor = "white";
    }

    if(event.keyCode ==68) {
        key[2].style.backgroundColor = "white";
    }

    if(event.keyCode ==70) {
        key[3].style.backgroundColor = "white";
    }

    if(event.keyCode ==71) {
        key[4].style.backgroundColor = "white";
    }

    if(event.keyCode ==72) {
        key[5].style.backgroundColor = "white";
    }

    if(event.keyCode ==74) {
        key[6].style.backgroundColor = "white";
    }

    if(event.keyCode ==75) {
        key[7].style.backgroundColor = "white";
    }

    if(event.keyCode ==76) {
        key[8].style.backgroundColor = "white";
    }

    if(event.keyCode ==186) {
        key[9].style.backgroundColor = "white";
    }

    keys[event.keyCode];
}
