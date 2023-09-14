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
////////PREVIEW////////

const resetButton = document.querySelector('.js-reset-button');
const previewName = document.querySelector('.js-preview-name');
const previewJob = document.querySelector('.js-preview-job');
const previewPhone = document.querySelector('.js-preview-phone');
const previewEmail = document.querySelector('.js-preview-email');
const previewLinkedin = document.querySelector('.js-preview-linkedin');
const previewGitHub = document.querySelector('.js-preview-github');
////FORM
const inputName = document.querySelector('.js-input-nameCompleted');
const inputJob = document.querySelector('.js-input-job');
const inputEmail = document.querySelector('js-input-email');
const inputPhone = document.querySelector('js-input-phone');
const inputLinkedin = document.querySelector('js-input-linkedin');
const inputGithub = document.querySelector('js-input-github');

//datos

//funciones

function showDesign() {
  designContainer.classList.remove('collapsed');
}

function collapRefill() {
  refillContainer.classList.add('collapsed');
}

function collapShare() {
  shareContainer.classList.add('collapsed');
}

function showRefill() {
  refillContainer.classList.remove('collapsed');
}

function collapDesign() {
  designContainer.classList.add('collapsed');
}
function showShare() {
  shareContainer.classList.remove('collapsed');
}
function showCreateCard() {
  twitterCard.classList.remove('hidden');
  createCard.classList.add('pulsed-grey');
}

function handleClickDesingTitle(event) {
  showDesign();
  collapRefill();
  collapShare();
  console.log('oleeee');
}

function handleClickRefillTitle(event) {
  showRefill();
  collapDesign();
  collapShare();
}
function handleClickShareTitle(event) {
  showShare();
  collapDesign();
  collapRefill();
}
function handleClickCreateCard(event) {
  event.preventDefault();
  showCreateCard();
  createCard.classList.add('pulsed-grey');
}
/////////RESET///

function handleResetInput(event) {
    event.preventDefault();
    inputName.value = '';
    inputJob.value = '';
    inputEmail.value = '';
    previewEmail.href = '#';
    inputPhone.value = '';
    previewPhone.href = '#';
    inputLinkedin.value = '';
    previewLinkedin.href = '#';
    inputGithub.value = '';
    previewGitHub.href = '#';

    previewName.innerHTML = 'Nombre Apellido';
    previewJob.innerHTML = 'Font-end developer';
}

const formComplete=document.querySelector('.js-form');
function handleForm(event) {
  event.preventDefault();
  const inputForm = {
    name: inputName.value,
    job: inputJob.value,
    phone: inputPhone,
    email: inputEmail,
    linkedin: inputLinkedin,
    github: inputGithub,
  };
   
   previewName.innerHTML= inputForm.name;
   previewJob.innerHTML = inputForm.job;
   previewPhone.href = `tel:${inputForm.phone}`;
   previewEmail.href = `mailto:${inputForm.email}`;
   previewLinkedin.href = `https://${inputForm.linkedin}`;
   previewGitHub.href = `https://github.com/${inputForm.github}`;

  }

  console.log(handleForm);


//eventos

designTitle.addEventListener('click', handleClickDesingTitle);

refillTitle.addEventListener('click', handleClickRefillTitle);

shareTitle.addEventListener('click', handleClickShareTitle);

createCard.addEventListener('click', handleClickCreateCard);
resetButton.addEventListener('click', handleResetInput);
formComplete.addEventListener('keydown', handleForm);
