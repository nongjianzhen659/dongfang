(function () {
    //判断是否登录了
    let welc = document.getElementsByClassName('welc')[0];
    let realo = document.getElementsByClassName('realo')[0];
    let tuichu = document.getElementsByClassName('tuichu')[0];
    let out = document.getElementById('out');
    let str = document.cookie;
    let arr = str.split('=');
    if (arr[1]) {
        welc.innerHTML = 'OCJ会员欢迎光临OCJ.COM.CN';
        realo.style.display = 'none';
        tuichu.style.display = 'block';
    }
    else {
        welc.innerHTML = '欢迎光临&nbsp;OCJ.COM.CN';
        realo.style.display = 'block';
        tuichu.style.display = 'none';
    }
    out.onclick = function () {
        removeCookie('username');
        console.log(666);
        location.reload('../html/ocj.html');
    }
})();