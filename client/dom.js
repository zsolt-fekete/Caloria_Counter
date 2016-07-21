'use strict';
const addButton = document.querySelector('.add_button');
const deleteButton = document.querySelector('.delete_button');
const filterButton = document.querySelector('.filter_button');
const showAllButton = document.querySelector('.show_button');
const inputtext = document.querySelector('.text_input');
const inputcal = document.querySelector('.calories_input');
const inputdate = document.querySelector('.date_input');
var deleteLine = document.querySelector('ul');

addButton.addEventListener('click', controller.addNewElement);
deleteButton.addEventListener('click', controller.deleteElement);
filterButton.addEventListener('click', controller.getbyfilter);
showAllButton.addEventListener('click', controller.showAll);
var lastId;

const domMovements = (function(){
  deleteLine.addEventListener('click', findRow);
  function findRow(event) {
    if ((typeof((event.target).parentNode.dataset.id)) !== 'undefined') {
      lastId = (event.target).parentNode.dataset.id
    } else {
      lastId = (event.target).dataset.id
    }
    display.selectMeal(lastId)
    return lastId
  }

  function getInputData() {
    console.log((inputdate.value));
    let data = {
      name: inputtext.value,
      calories: inputcal.value,
      date: inputdate.value,
    };
    return data;
  }

  return {
    findRow,
    getInputData,
  };
}());
