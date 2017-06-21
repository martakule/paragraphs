$(function() {

//SLIDE NAVIGATION AND DATA STORAGE
  //Create an array of ALL slides
  var slides = $(".slide");
  var buttons = $("#navButtons");
  updateView();

  $("#next").on('click',function(){
    var active = $(".slide.show");
    active.removeClass('show').next('.slide').addClass('show');
    $('html,body').scrollTop(0);
    updateView();
  });
  
  $("#back").on('click',function(){
    $(".slide.show").removeClass('show').prev('.slide').addClass('show');
    $('html,body').scrollTop(0);
    updateView();
  });

  function updateView(){
    $(buttons).removeClass();
    if($(slides[0]).hasClass('show')) $(buttons).addClass('first');
    if($(slides[slides.length-1]).hasClass('show')) $(buttons).addClass('last');
  }

});
