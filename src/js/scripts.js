const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modalClose = document.querySelector('.modal-close')

for (let card of cards) {
  card.addEventListener('click', () => modalOverlay.classList.add('active'))
}

modalClose.addEventListener('click', () => modalOverlay.classList.remove('active'))