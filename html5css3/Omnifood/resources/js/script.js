$(document).ready(function(){

  /* select 'h1' element and then use 'click' method
   so when we click h1 element, it select 'this' which is h1 element, and it changes the css style of hat element
   and in this case we make backgound-color makes it red */
  // $('h1').click(function() {
  //   $(this).css('background-color', '#ff0000');
  // })

  $('.js--section-features').waypoints(function(direction) {
     if (direction == 'down'){
        $('nav').addClass('sticky');
     } else {
        $('nav').removeClass('sticky');
     } {
      offset: '60px;' }
  });


  /*var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window') 
  }, {
    offset: '25%'
  })*/

});