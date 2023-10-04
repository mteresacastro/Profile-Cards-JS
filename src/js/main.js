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
const msgError = document.querySelector('.js-message-box');
const btnTwitter = document.querySelector('.js-btn-twitter');

////////PREVIEW////////

const resetButton = document.querySelector('.js-reset-button');
const previewName = document.querySelector('.js-preview-name');
const previewJob = document.querySelector('.js-preview-job');
const previewPhone = document.querySelector('.js-preview-phone');
const previewEmail = document.querySelector('.js-preview-email');
const previewLinkedin = document.querySelector('.js-preview-linkedin');
const previewGitHub = document.querySelector('.js-preview-github');
const cardUrl = document.querySelector('.js-cardLink');
const previewPhoto = document.querySelector('.js__profile-preview');
const previewMiniImage = document.querySelector('.js__profile-image');

////FORM
const inputName = document.querySelector('.js-input-nameCompleted');
const inputJob = document.querySelector('.js-input-job');
const inputEmail = document.querySelector('.js-input-email');
const inputPhone = document.querySelector('.js-input-phone');
const inputLinkedin = document.querySelector('.js-input-linkedin');
const inputGithub = document.querySelector('.js-input-github');
const inputPhoto = document.querySelector('.js__profile-upload-btn');

///COLORES
const colorOne = document.querySelector('.js-color-1');
const colorTwo = document.querySelector('.js-color-2');
const colorThree = document.querySelector('.js-color-3');
const borderContainer = document.querySelector('.js-container');
const iconColors = document.querySelector('.js-icons');
const iconColorsOne = document.querySelector('.js-icons-1');
const iconColorsTwo = document.querySelector('.js-icons-2');
const iconColorsThree = document.querySelector('.js-icons-3');
const form = document.querySelector('.js-form');

//datos
let data = {
  palette: 1,
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};
const twitterLink = document.querySelector('.js-twitter-link');
const infoData = JSON.parse(localStorage.getItem('dataForm'));

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
function showCreateCard(responseJSON) {
  twitterCard.classList.remove('hidden');
  createCard.classList.add('pulsed-grey');
  cardUrl.innerHTML = responseJSON.cardURL;
  cardUrl.href = responseJSON.cardURL;
  btnTwitter.classList.remove('hidden');
  twitterLink.href = `https://twitter.com/intent/tweet?text=Mira%20mi%20nueva%20tarjeta%20de%20perfil&url=${responseJSON.cardURL}`;
}
function sectionShareReset() {
  twitterCard.classList.add('hidden');
  createCard.classList.remove('pulsed-grey');
  cardUrl.innerHTML = '';
  cardUrl.href = '';
  twitterLink.href = '';
  btnTwitter.classList.add('hidden');
  msgError.classList.add('hidden');
}

function handleClickDesingTitle() {
  showDesign();
  collapRefill();
  collapShare();
}

function handleClickRefillTitle() {
  showRefill();
  collapDesign();
  collapShare();
}
function handleClickShareTitle() {
  showShare();
  collapDesign();
  collapRefill();
}

function handleClickCreateCard(event) {
  event.preventDefault();

  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())

    .then((responseJSON) => {
      if (responseJSON.success === false) {
        msgError.classList.remove('hidden');
        msgError.innerHTML =
          'Uy! No se pudo crear la tarjeta, revisa los campos <i class="fa-regular fa-face-sad-cry"></i>';
        if (responseJSON.error === 'Database error: ER_DATA_TOO_LONG') {
          alert('Imagen demasiado grande, prueba con una de menos de 40kb');

          return;
        }
      } else {
        showCreateCard(responseJSON);
        msgError.classList.add('hidden'); // createCard.classList.add('pulsed-grey');
        cardUrl.href = responseJSON.cardURL;
        cardUrl.innerHTML = responseJSON.cardURL;
        localStorage.setItem('dataForm', JSON.stringify(data));
    }    console.log(responseJSON);
    });
}

/////////RESET///

function handleResetInput(event) {
  event.preventDefault(event);
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
  previewJob.innerHTML = 'Front-end developer';
  colorOne.checked = true;
  previewPhoto.style.backgroundImage = `url('./assets/images/pikachu.png')`;
  previewMiniImage.style.backgroundImage = `url('./assets/images/pikachu.png')`;
  sectionShareReset();
  handleClickColorOne();
  localStorage.removeItem('dataForm', JSON.stringify(data));
}

function updatePreview() {
  previewName.innerHTML = data.name.replace('<', '');
  previewJob.innerHTML = data.job.replace('<', '');
  previewPhone.href = `tel:${data.phone}`;
  previewEmail.href = `mailto:${data.email}`;
  previewLinkedin.href = `https://${data.linkedin}`;
  previewGitHub.href = `https://github.com/${data.github.slice(1)}`;
  previewPhoto.src = data.photo;

  if (data.name === '') {
    previewName.innerHTML = 'Nombre Apellido';
  } else {
    previewName.innerHTML = inputName.value;
  }
  if (data.job === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = inputJob.value;
  }
}

function handleInputForm(event) {
  if (event.target.name !== 'photo') {
    data[event.target.name] = event.target.value;
    updatePreview();
  } else {
    data[event.target.name] = event.target.files[0];
  }
}

//}
///PALETA COLORES///
function handleClickColorOne() {
  colorOne.getAttribute('checked');
  previewName.classList.remove('nameRed');
  previewName.classList.remove('nameBlue');
  borderContainer.classList.remove('containerRed');
  borderContainer.classList.remove('containerYellow');
  borderContainer.classList.add('containerBlue');
  iconColors.classList.remove('liRed');
  iconColorsOne.classList.remove('liRed');
  iconColorsTwo.classList.remove('liRed');
  iconColorsThree.classList.remove('liRed');
  iconColors.classList.remove('liGrey');
  iconColorsOne.classList.remove('liGrey');
  iconColorsTwo.classList.remove('liGrey');
  iconColorsThree.classList.remove('liGrey');
  iconColors.classList.add('liBlue');
  iconColorsOne.classList.add('liBlue');
  iconColorsTwo.classList.add('liBlue');
  iconColorsThree.classList.add('liBlue');
}

function handleClickColorTwo() {
  previewName.classList.add('nameRed');
  previewName.classList.remove('nameBlue');
  borderContainer.classList.add('containerRed');
  borderContainer.classList.remove('containerBlue');
  borderContainer.classList.remove('containerYellow');
  iconColors.classList.add('liRed');
  iconColorsOne.classList.add('liRed');
  iconColorsTwo.classList.add('liRed');
  iconColorsThree.classList.add('liRed');
  iconColors.classList.remove('liBlue');
  iconColorsOne.classList.remove('liBlue');
  iconColorsTwo.classList.remove('liBlue');
  iconColorsThree.classList.remove('liBlue');
  iconColors.classList.remove('liGrey');
  iconColorsOne.classList.remove('liGrey');
  iconColorsTwo.classList.remove('liGrey');
  iconColorsThree.classList.remove('liGrey');
}

function handleClickColorThree() {
  previewName.classList.add('nameBlue');
  borderContainer.classList.remove('containerRed');
  borderContainer.classList.remove('containerBlue');
  borderContainer.classList.add('containerYellow');
  iconColors.classList.add('liGrey');
  iconColorsOne.classList.add('liGrey');
  iconColorsTwo.classList.add('liGrey');
  iconColorsThree.classList.add('liGrey');
  iconColors.classList.remove('liBlue');
  iconColorsOne.classList.remove('liBlue');
  iconColorsTwo.classList.remove('liBlue');
  iconColorsThree.classList.remove('liBlue');
  iconColors.classList.remove('liRed');
  iconColorsOne.classList.remove('liRed');
  iconColorsTwo.classList.remove('liRed');
  iconColorsThree.classList.remove('liRed');
}

function getDataLs() {
  if (infoData !== null) {
    data.palette = infoData.palette;
    if (infoData.palette == 1) {
      handleClickColorOne();
      colorOne.checked = true;
    } else if (infoData.palette == 2) {
      handleClickColorTwo();
      colorTwo.checked = true;
    } else {
      handleClickColorThree();
      colorThree.checked = true;
    }
    data.name = infoData.name;
    data.job = infoData.job;
    data.phone = infoData.phone;
    data.email = infoData.email;
    data.linkedin = infoData.linkedin;
    data.github = infoData.github;
    data.photo = infoData.photo;
    inputName.value = data.name;
    inputJob.value = data.job;
    inputPhone.value = data.phone;
    inputEmail.value = data.email;
    inputLinkedin.value = data.linkedin;
    inputGithub.value = data.github;
    previewName.innerHTML = infoData.name;
    previewJob.innerHTML = infoData.job;

    profileImage.style.backgroundImage = `url(${infoData.photo})`;
    profilePreview.style.backgroundImage = `url(${infoData.photo})`;
    updatePreview();
  }
}
getDataLs();

//eventos

designTitle.addEventListener('click', handleClickDesingTitle);
refillTitle.addEventListener('click', handleClickRefillTitle);
shareTitle.addEventListener('click', handleClickShareTitle);
createCard.addEventListener('click', handleClickCreateCard);
resetButton.addEventListener('click', handleResetInput);
colorOne.addEventListener('click', handleClickColorOne);
colorTwo.addEventListener('click', handleClickColorTwo);
colorThree.addEventListener('click', handleClickColorThree);
form.addEventListener('input', handleInputForm);
