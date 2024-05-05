$(document).ready(function(){
    $('#bntBurger').on('click', function(event){
        event.preventDefault();
        $('.main-navigation').toggle('slow');
    });
});