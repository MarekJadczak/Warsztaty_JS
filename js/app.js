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
      console.log('działa'); // To powinno pojawić się w konsoli po kliknięciu w pierwszy przycisk
    });
    
    // tutaj będziemy umieszczać kod ze wszystkich zadań
});


document.addEventListener('DOMContentLoaded', function() {

});

