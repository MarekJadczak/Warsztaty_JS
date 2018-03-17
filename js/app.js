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
    
     buttons[0].addEventListener('click', function() {
      var textArea = this.previousElementSibling;
      textArea.style.display = 'block';
      this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
    });
        
    
    
    // tutaj będziemy umieszczać kod ze wszystkich zadań
});


document.addEventListener('DOMContentLoaded', function() {

});

