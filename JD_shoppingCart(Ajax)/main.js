$(function(){

    var shoppingCart = $("#shoppingCart").html();
    var json = {
        code:200,
        data:{
            list:[
                {
                    id:"001",
                    title:"知吾煮汤锅 米家定制",
                    price:99,
                    num:1,
                    image:"images/img1.jpg",
                    limit:10
                },
                {
                    id:"002",
                    title:"知吾煮不锈钢砂锅 银白色",
                    price:349,
                    num:1,
                    image:"images/img2.jpg",
                    limit:10
                },
                {
                    id:"003",
                    title:"米家电磁炉",
                    price:299,
                    num:1,
                    image:"images/img3.jpg",
                    limit:10
                }
            ],
            sum:0
        }
    };
    // render()重新渲染页面
    var html = ejs.render(shoppingCart,{data: json.data});
    document.body.innerHTML = html;

    // 复选框是否会出现√
    $(".check_box input").change(function(){
        if($(this).prop("checked")){ // 选中复选框为true，没选中为false
            $(this).prev().addClass("checked").children().show();//匹配
        }else{
            $(this).prev().removeClass("checked").children().hide();
        }
    });
    // 全选框
    $("#check_all").change(function(){
        if($(this).prop("checked")){
            $(".check_box input").attr("checked","checked");
            $(".check_box input").prev().addClass("checked").children().show();
        }else{
            $(".check_box input").attr("checked",false);
            $(".check_box input").prev().removeClass("checked").children().hide();
        }
        resetsum_price();
    });
    // 单个商品前的复选框的勾选以及当所有复选框都被勾选时，自动将全选前的复选框勾选
    $(".check_single input:checkbox").change(function(){
        // :checkbox匹配所有的复选框
        if($(".check_single input:checkbox").length == $(".check_single input:checkbox:checked").length){
        // :checked匹配所有选中的复选框
            $("#check_all").attr("checked","checked");
            $("#check_all").prev().addClass("checked").children().show();
        }else{
            $("#check_all").attr("checked",false);
            $("#check_all").prev().removeClass("checked").children().hide();
        }
        resetsum_price();
    });
    // 重新计算总价格
    function resetsum_price(){
        let sum = 0;
        $.each($(".shop_bd"),function(key,value){
            if($(value).find("label").is(".checked")){
                let num = $(value).find(".num_box").children(".num_value").val();
                // val()==>获取文本框中的值
                // $.each(a,b)==>a为需要例遍的数组或对象，b为每个成员/元素执行的回调函数
                let price = $(value).find("#little_sum").children().text();
                // text()获取元素的文本内容
                sum += num * price;
            }
        });
        $(".sum_price").children().text(sum);
    }
    // 重新计算小计
    function resetlittle_sum(obj){
        let shop_item = obj.parents(".shop_bd");
        let num = shop_item.find(".num_box").children(".num_value").val();
        let price = shop_item.find("#price").children().text();
        shop_item.find("#little_sum").children().text(num * price);
        // console.log(num);
        // console.log(price);
    }
    // 增加数量
    $(".num_up").click(function(){
        let index = $(this).index();
        let input = $(this).siblings(".num_value");
        let limit = parseInt($(this).siblings(".num_limit").val());
        if(parseInt(input.val())>=limit){
            input.val(limit);
            alert("商品超过购买的上限");
        }else{
            input.val(parseInt(input.val())+1);
        }
        resetlittle_sum(input);
        resetsum_price();
    });
    $(".num_down").click(function(){
        let input = $(this).siblings(".num_value");
        if(parseInt(input.val()) <= 1){
            input.val(1);
            alert("至少要购买一件商品");
        }else{
            input.val(parseInt(input.val())-1);
        }
        resetlittle_sum(input);
        resetsum_price();
    });

    $(".del").click(function(){
        $(this).parents(".shop_bd").remove();
        resetsum_price();
    });
});