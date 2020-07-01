var glower = $('#mainContainer');

glower.toggleClass('active');

window.setInterval(function() {  
    glower.toggleClass('active');
}, 5000);