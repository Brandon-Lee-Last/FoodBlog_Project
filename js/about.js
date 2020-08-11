//This will fetch the edits from local storage and apply them.
$(document).ready(function(){
    $('*').css("font-family", (localStorage.getItem('font')));
    $('body').css("background-color", (localStorage.getItem('color')));
    $('*').css("text-shadow", localStorage.getItem('Shadow'));
})