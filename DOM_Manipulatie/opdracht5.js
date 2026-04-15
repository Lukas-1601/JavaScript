const button = document.getElementById("button");
const container = document.getElementById("container");

function countNumber(array, number) {
    let teller = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            teller++;
        }
    }

    return teller;
}

button.addEventListener("click", function() {

    container.innerHTML = "";

    let worpen = [];

    for (let i = 0; i < 5; i++) {
        let getal = Math.floor(Math.random() * 6) + 1;
        
        worpen.push(getal);

        let vak = document.createElement("div");
        vak.innerText = getal;
        container.appendChild(vak);
    }

    for (let nummer = 1; nummer <= 6; nummer++) {

        let aantal = countNumber(worpen, nummer);

        let tekst = document.createElement("p");
        tekst.innerText = nummer + ": " + aantal;
        container.appendChild(tekst);
    }
});