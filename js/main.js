/**
 * main.js
 * used for the card flipping transitions
 */

const flip = document.querySelectorAll('.cards');

function transform() {
    this.classList.toggle('clicked');
}

flip.forEach(flip => flip.addEventListener("click", transform));