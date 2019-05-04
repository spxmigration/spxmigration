// Close nav bar on click
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

var nav = $("nav");



var home_position = $("#home").position().top;
var who_we_are = $("#who_are_we").position().top;
var about_us = $("#about_us").position().top;
var experience = $("#experience").position().top;

$(window).scroll(function(){
    var scrollPosition = document.documentElement.scrollTop;


    if(scrollPosition == 0){
      nav.css("display", "none") 
    } 
    if(scrollPosition > 0){
        nav.css("display", "inline-flex");
        nav.css("background", "white")
      } 
	if(scrollPosition => who_we_are && scrollPosition < about_us){
       nav.css("background", "#f8f9fa")
    }
    if(scrollPosition > about_us - 20){
        nav.css("background", "white")
    } 
    if(scrollPosition > experience - 20){
        nav.css("background", "#f8f9fa")
    } 
});
