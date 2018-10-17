$(function(){

    $(".con-tab>li").mouseenter(function(){
        var idx = $(this).index();
        $("#tab>div").eq(idx).show().siblings().hide();
        $(".con-tab>li>a").eq(idx).addClass("current").parent().siblings().children().removeClass();
    });
});