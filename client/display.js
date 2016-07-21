'use strict';

const display = (function(){

  function filter(response){
    deleteAll()
    showAll(JSON.parse(response));
  }

  function deleteAll(){
    let oldul = document.querySelector('ul');
    let main = document.querySelector('main');
    main.removeChild(oldul);
    create.createNewUl(main);
  }

  function showAll(response){
    response.forEach(function (e) {create.createRow(e)});
    controller.sum()
  }

  function showNew(response,inputdata){
    create.createNewRow(inputdata,(JSON.parse(response).id));
    controller.sum();
  }

  function deleteMeal(id){
    let li = document.querySelector('li[data-id="'+id+'"]');
    let ul = document.querySelector('ul');
    ul.removeChild(li);
    controller.sum()
  }

  function confirmWindow(){
    const r = confirm("Are you sure you want to delete?")
    if (r == true) {
        return true;
    } else {
        return false;
    }
  }

  function selectMeal(id){
    let li = document.querySelector('li[data-id="'+id+'"]');
    let selected = document.querySelector('.selected');
    if (selected !== null){
      selected.classList.remove('selected')
    }
    li.classList.add('selected')
  }

  function hidden(){
    let addScreen = document.querySelector('.add_cointainer');
    addScreen.classList.toggle('hidden')
  }
  return {
    showAll,
    showNew,
    deleteMeal,
    selectMeal,
    filter,
    deleteAll,
    confirmWindow,
    hidden,
  };
}());
