'use strict';

const display = (function(){

  function displayAll(response){
    response.forEach(function (e) {createRow(e)});
  }

  function displayNew(inputdata){
    createRow(inputdata);
  }

  function createRow(row) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.dataset.id = row.id;
    li.dataset.name = row.name;
    li.dataset.calories = row.calories;
    let date =row.date.substring(0,10)+" "+row.date.substring(11,19)
    li.dataset.date = date;
    let textContent =
    `<span class="name_column">${row.name}</span>
     <span class="calories_column">${row.calories}</span>
     <span class="date_column">${date}</span>`
    li.innerHTML = textContent;
    ul.appendChild(li);
  }

  return {
    displayAll,
    displayNew,
  };
}());
