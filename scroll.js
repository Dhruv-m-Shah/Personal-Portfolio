$(document).ready(function(){
    var controller = new ScrollMagic.Controller();
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#projects01'

    })
    .setClassToggle('#projects01', 'fade-in')
    .addTo(controller);
});