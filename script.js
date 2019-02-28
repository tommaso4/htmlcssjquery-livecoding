$(".ring h1").hide();

$(".ring").hover(function(){
  $(".ring h1").show();
  $(".ring").css("border-radius" , "0");
},
function(){
  $(".ring h1").hide();
  $(".ring").css("border-radius" , "100%");
});
