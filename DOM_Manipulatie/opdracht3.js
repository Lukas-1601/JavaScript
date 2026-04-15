const button = document.getElementById("button");
const container = document.getElementById("container");

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
});