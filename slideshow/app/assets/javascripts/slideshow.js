// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

$(document).ready(function() {
  
    var currentSlide = 1;
    
    var numSlides = 1;
    
    // Get slide information

    var sendRequest = function(request) {
      request.open("get", "http://localhost:3000/slide/" + currentSlide); //this is sending to the right page
      request.send();
      request.addEventListener("load", singleSlide);
    };
    
  // Get slide information    
    
    var singleSlide = function(eventObject){
      var object = JSON.parse(this.response);
      document.getElementById("text").innerHTML = object.slide_text; 
    };

    // Load next slide when page is refreshed
  
    var req = new XMLHttpRequest();
    sendRequest(req);
    
  // Functions to get number of slides
    
    var getNumber = function(eventObject){
      numSlides = JSON.parse(this.response); //is the scope of this outside the function?
    };
    var sendNumRequest = function(request) {
      
      request.open("get", "http://localhost:3000/slide_num/"); //this is sending to the right page
      request.send();
      request.addEventListener("load", getNumber);
    };
    
 // Next button
    
    var next = document.getElementById("forwardButtonLink");
    var getNumSlides = new XMLHttpRequest();
    
    sendNumRequest(getNumSlides);
    
    next.addEventListener('click', function() {

      currentSlide++;
      
      if (currentSlide > numSlides){
        currentSlide = 1;
      };
      var request = new XMLHttpRequest();

      sendRequest(request);
    });

  // Back button
    
    var back = document.getElementById("backButtonLink");
    
    back.addEventListener('click', function() {
      currentSlide--;
  
      if (currentSlide < 1){  
        currentSlide = numSlides;
      };
      var request = new XMLHttpRequest();
      sendRequest(request);
     });

});