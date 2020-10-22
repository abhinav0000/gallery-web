$(".p3").on("mouseover",function(){
    $(".p3").animate({opacity:1});
});

$(".p1").on("mouseover",function(){
    setTimeout(function(){$(".p1").animate({opacity:1});  },100);
    $(".p1").animate({opacity:0.2});
});

