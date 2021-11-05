let nCards = 0;
let nPlays = 0;
let match = [];

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

            cards.push(`
                <div class="card" id="${ids[i]}" data-identifier="card" onclick="rotateCard(this)">
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

    const alreadyFlipped = flippedCard.children[0].classList.contains("front-faceRotate")

    const flippedCardCont = document.querySelectorAll(".front-faceRotate").length;

    if (flippedCardCont < 2) {
        flippedCard.children[0].classList.add("front-faceRotate");
        flippedCard.children[1].classList.add("back-faceRotate");

        let card1 = ((document.querySelectorAll(".front-faceRotate")[0]).parentElement.id);
        let card2 = ((document.querySelectorAll(".front-faceRotate")[1]).parentElement.id);
        console.log(card1, card2);

        if (card1 === card2) {
            return;
        } else {
            setTimeout(unflipCards, 1000);
        }
    }



    if (alreadyFlipped || flippedCardCont > 1) {
        return;
    }
    nPlays++;
    console.log(nPlays);
}

function unflipCards() {

    for (let i = 0; i < 2; i++) {
        let unflipFront = document.querySelector(".front-faceRotate");
        unflipFront.classList.remove("front-faceRotate");

        let unflipBack = document.querySelector(".back-faceRotate");
        unflipBack.classList.remove("back-faceRotate");
    }
}