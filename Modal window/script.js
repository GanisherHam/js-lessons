'use stricks';

const showModal = document.querySelectorAll(`.show-modal`);
const modal = document.querySelector(`.modal`);
const btnCloseModal = document.querySelector(`.close-modal`);
const overlay = document.querySelector(`.overlay`);

const openModal = function () {
    modal.classList.remove(`hidden`);
    overlay.classList.remove(`hidden`);  
}

const closeModal = function() {
    modal.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
}

showModal.forEach(item => {
    item.addEventListener(`click`, openModal)
})

btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function(event) {
    if(event.key === `Escape` && !modal.classList.contains(`hidden`)){
        closeModal();
        console.log(event);
    }
})