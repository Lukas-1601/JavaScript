let geheimWoord = "javascript";
let levens = 10;

let geradenLetters = [];
let verkeerdeLetters = [];

let letterInput = document.getElementById("letterInput");
let guessButton = document.getElementById("guessButton");
let woordDisplay = document.getElementById("Galgje");
let verkeerdeLettersDisplay = document.getElementById("verkeerde_Letters");
let levensDisplay = document.getElementById("levens");
let berichtDisplay = document.getElementById("bericht");
let resetButton = document.getElementById("resetButton");

function maakStreepjes() {
    geradenLetters = [];
    for (let i = 0; i < geheimWoord.length; i++) {
        geradenLetters.push("_");
    }
    woordDisplay.textContent = geradenLetters.join(" ");
}

maakStreepjes();

guessButton.addEventListener("click", function () {
    let letter = letterInput.value.toLowerCase();
    letterInput.value = "";
    if (letter === "" || letter.length !== 1) {
        berichtDisplay.textContent = "Voer één letter in";
        return;
    }
    controleerLetter(letter);
});

function controleerLetter(letter) {
    if (geheimWoord.includes(letter)) {
        for (let i = 0; i < geheimWoord.length; i++) {
            if (geheimWoord[i] === letter) {
                geradenLetters[i] = letter;
            }
        }
        woordDisplay.textContent = geradenLetters.join(" ");
        berichtDisplay.textContent = "Goed gedaan!";
        checkWin();
    } else {
        if (!verkeerdeLetters.includes(letter)) {
            verkeerdeLetters.push(letter);
            verkeerdeLettersDisplay.textContent = verkeerdeLetters.join(" ");
            levens--;
            levensDisplay.textContent = "levens = " + levens;
            if (levens <= 0) {
                berichtDisplay.textContent = "Je hebt verloren!";
                guessButton.disabled = true;
            }
        }
    }
}

function checkWin() {
    if (!geradenLetters.includes("_")) {
        berichtDisplay.textContent = "Je hebt gewonnen!";
        guessButton.disabled = true;
    }
}

resetButton.addEventListener("click", function () {
    levens = 10;
    verkeerdeLetters = [];
    verkeerdeLettersDisplay.textContent = "";
    levensDisplay.textContent = "levens = " + levens;
    berichtDisplay.textContent = "";
    guessButton.disabled = false;
    maakStreepjes();
});
