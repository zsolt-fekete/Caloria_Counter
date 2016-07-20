'use strict';

const AddButton = document.querySelector('.add_button');
AddButton.addEventListener('click', addNewElement);

function getInputData() {
  let inputtext = document.querySelector('.text_input');
  let inputcal = document.querySelector('.calories_input');
  let inputdate = document.querySelector('.date_input');
  let data = {
    name: inputtext.value,
    calories: inputcal.value,
    date: inputdate.value,
  };
  return data;
}

function addNewElement(){
  request.addElementDatabase(JSON.stringify(getInputData()),function(response) {
    display.displayNew(getInputData());
  })
}

function get() {
  request.getAllfromDatabase(function(response) {
    display.displayAll(JSON.parse(response));
  })
}

get()
