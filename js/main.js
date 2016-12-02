$(document).ready(function() {
  $('.audio').hide();
  });

$('#records').on('mouseenter', '#image_record', function() {
$('#thriller').play();
});
$('#records').on('mouseleave', '#image_record', function() {
	$('#thriller').pause();
});

$(".sections").css( {'height': (  $(window).height() )
});

$(".sections").hide();

$("#image_record").click(function(){
  $("article").hide();
  $("#sec1").slideToggle();
});
$("#tape_image").click(function(){
  $("article").hide();
  $("#sec2").slideToggle();
});

$("#cd_image").click(function(){
  $("article").hide();
  $("#sec3").slideToggle();
});

$("#soundwave_image").click(function(){
  $("article").hide();
  $("#sec4").slideToggle();
});


$(".sections").click(function(){
  $(".sections").hide();
  $("article").show();
});

var soundwave =
"images/soundwave_image.png";
var motion =
"images/soundwave_final.gif";

$('#soundwaves').on('mouseenter mouseleave', function(){
  if ( $('#soundwaves img').attr('src') == soundwave ) {
    $('#soundwaves img').attr('src', motion);
  } else {
    $('#soundwaves img').attr('src', soundwave);
  }
});

var tape =
"images/tape_image.png";
var inner = "images/tape_image.gif";

$('#tapes').on('mouseenter mouseleave', function(){
  if ( $('#tapes img').attr('src') == tape ) {
    $('#tapes img').attr('src', inner);
  } else {
    $('#tapes img').attr('src', tape);
  }
});
