(function () {

    let logbtn = document.getElementsByClassName('submit')[0];
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    let logo = document.getElementsByClassName('logo')[0];
    logo.onclick = function () {
        window.close();
        window.open('../index.html');
    }
    //购物车跳转
    let shoppingcar = document.getElementById('shoppingcar');
    shoppingcar.onclick = function () {
        window.open('../html/shoppingcar.html');
        window.close();
    }

    function Login() {//登录
        logbtn.onclick = () => {//点击登录后
            name = username.value.trim();
            pasw = password.value.trim();
            ajax({
                type: 'post',
                url: '../api/login.php',
                data: {
                    name,
                    pasw,
                },
                success: str => {//成功的回调
                    console.log(str);
                    if (str == '0') {
                        window.open('../index.html');
                        window.close();
                        // document.cookie = 'name=' + name;//存值到cookie中
                        setcookie('username', name, 5);

                    } else {
                        alert('登录失败');
                    }
                }
            });
        }
    }

    //验证码
    let vercode = document.getElementById('vercode');
    let valcode = document.getElementsByClassName('valcode')[0];
    let corr = document.getElementById('corr');
    let confi = document.getElementById('confi');


    function code() {    //生成验证码
        let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';//验证码
        var html = '';//生成空字符串
        for (var i = 0; i < 4; i++) {
            var index = parseInt(Math.random() * str.length);
            var num = str[index];
            html += num;//将随机的到的数存到html里
        }
        return html;
    }
    vercode.innerHTML = code();//进入页面刷新时调用code()

    function fontcolor() {//生成颜色
        var str = '0123456789abcdefABCDEF';
        var num = '';//生成空字符串
        for (var i = 1; i <= 6; i++) {
            var index = parseInt(Math.random() * str.length); //随机生成str长度之内的数
            var snum = str[index]; //取下标的对应的数
            num += snum;//将得到的数存到num里拼接
            var fc = '#' + num;
        }
        vercode.style.color = fc;
    } fontcolor();

    valcode.onclick = () => {//点击看不清时更换验证码
        code();
        vercode.innerHTML = code();
        fontcolor();
    }

    confi.onkeyup = () => {
        let confs = confi.value;
        let confis = vercode.innerHTML.toLocaleLowerCase();
        if (confs) {
            if (confs == confis) {
                corr.innerHTML = '正确';
                corr.style.color = '#58bc58';
                Login();
            }
            else {
                corr.innerHTML = '错误';
                corr.style.color = '#f40';
            }
        }
        else {
            corr.innerHTML = '请输入验证码';
            corr.style.color = '#f40';
        }
    }


})();