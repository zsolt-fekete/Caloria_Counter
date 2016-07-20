'use strict';

const request = (function(){
  const host = "http://localhost:3000/meals/";

  function xhrRequest(method, url, data, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
      if (xhr.readyState === xhr.DONE) {
        callback(xhr.response);
      }
    };
    xhr.send(data);
  }

  function getAllfromDatabase(callback) {
    xhrRequest('GET', host, null, callback);
  }

  function addElementDatabase(inputdata, callback) {
    xhrRequest('POST', host, inputdata, callback);
  }

  return {
    getAllfromDatabase,
    addElementDatabase,
  };
}());
