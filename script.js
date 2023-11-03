
const mycardsEl = document.querySelectorAll('.card')
let checkFlip = false;
let firstCard, secondCard;
let lockCard = false;

function flipCard() {
    if (lockCard) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    if (!checkFlip){
      checkFlip = true;
      firstCard = this;
      return;
    }
    secondCard = this;
    checkFlip = false;
  }


mycardsEl.forEach(card => card.addEventListener('click', flipCard));

