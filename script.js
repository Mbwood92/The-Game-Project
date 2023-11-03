
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
/*
  if(firstCard===secondCard)
  lockcard=true;

  firstCard.classList.remove('flip')
  secondCard.classList.remove('flip')
  lockcard=false;
  */

mycardsEl.forEach(card => card.addEventListener('click', flipCard));

