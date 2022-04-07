'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

  btnsOpenModal.forEach(item => item.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener(`click`, (e) => {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log(`Current scroll X:${window.pageXOffset}, Y:${pageYOffset}`);

  // console.log('height/width viewport', document.documentElement.clientHeight,
  // documnet.documentElement.clientWidth);

  //Scrolling 
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset, 
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // })

  // smothBehavior(s1coords);


  // The modern way to do this
  section1.scrollIntoView({behavior: 'smooth'})
})

// function  to smooth behavior
// const smothBehavior = function(section){
//   window.scrollTo({
//     left: section.left + window.pageXOffset,
//     top: section.top + window.pageYOffset,
//     behavior: 'smooth',
//   })
// }


// // LECTURE ABOUT WORKING WITH DOM

// const header = document.querySelector('.header');

// const message = document.createElement('div');
// message.classList.add('cookie-message');

// message.insertAdjacentHTML('afterbegin', `Hello! This cookie message to take information from people and analyse for better working <button class='btn btn--close-cookie'>Got it</button>`);

// header.append(message);

// document.querySelector('.btn--close-cookie').addEventListener(`click`, () => message.remove());

// // Style 

// message.style.background = `rgb(55,56,61)`;
// message.style.width = `105%`;

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// console.log(getComputedStyle(message).height); // getComputedStyle take information from the elements
// console.log(getComputedStyle(message).color);

// document.documentElement.style.setProperty('--color-primary', '#3718'); // We can change property in js from style. This is the root color setProperty(arg1, arg2) arg1 -> what we want to change, arg2 what we want to set

// // Attributes 
// const logo = document.querySelector('.nav__logo'); // this works only with insted values in img attributes
// console.log(logo.alt);
// console.log(logo.className);

// // logo.alt = 'Beautiful minimalist logo'; // with this method we can change attributes

// // Non-standart
// console.log(logo.className);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist'); // creating new attribute

// console.log(logo.src); // absolute version
// console.log(logo.getAttribute('src')); // relative version

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data Attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // not includes

// // Don't use this
// logo.className = 'jonas';

// Types of Events and Event Handlers ---------------------------------- Theme

// const h1 = document.querySelector('h1');
// // h1.addEventListener(`mouseenter`, () => {
// //   alert('YAY men whatsapp let\'s go')
// // })

// const alertH1 = () => {
//     alert('YAY men whatsapp let\'s go');

// } // alert once because we first addEventListener and remove it
//   h1.addEventListener('mouseenter', alertH1)
  
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//  Event Propagation in Practice

// const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min); // random number

// const randomColor = () => `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`; // random color

// document.querySelector('.nav__link').addEventListener('click', function(e){
//   this.style.background = randomColor();

// // Stop Propagination
// e.stopPropagation();
// })
// document.querySelector('.nav__links').addEventListener('click', function()  {
//   this.style.background = randomColor();
// })
// document.querySelector('.nav').addEventListener('click', function() {
//   this.style.background = randomColor();
// })