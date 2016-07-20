'use strict';

const display = (function(){

  function displayAll(response){
    response.forEach(function (e) {createRow(e)});
  }

  function displayNew(response,inputdata){
    createNewRow(inputdata,(JSON.parse(response).id));
  }

  function createNewRow(row,id) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.dataset.id = id;
    li.dataset.name = row.name;
    li.dataset.calories = row.calories;
    let date =row.date.substring(0,10)+" "+row.date.substring(11,19)
    li.dataset.date = date;
    li.innerHTML =
    `<span class="name_column">${row.name}</span>
     <span class="calories_column">${row.calories}</span>
     <span class="date_column">${date}</span>`
    ul.appendChild(li);
  }

  function createRow(row) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.dataset.id = row.id;
    li.dataset.name = row.name;
    li.dataset.calories = row.calories;
    let date =row.date.substring(0,10)+" "+row.date.substring(11,19)
    li.dataset.date = date;
    li.innerHTML =
    `<span class="name_column">${row.name}</span>
     <span class="calories_column">${row.calories}</span>
     <span class="date_column">${date}</span>`
    ul.appendChild(li);
  }

  function deleteDisplay(id){
    let li = document.querySelector('li[data-id="'+id+'"]');
    let ul = document.querySelector('ul');
    ul.removeChild(li);
  }

  function displaySelect(id){
    let li = document.querySelector('li[data-id="'+id+'"]');
    var selected = document.querySelector('.selected');
    if (selected !== null){
      selected.classList.remove('selected')
    }
    li.classList.add('selected')
  }
  return {
    displayAll,
    displayNew,
    deleteDisplay,
    displaySelect,
  };
}());
