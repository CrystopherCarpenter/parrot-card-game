let nCards = 0;
let nPlays = 0;
let time = 0;
let idInterval;

numCards();

function numCards() {

<<<<<<< HEAD
    nCards = parseInt(prompt("Com quantas cartas você quer jogar?"));
=======
    nCards = parseInt(prompt("Com quantas cartas você quer jogar?");
>>>>>>> 478a099a1016ca81ca999cd1c8f572aa79ba20c7
    while ((nCards % 2) !== 0 || nCards < 4 || nCards > 14) {
        nCards = parseInt(prompt("Com quantas cartas você quer jogar?"));
    }

    gameCards();
}

function gameCards() {

    const ids = ["bobross", "explody", "fiesta", "metal", "revertit", "triplets", "unicorn"];
    const cardsPrint = document.querySelector(".GameBoard");
    const cards = [];

    ids.sort(comparador);

    for (let i = 0; i < (nCards / 2); i++) {
        for (let j = 0; j < 2; j++) {

            cards.push(`
                <div class="card" id="${ids[i]}" data-identifier="card" onclick="rotateCard(this)">
                    <div class="front-face face" data-identifier="back-face">
                        <img src="assets/front.png" alt="frente">
                    </div>
                    <div class="back-face face" data-identifier="front-face">
                        <img src="assets/${ids[i]}parrot.gif" alt="verso">
                    </div>
                </div>
            `);
        }
    }

    cards.sort(comparador);

    for (let i = 0; i < cards.length; i++) {

        cardsPrint.innerHTML += cards[i];
    }

    idInterval = setInterval(timer, 1000);;

}

function comparador() {
    return Math.random() - 0.5;
}

function rotateCard(flippedCard) {

    const alreadyFlipped = flippedCard.children[0].classList.contains("front-faceRotate")

    const alreadyCorrect = flippedCard.children[0].classList.contains("front-faceCorrect")

    const flippedCardCont = document.querySelectorAll(".front-faceRotate").length;

    if (alreadyFlipped || alreadyCorrect || flippedCardCont > 1) {
        return;
    }
    nPlays++;

    if (flippedCardCont < 2) {

        flipCard(flippedCard);
    }

    const correctCards = document.querySelectorAll(".front-faceCorrect").length;

    if (correctCards === nCards) {
        setTimeout(endGame, 501);
    }
}

function flipCard(flip) {
    flip.children[0].classList.add("front-faceRotate");
    flip.children[1].classList.add("back-faceRotate");

    let card1 = ((document.querySelectorAll(".front-faceRotate")[0]).parentElement);
    let card2;
    if ((document.querySelectorAll(".front-faceRotate")).length === 2) {
        card2 = ((document.querySelectorAll(".front-faceRotate")[1]).parentElement);

        if (card1.id === card2.id) {

            card1.children[0].classList.remove("front-faceRotate");
            card1.children[1].classList.remove("back-faceRotate");

            card1.children[0].classList.add("front-faceCorrect");
            card1.children[1].classList.add("back-faceCorrect");

            card2.children[0].classList.remove("front-faceRotate");
            card2.children[1].classList.remove("back-faceRotate"); 2

            card2.children[0].classList.add("front-faceCorrect");
            card2.children[1].classList.add("back-faceCorrect");

        } else {
            setTimeout(unflipCards, 1000);
        }
    }
}

function unflipCards() {

    for (let i = 0; i < 2; i++) {
        let unflipFront = document.querySelector(".front-faceRotate");
        unflipFront.classList.remove("front-faceRotate");

        let unflipBack = document.querySelector(".back-faceRotate");
        unflipBack.classList.remove("back-faceRotate");
    }
}

function endGame() {
    alert(`Você ganhou em ${nPlays} jogadas e levou ${time} segundos!`);

    clearInterval(idInterval);

    let restart = prompt("Gostaria de reiniciar a partida?");
    if (restart === `sim` || restart === `Sim` || restart === `SIM`) {
        Restart();
    }
}

function Restart() {
    const previousGameCardsFront = document.querySelectorAll(".front-faceCorrect");
    const previousGameCardsBack = document.querySelectorAll(".back-faceCorrect");

    for (let i = 0; i < previousGameCardsFront.length; i++) {
        previousGameCardsFront[i].classList.remove("front-faceCorrect");
        previousGameCardsBack[i].classList.remove("back-faceCorrect");
    }

    const previousGameBoard = document.querySelector(".GameBoard");

    previousGameBoard.innerHTML = "";

    nCards = 0;
    nPlays = 0;
    time = 0;

    numCards();
}

function timer() {
    time++;

    timerSize();
}

function timerSize() {
    let timer = `${time}`;
    while (timer.length < 3) {
        timer = `0${timer}`;
        while (timer.length < 2) {
            timer = `0${timer}`;
        }
    }

    let screenTimer = document.querySelector(".timer");
    screenTimer.innerHTML = timer;
}