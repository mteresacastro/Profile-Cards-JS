'use strict';
//query
const designTitle = document.querySelector('.js-designTitle');
const designContainer = document.querySelector('.js-designContainer');
const refillContainer = document.querySelector('.js-refillContainer');
const shareContainer = document.querySelector('.js-shareContainer');
const refillTitle = document.querySelector('.js-refillTitle');
const shareTitle = document.querySelector('.js-shareTitle');
const createCard = document.querySelector('.js-create-card');
const twitterCard = document.querySelector('.js-twitter-card');


//datos


//funciones

function showDesign(){
    designContainer.classList.remove('collapsed');
}

function collapRefill(){
    refillContainer.classList.add('collapsed');
}

function collapShare(){
    shareContainer.classList.add('collapsed');
}

function showRefill(){
    refillContainer.classList.remove('collapsed');
}

function collapDesign (){
    designContainer.classList.add('collapsed');
}
function showShare () {
    shareContainer.classList.remove('collapsed');
}
function showCreateCard(){
    twitterCard.classList.remove('hidden');
    createCard.classList.add('pulsed-grey');
}

function handleClickDesingTitle (event){
    showDesign();
    collapRefill();
    collapShare();
    console.log('oleeee');
}

function handleClickRefillTitle (event){
    showRefill();
    collapDesign();
    collapShare();
}
function handleClickShareTitle (event){
    showShare();
    collapDesign();
    collapRefill();
}
function handleClickCreateCard (event){
    event.preventDefault();
    showCreateCard();
    createCard.classList.add('pulsed-grey');
}
//eventos

designTitle.addEventListener ('click', handleClickDesingTitle);

refillTitle.addEventListener ('click', handleClickRefillTitle);

shareTitle.addEventListener ('click', handleClickShareTitle);

createCard.addEventListener('click', handleClickCreateCard);



////////PREVIEW////////

const resetButton = document.querySelector('.js-reset-button');
const inputName = document.querySelector('.js-input-name');
const previewName = document.querySelector('.js-preview-name');


/////////Funcion///
function handleResetInput(){
   inputName.value = '';
   previewName.innerHTML = 'Nombre Apellido';
   console.log('hola');
}
/////Eventos////
resetButton.addEventListener('click', handleResetInput);