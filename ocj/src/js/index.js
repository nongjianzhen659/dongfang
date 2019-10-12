

//会员特价
$(function () {
    $('.ShowNavtabBarButtonn').click(function () {
        $(this).attr('class', 'ShowNavtabBarButtonn hfroce').siblings().attr('class', 'ShowNavtabBarButtonn');
        $('.NavtabShowContentList').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
    });
});

//跳转列表页
let list = document.getElementsByClassName('listT')[0];
list.onclick = function () {
    window.open('html/listpage.html');
}

//登录跳转
let login = document.getElementById("login");
login.onclick = function () {
    window.open('html/login.html');
    console.log(666);
}

//注册跳转
let register = document.getElementById('register');
register.onclick = function () {
    window.open('html/register.html');
}
//购物车跳转
let shoppingcar = document.getElementById('shoppingcar');
shoppingcar.onclick = function () {
    window.open('html/shoppingcar.html');
    window.close();
}