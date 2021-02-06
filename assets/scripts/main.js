// main.js

// TODO
const volumeNumber = document.getElementById("volume-number");
const hornSound = document.getElementById("horn-sound");
const volumeSlider = document.getElementById("volume-slider");
const volumeImage = document.getElementById("volume-image");
const soundImage = document.getElementById("sound-image");
const honkButton = document.getElementById("honk-btn");

const radioButtonAirHorn = document.getElementById("radio-air-horn");
const radioButtonCarHorn = document.getElementById("radio-car-horn");
const radioButtonPartyHorn = document.getElementById("radio-party-horn");

let volume = volumeNumber.value;
honkButton.type = "button";

honkButton.onclick = function(event) {
    hornSound.play();
};

volumeNumber.oninput = function() {
    volume = volumeNumber.value;
    volumeSlider.value = volume;

    update();
};

volumeSlider.oninput = function() {
    volume = volumeSlider.value;
    volumeNumber.value = volume;

    update();
};

radioButtonAirHorn.onchange = function() {
    hornSound.setAttribute("src", "./assets/media/audio/air-horn.mp3");
    soundImage.setAttribute("src", "./assets/media/images/air-horn.svg");
};

radioButtonCarHorn.onchange = function() {
    hornSound.setAttribute("src", "./assets/media/audio/car-horn.mp3");
    soundImage.setAttribute("src", "./assets/media/images/car.svg");
};

radioButtonPartyHorn.onchange = function() {
    hornSound.setAttribute("src", "./assets/media/audio/party-horn.mp3");
    soundImage.setAttribute("src", "./assets/media/images/party-horn.svg");
};

function updateVolumeImage() {
    if(volume > 66) {
        volumeImage.setAttribute("src", "./assets/media/icons/volume-level-3.svg");
    }

    else if(volume > 33) {
        volumeImage.setAttribute("src", "./assets/media/icons/volume-level-2.svg");
    }

    else {
        volumeImage.setAttribute("src", "./assets/media/icons/volume-level-1.svg");
    }
}

function updateHornSound() {
    hornSound.volume = volume / 100.0;

    if(volume == 0) {
        honkButton.setAttribute("disabled", "");
    }

    else if(honkButton.hasAttribute("disabled")) {
        honkButton.removeAttribute("disabled");
    }
}

function update() {
    updateVolumeImage();
    updateHornSound();
}