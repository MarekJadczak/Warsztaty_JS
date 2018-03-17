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
      if (textArea.style.display === 'none' || textArea.style.display === '') {

        // ten kod wykona się, gdy spełni się jeden z powyższych warunków
        textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      } else {

        // ten kod zadziała, gdy warunek podany w `if` nie będzie spełniony, czyli w przypadku
        // gdy `style.display` jest inny niż `none` oraz gdy nie jest pusty
        textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      }

    });
    
    
    // tutaj będziemy umieszczać kod ze wszystkich zadań
});


document.addEventListener('DOMContentLoaded', function() {

});

