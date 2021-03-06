/**
 * main.js
 * used for the card flipping transitions
 */

const flip = document.querySelectorAll('.cards');

function transform() {
    if (this.classList.contains('clicked')) {
        this.classList.remove('clicked');
    } else {
        this.classList.add('clicked');
    }
}

flip.forEach(flip => flip.addEventListener("click", transform));