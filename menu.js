$(".submenu").click(function(){
    $(this).children("ul").slideToggle();
}) 
$("ul").click(function(lp){
    lp.stopPropagation();
});