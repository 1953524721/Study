/*
* 轮播图
* @param 张牧之
* @param 张牧之
* */
function init() {
    setInterval("changeImg()",1000)
}
var i=1;
function changeImg() {
    data =  i++;
    if (data>3)
    {
        i=1
    }
    console.log("轮播ID测试"+data);
    document.getElementById("lunbotu").src="Images/lunbotu/banner"+data+".jpg";
}