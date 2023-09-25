"use strict";const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const o=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(o)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`}fileField.addEventListener("change",getImage);const designTitle=document.querySelector(".js-designTitle"),designContainer=document.querySelector(".js-designContainer"),refillContainer=document.querySelector(".js-refillContainer"),shareContainer=document.querySelector(".js-shareContainer"),refillTitle=document.querySelector(".js-refillTitle"),shareTitle=document.querySelector(".js-shareTitle"),createCard=document.querySelector(".js-create-card"),twitterCard=document.querySelector(".js-twitter-card"),resetButton=document.querySelector(".js-reset-button"),previewName=document.querySelector(".js-preview-name"),previewJob=document.querySelector(".js-preview-job"),previewPhone=document.querySelector(".js-preview-phone"),previewEmail=document.querySelector(".js-preview-email"),previewLinkedin=document.querySelector(".js-preview-linkedin"),previewGitHub=document.querySelector(".js-preview-github"),inputName=document.querySelector(".js-input-nameCompleted"),inputJob=document.querySelector(".js-input-job"),inputEmail=document.querySelector(".js-input-email"),inputPhone=document.querySelector(".js-input-phone"),inputLinkedin=document.querySelector(".js-input-linkedin"),inputGithub=document.querySelector(".js-input-github"),colorOne=document.querySelector(".js-color-1"),colorTwo=document.querySelector(".js-color-2"),colorThree=document.querySelector(".js-color-3"),borderContainer=document.querySelector(".js-container"),iconColors=document.querySelector(".js-icons"),iconColorsOne=document.querySelector(".js-icons-1"),iconColorsTwo=document.querySelector(".js-icons-2"),iconColorsThree=document.querySelector(".js-icons-3"),form=document.querySelector(".js-form");function showDesign(){designContainer.classList.remove("collapsed")}function collapRefill(){refillContainer.classList.add("collapsed")}function collapShare(){shareContainer.classList.add("collapsed")}function showRefill(){refillContainer.classList.remove("collapsed")}function collapDesign(){designContainer.classList.add("collapsed")}function showShare(){shareContainer.classList.remove("collapsed")}function showCreateCard(){twitterCard.classList.remove("hidden"),createCard.classList.add("pulsed-grey")}function handleClickDesingTitle(){showDesign(),collapRefill(),collapShare()}function handleClickRefillTitle(){showRefill(),collapDesign(),collapShare()}function handleClickShareTitle(){showShare(),collapDesign(),collapRefill()}function handleClickCreateCard(e){e.preventDefault(),showCreateCard(),createCard.classList.add("pulsed-grey")}const data={colors:1,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};function handleResetInput(e){e.preventDefault(e),inputName.value="",inputJob.value="",inputEmail.value="",previewEmail.href="#",inputPhone.value="",previewPhone.href="#",inputLinkedin.value="",previewLinkedin.href="#",inputGithub.value="",previewGitHub.href="#",previewName.innerHTML="Nombre Apellido",previewJob.innerHTML="Front-end developer",colorOne.checked=!0,handleClickColorOne()}function updatePreview(){previewName.innerHTML=data.name.replace("<",""),previewJob.innerHTML=data.job.replace("<",""),previewPhone.href="tel:"+data.phone,previewEmail.href="mailto:"+data.email,previewLinkedin.href="https://"+data.linkedin,previewGitHub.href="https://github.com/"+data.github.slice(1),""===data.name&&(previewName.innerHTML="Nombre Apellido"),""===data.job&&(previewJob.innerHTML="Front-end developer")}function handleInputForm(e){data[e.target.name]=e.target.value,updatePreview(),console.log(data)}function handleClickColorOne(){colorOne.getAttribute("checked"),previewName.classList.remove("nameRed"),previewName.classList.remove("nameBlue"),borderContainer.classList.remove("containerRed"),borderContainer.classList.remove("containerYellow"),borderContainer.classList.add("containerBlue"),iconColors.classList.remove("liRed"),iconColorsOne.classList.remove("liRed"),iconColorsTwo.classList.remove("liRed"),iconColorsThree.classList.remove("liRed"),iconColors.classList.remove("liGrey"),iconColorsOne.classList.remove("liGrey"),iconColorsTwo.classList.remove("liGrey"),iconColorsThree.classList.remove("liGrey"),iconColors.classList.add("liBlue"),iconColorsOne.classList.add("liBlue"),iconColorsTwo.classList.add("liBlue"),iconColorsThree.classList.add("liBlue")}function handleClickColorTwo(){previewName.classList.add("nameRed"),previewName.classList.remove("nameBlue"),borderContainer.classList.add("containerRed"),borderContainer.classList.remove("containerBlue"),borderContainer.classList.remove("containerYellow"),iconColors.classList.add("liRed"),iconColorsOne.classList.add("liRed"),iconColorsTwo.classList.add("liRed"),iconColorsThree.classList.add("liRed"),iconColors.classList.remove("liBlue"),iconColorsOne.classList.remove("liBlue"),iconColorsTwo.classList.remove("liBlue"),iconColorsThree.classList.remove("liBlue"),iconColors.classList.remove("liGrey"),iconColorsOne.classList.remove("liGrey"),iconColorsTwo.classList.remove("liGrey"),iconColorsThree.classList.remove("liGrey")}function handleClickColorThree(){previewName.classList.add("nameBlue"),borderContainer.classList.remove("containerRed"),borderContainer.classList.remove("containerBlue"),borderContainer.classList.add("containerYellow"),iconColors.classList.add("liGrey"),iconColorsOne.classList.add("liGrey"),iconColorsTwo.classList.add("liGrey"),iconColorsThree.classList.add("liGrey"),iconColors.classList.remove("liBlue"),iconColorsOne.classList.remove("liBlue"),iconColorsTwo.classList.remove("liBlue"),iconColorsThree.classList.remove("liBlue"),iconColors.classList.remove("liRed"),iconColorsOne.classList.remove("liRed"),iconColorsTwo.classList.remove("liRed"),iconColorsThree.classList.remove("liRed")}designTitle.addEventListener("click",handleClickDesingTitle),refillTitle.addEventListener("click",handleClickRefillTitle),shareTitle.addEventListener("click",handleClickShareTitle),createCard.addEventListener("click",handleClickCreateCard),resetButton.addEventListener("click",handleResetInput),colorOne.addEventListener("click",handleClickColorOne),colorTwo.addEventListener("click",handleClickColorTwo),colorThree.addEventListener("click",handleClickColorThree),form.addEventListener("input",handleInputForm);