jQuery("document").ready(function($){
    
    var nav = $('#nav');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 210) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
 
});





// $(function(){
// var nav = $('#nav')
// .css('display','none')
// .addClass("f-nav");
// $(window).scroll(function () {
// if ($(this).scrollTop() > 210) {
// //nav.addClass("f-nav");
// nav.fadeIn();
// } else {
// //nav.removeClass("f-nav");
// nav.fadeOut();
// }

// });
// });

	var v = jQuery.noConflict();

v("document").ready(function(){

v(window).scroll(function () {

if (v(this).scrollTop() > 210) {

v("#nav").fadeIn(3000);

v('#nav').addClass("f-nav");

} else {

v('#nav').removeClass("f-nav");

}

});

});