
function nCards() {
    let nCards = parseInt(prompt("Com quantas cartas você quer jogar?"));
    while ((nCards % 2) !== 0 || nCards < 4 || nCards > 14) {
        nCards = parseInt(prompt("Com quantas cartas você quer jogar?"));
    }
    gameCards();
}

function gameCards() {
    const array = document.getElementsByClassName("card")

    array[0].classList.add("hide");

    console.log(array[0])
}