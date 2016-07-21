'use strict';

const controller = (function(){

  function getAll() {
    request.getAllfromDatabase(function(response) {
      display.showAll(JSON.parse(response));
    })
  }

  function getbyfilter() {
    let filter = inputdate.value.substring(0,10);
    request.getFilterfromDatabase(filter,function(response) {
      display.filter(response);
    })
  }

  function showAll() {
    display.deleteAll()
    getAll();
  }

  function addNewElement(){
    display.hidden();
    if (inputtext.value !=='' && inputcal.value !=='' && inputdate.value !==''){
      request.addElementDatabase(JSON.stringify(domMovements.getInputData()),function(response) {
        display.showNew(response,domMovements.getInputData());
        }
    )}
  }

  function sum(){
    var allLi= document.querySelectorAll('li');
    var total = 0
    for (let i = 0; i < allLi.length; i++) {
    total +=parseInt(allLi[i].dataset.calories);
    }
    create.createSum(total)
  }

  function deleteElement(event) {
    if (lastId && display.confirmWindow()) {
      request.deleteElement((lastId),function(response) {
        if (response === '{"status":"ok"}'){
          display.deleteMeal(lastId)
        };
      })
    }
  }

  return {
    getAll,
    getbyfilter,
    showAll,
    addNewElement,
    deleteElement,
    sum,
  };
}());

display.hidden()
controller.getAll()
