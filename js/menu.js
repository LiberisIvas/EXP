
  
      $('#musiq').click(function(){
       $('#suedo').toggleClass('fa-assistive-listening-systems fa-deaf');
       });
  
      $("#rotatis").click(function() {
        $(this).toggleClass("rotate");
      });
  
      var audio = document.getElementById('myAudio');
      var playing;
      $(document).ready(function(){
        audio.play();
      });
      function togglePlay() {
        if (playing) {
          audio.pause()
        } else {
          audio.play();
        }
      };
      audio.onplaying = function(){
        playing = true;
      };
      audio.onpause = function(){
        playing = false;
      }


      
// menu for email
$(function() {
  // contact form animations
  $('#contact').click(function() {
    $('#contactForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");
    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
  
});