$(function(){
    
    var $lis = $("#header-nav>ul>li");
    $lis.mouseover(function(){
        $(this).find("ul").stop().slideDown("1500");
    })
    $lis.mouseout(function(){
        $(this).find("ul").stop().slideUp("fast");
    })

})


jQuery(".header-focus").slide({titCell:'.focus-circle ul',mainCell:".focus-uls ul",autoPlay:true, autoPage:true,delayTime:2000,interTime:5000});


$(".wrap-hd-1").slide({titCell:'.wrap-bottom-1 ul',mainCell:".wrap-body-1 ul",autoPlay:true, autoPage:true,delayTime:1000,interTime:4000});
			
jQuery(".wrap-hd-3").slide({mainCell:".company_news",autoPlay:true,effect:"topMarquee",vis:8,interTime:50,trigger:"click"});
		

jQuery(".container-wrap-2").slide({mainCell:".business_photo ul",effect:"leftMarquee",autoPlay:true,vis:4,interTime:30,trigger:"click"});
		