// Close nav bar on click
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

var nav = $("nav");



var home_position = $("#home").position().top;
var who_we_are = $("#who_are_we").position().top;
var about_us = $("#about_us").position().top;
var experience = $("#experience").position().top;

$(document).ready(function(){
    $('body').scrollspy({target: ".navbar", offset: 50});   
  });

$(window).scroll(function(){
    var scrollPosition = document.documentElement.scrollTop;

    $('.navbar-collapse').collapse('hide');
  if(scrollPosition < who_we_are - 20 ){
    nav.css("background", "white");
 }
	if(scrollPosition > who_we_are - 20){
       nav.css("background", "#f8f9fa");
    }
    if(scrollPosition > about_us - 20){
        nav.css("background", "white");       
    } 
    if(scrollPosition > experience - 20){
        nav.css("background", "#f8f9fa");
    } 
});

$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});   
  
    // Add smooth scrolling on all links inside the navbar
    $("#nav a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });
  });