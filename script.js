const mycardsEl = document.querySelectorAll('.card');
let isFlip = false;
let firstCard, secondCard;
let cardLock = false;


function flipCard() {
    if (cardLock) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    if (!isFlip) {
        isFlip = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    isFlip = false;

    goodMatch();
}

function goodMatch() {
    let isMatch = firstCard.dataset.food === secondCard.dataset.food;
    if (isMatch)
        disableCards();
    else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
    cardLock = true; // Prevent flipping other cards during the delay
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        cardLock = false; // Allow flipping cards again
    }, 1500);
}

function resetGame() {
    mycardsEl.forEach(card => {
        card.classList.remove('flip');
        card.addEventListener('click', flipCard);
    });
}

mycardsEl.forEach(card => card.addEventListener('click', flipCard));
document.getElementById('resetButton').addEventListener('click', resetGame);
