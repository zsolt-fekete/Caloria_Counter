'use strict';

const addButton = document.querySelector('.add_button');
const deleteButton = document.querySelector('.delete_button');
const inputtext = document.querySelector('.text_input');
const inputcal = document.querySelector('.calories_input');
const inputdate = document.querySelector('.date_input');
const deleteLine = document.querySelector('ul');

addButton.addEventListener('click', addNewElement);
deleteButton.addEventListener('click', deleteElement);
deleteLine.addEventListener('click', findRow);
var lastId;

function getInputData() {
  let data = {
    name: inputtext.value,
    calories: inputcal.value,
    date: inputdate.value,
  };
  return data;
}

function addNewElement(){
  if (inputtext.value !=='' && inputcal.value !==''){
    request.addElementDatabase(JSON.stringify(getInputData()),function(response) {
      display.displayNew(response,getInputData());
    }
  )}
}

function get() {
  request.getAllfromDatabase(function(response) {
    display.displayAll(JSON.parse(response));
  })
}

function findRow(event) {
  if ((typeof((event.target).parentNode.dataset.id)) !== 'undefined'){
    lastId = (event.target).parentNode.dataset.id
  } else {
    lastId = (event.target).dataset.id
  }
  display.displaySelect(lastId)
  return lastId
}

function deleteElement(event) {
  request.deleteElement((lastId),function(response) {
    console.log(response);
    if (response === '{"status":"ok"}'){
      display.deleteDisplay(lastId)
    };
  })
}





get()
