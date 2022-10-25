/*
* 搜索框
* @param User 张牧之
* @param 张牧之
* */

$('.button1').click(function (){
    var data = $('.shou').val()
    var url = "https://www.baidu.com/s?ie=utf-8&wd="+data;
    if (data!='') {
        window.open(url,"_blank")
    }else {
        $('.shou').attr("placeholder","当前搜索为空")
    }
})