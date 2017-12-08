$(document).ready(function() {
$('a[href^="#"]').click(function(){
 
        var el = $(this).attr('href');
    if ($(el).length != 0) {

        $('html, body').animate({
            scrollTop: $(el).offset().top}, 2000);
    }
        return false; 
        
});
   
    });
//$(document).mousemove(function(){
//    $('.post').addClass("hidden").viewportChecker({
//        classToAdd: 'visible animated fadeIn',
//        offset: 100
//    });
//})