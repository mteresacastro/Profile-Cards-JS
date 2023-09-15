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
const inputEmail = document.querySelector('.js-input-email');
const inputPhone = document.querySelector('.js-input-phone');
const inputLinkedin = document.querySelector('.js-input-linkedin');
const inputGithub = document.querySelector('.js-input-github');
///COLORES
const colorOne = document.querySelector('.js-color-1');
const colorTwo = document.querySelector('.js-color-2');
const colorThree = document.querySelector('.js-color-3');
const borderContainer = document.querySelector('.js-container');

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
const data = {
  "palette": 1,
  "name": "",
  "job": "",
  "phone": "",
  "email": "",
  "linkedin": "",
  "github": "",
  "photo": "",
}
function updatePreview() {
  previewName.innerHTML= data.name;
  previewJob.innerHTML = data.job;
  previewPhone.href = `tel:${data.phone}`;
  previewEmail.href = `mailto:${data.email}`;
  previewLinkedin.href = `https://${data.linkedin}`;
  previewGitHub.href = `https://github.com/${data.github}`;
};


//const formComplete=document.querySelector('.js-form');
function handleInputName() {
  const name = inputName.value;
  data.name = name;
  updatePreview();
};
function handleInputJob() {
  const job = inputJob.value;
  data.job = job;
  updatePreview();
};
function handleInputEmail() {
  const email = inputEmail.value;
  data.email = email;
  updatePreview();
};
function handleInputPhone() {
  const phone = inputPhone.value;
  data.phone = phone;
  updatePreview();
};
function handleInputLinkedin() {
  const linkedin = inputLinkedin.value;
  data.linkedin = linkedin;
  updatePreview();
};
function handleInputGithub() {
  const github = inputGithub.value;
  data.github = github;
  updatePreview();
};
///PALETA COLORES///

function handleClickColorOne(){
  previewName.classList.add('name');
}

function handleClickColorTwo(){
  previewName.classList.add('nameRed');
  borderContainer.classList.add('containerRed');
}

function handleClickColorThree(){
  previewName.classList.add('nameBlue');
}

//eventos

designTitle.addEventListener('click', handleClickDesingTitle);
refillTitle.addEventListener('click', handleClickRefillTitle);
shareTitle.addEventListener('click', handleClickShareTitle);
createCard.addEventListener('click', handleClickCreateCard);
resetButton.addEventListener('click', handleResetInput);
inputName.addEventListener('input', handleInputName);
inputJob.addEventListener('input', handleInputJob);
inputEmail.addEventListener('input', handleInputEmail);
inputPhone.addEventListener('input', handleInputPhone);
inputLinkedin.addEventListener('input', handleInputLinkedin);
inputGithub.addEventListener('input', handleInputGithub);
colorOne.addEventListener('click',handleClickColorOne);
colorTwo.addEventListener('click',handleClickColorTwo);
colorThree.addEventListener('click',handleClickColorThree);

