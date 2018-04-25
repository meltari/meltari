$(document).ready(function() {
// all your jQuery code goes in here!
$('.work').click(function(){
  console.log("hello");
  $('#workpage').show();
  $('#home').fadeOut(600);
  $('#back').fadeIn(600);

});

$('.art').click(function(){
  console.log("hello");
  $('#artpage').show();
  $('#home').fadeOut(600);
  $('#back').fadeIn(600);

});

$('#back').click(function(){
  $('#home').show();
  $('#back').fadeOut(600);
  $('#workpage').fadeOut(600);
  $("#artpage").fadeOut(600);
  $("#travelpage").fadeOut(600);
})

$('#pic').hover(function(){
  $('#pic-info').toggle();
  $('#pic-text').toggle();
})
});
