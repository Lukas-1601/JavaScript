let users = [
    { u: "LuckyNugget", p: "1234" },
    { u: "JohnDoe", p: "5678" },
    { u: "IronMan", p: "ACDC" },
    { u: "Enrique", p: "6767" },
    { u: "Macro", p: "42069" }
]
//JS objects

//
document.getElementById("loginButton").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    for (let i = 0; i < users.length; i++) {
        let userObject = users[i];
        if (username === users[i].u && password === users[i].p) {
            document.getElementById("message").textContent = "You have logged in!";
            return;
        }
    }

    document.getElementById("message").textContent = "Wrong username or password";
});