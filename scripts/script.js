let nCards = 0;

numCards();

function numCards() {
    nCards = parseInt(prompt("Com quantas cartas você quer jogar?"));
    while ((nCards % 2) !== 0 || nCards < 4 || nCards > 14) {
        nCards = parseInt(prompt("Com quantas cartas você quer jogar?"));
    }

    gameCards();
}

function gameCards() {
    const ids = ["bobross", "explody", "fiesta", "metal", "revertit", "triplets", "unicorn"];
    const cardsPrint = document.querySelector(".GameBoard");
    const cards = [];

    for (let i = 0; i < (nCards / 2); i++) {
        for (let j = 0; j < 2; j++) {

            cards.push(`<div class="card" id="${ids[i]}" data-identifier="card" onclick="rotateCard(this)">
            <div class="front-face face" data-identifier="card">
                <img src="assets/front.png" alt="frente">
            </div>
            <div class="back-face face" data-identifier="back-face">
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
}

function comparador() {
    return Math.random() - 0.5;
}

function rotateCard(flippedCard) {
    flippedCard.children[0].classList.add("front-faceRotate");

    flippedCard.children[1].classList.add("back-faceRotate");
}
