$(function(){
    var isHiden = true;
    $(".inav").click(function(){
        if(isHiden){
            $(".page2 .ht").css("display","block");
        }else{
            $(".page2.ht").css("display","none");
        }
        isHiden =! isHiden;
    });
    $("#fullPage").fullpage({
        continuousVertical:true,
        anchors:["page1","page2","page3","page4","page5"],
        menu:"#menu",
        paddingTop:60
    });
});  