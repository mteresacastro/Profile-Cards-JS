'use strict';
//query
const designTitle = document.querySelector('.js-designTitle');
const designContainer = document.querySelector('.js-designContainer');
const refillContainer = document.querySelector('.js-refillContainer');
const shareContainer = document.querySelector('.js-shareContainer');





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




function handleClickDesingTitle (event){
    showDesign();
    collapRefill();
    collapShare();
    console.log('oleeee');

}


//eventos

designTitle.addEventListener ('click', handleClickDesingTitle);