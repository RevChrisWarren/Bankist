'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');

console.log(showModal);
for (let i = 0; i < showModal.length; i++)
    console.log(showModal[i].textContent);
