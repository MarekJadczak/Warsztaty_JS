'use strict';

document.addEventListener('DOMContentLoaded', function() {
    var showMenuDOM = document.querySelector('.for-dropdown');
    var menuDOM = document.querySelector('.dropdown');

    showMenuDOM.addEventListener('mouseover', function() {
        menuDOM.style.display = 'block'
    });
    
    showMenuDOM.addEventListener('mouseout', function() {
        menuDOM.style.display = 'none'
    });
    
    
    var buttons = document.querySelectorAll('.read-more');

  function showHide() {

    var textArea = this.previousElementSibling;
   
    if (textArea.style.display === 'none' || textArea.style.display === '') {
      textArea.style.display = 'block';
      this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
    } else {
      textArea.style.display = 'none';
      this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
    }
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showHide);
  }
    // buttons[0].addEventListener('click', function() {
      //var textArea = this.previousElementSibling;
      //if (textArea.style.display === 'none' || textArea.style.display === '') {
        //textArea.style.display = 'block';
        //this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      //} else {
        //textArea.style.display = 'none';
        //this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
    //  }
    //});
    
    // tutaj będziemy umieszczać kod ze wszystkich zadań
});


document.addEventListener('DOMContentLoaded', function() {

});

