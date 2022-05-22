var score = 0;
var clickingPower= 1;

var cursorcost = 15;
var cursors = 0;
var grandmacost = 100;
var grandmas = 0;
var ovencost = 1000;
var ovens = 0;
var pablocost = 10000;
var pablos = 0;

function buyCursor() {
    if (score >= cursorcost) {
        score = score - cursorcost;
        cursors = cursors + 1;
        cursorcost = Math.round(cursorcost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("cursorcost").innerHTML = cursorcost;
        document.getElementById("cursors").innerHTML = cursors;
        updateGPS()
    }
}

function buyGrandma() {
    if (score >= grandmacost) {
        score = score - grandmacost;
        grandmas = grandmas + 1;
        grandmacost = Math.round(grandmacost * 1.20);

        document.getElementById("score").innerHTML = score;
        document.getElementById("grandmacost").innerHTML = grandmacost;
        document.getElementById("grandmas").innerHTML = grandmas;
        updateGPS()
    }
}

function buyOven() {
    if (score >= ovencost) {
        score = score - ovencost;
        ovens = ovens + 1;
        ovencost = Math.round(ovencost * 1.20);

        document.getElementById("score").innerHTML = score;
        document.getElementById("ovencost").innerHTML = ovencost;
        document.getElementById("ovens").innerHTML = ovens;
        updateGPS()
    }
}

function buyPablo() {
    if (score >= pablocost) {
        score = score - pablocost;
        pablos = pablos + 1;
        pablocost = Math.round(pablocost * 1.20);

        document.getElementById("score").innerHTML = score;
        document.getElementById("pablocost").innerHTML = pablocost;
        document.getElementById("pablos").innerHTML = pablos;
        updateGPS()
    }
}

function addToScore (amount) {
    score = score + amount;
    document.getElementById("score").innerHTML = score;
}

function updateGPS() {
    GPS = cursors + grandmas * 5 + ovens * 50 + pablos * 500; 
    document.getElementById("GPS").innerHTML = GPS;
}

setInterval (function() {
    score = score + cursors;
    score = score + grandmas * 5;
    score = score + ovens * 50;
    score = score + pablos * 500;
    document.getElementById("score").innerHTML = score;
}, 1000);

