/**
 * main.js
 * used for the card flipping transitions
 */

const flip = document.querySelectorAll('.cards');

window.onload = function() {
    this.classList.remove('clicked');
}

function transform() {
    this.classList.toggle('clicked');
}

flip.forEach(flip => flip.addEventListener("click", transform));