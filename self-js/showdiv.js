$(function(){
 $('#mask-div').height($(window).height()).width($(window).width());
 
 $('.wechat').click(function(){
  $('#mask-div').show();
  showDiv();
 }) 
})

function showDiv(){
 
 var testContTop=($(window).height()-$('#container-div').height())/2;
 var testContWidth=($(window).width()-$('#container-div').width())/2;
 $('#container-div').css({
  "display": inline,
  "top":testContTop,
  "left":testContWidth
 });
}