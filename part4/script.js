$(".animate").on("click", function () {
    $(".square").animate({width:"200",height:"200",left:"100px"})
});


$(".animate2").on("click",function(){
    $(".square2").animate({left:"200px"})
    $(".square2").animate({top:"100px"})
    $(".square2").animate({width:"200px", height:"200px"})
    $(".square2").animate({width:"100px", height:"100px"})
    $(".square2").animate({top:"0"},600)
    $(".square2").animate({left:"0"},600)
})

$(".animate3").on("click",function(){
    $(".square3").animate({opacity:"0.2",width:"200px", left:"200px"},500)
    $(".square3").animate({opacity:"1",width:"-=100px", left:"-=200px"},500)
    $(".square3").animate({opacity:"0.2",width:"200px", top:"200px"},500)
    $(".square3").animate({opacity:"1",width:"-=100px", top:"-=200px"},500)
    $(".square3").animate({opacity:"0.2",width:"200px", left:"200px"},500)
    $(".square3").animate({opacity:"1",width:"-=100px", left:"-=200px"},500)
    $(".square3").animate({opacity:"0.2",width:"200px", top:"200px"},500)
    $(".square3").animate({opacity:"1",width:"-=100px",top:"-=200px"},500)
})