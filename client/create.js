'use strict';

const create = (function(){

  function createNewRow(li, id) {
    const ul = document.querySelector('ul');
    ul.appendChild(createLi(li, ul, id));
  }

  function createRow(li) {
    const ul = document.querySelector('ul');
    ul.appendChild(createLi(li,ul,null));
  }

  function createLi(li,ul,id) {
    let row = document.createElement('li');
    if (id === null){
      row.dataset.id = li.id;
    } else  {
      row.dataset.id = id;
    }
    row.dataset.name = li.name;
    row.dataset.calories = li.calories;
    let date =li.date.substring(0,10)+" "+li.date.substring(11,16)
    row.dataset.date = date;
    row.innerHTML =
    `<span class="name_column">${li.name}</span>
     <span class="calories_column">${li.calories}</span>
     <span class="date_column">${date}</span>`
    return row
  }

  function createNewUl(main) {
    let newul = document.createElement('ul');
    newul.classList.add('meals');
    main.appendChild(newul);
    var deleteLine = document.querySelector('ul');
    deleteLine.addEventListener('click', domMovements.findRow);
  }

  function createSum(sum) {
    var h2 = document.querySelector('.sum');
    h2.innerHTML = sum;
  }

  return {
    createNewRow,
    createRow,
    createNewUl,
    createSum,
  };
}());
