//选项卡
let registnav = document.getElementById('regist_nv_nav_list');
let navbtn = registnav.getElementsByTagName('li');
let registuser = document.getElementsByClassName('regist_user');
for (i = 0; i < navbtn.length; i++) {
    navbtn[i].index = i;
    registuser[i].index = i;
    navbtn[0].style.background = '#F6F6F6';
    navbtn[0].style.color = '#676767';
    navbtn[i].onclick = function () {
        for (i = 0; i < navbtn.length; i++) {
            navbtn[i].style.background = '#239cdc';
            navbtn[i].style.color = '#fff';
            registuser[i].style.display = 'none';
        }
        navbtn[this.index].style.background = '#F6F6F6';
        navbtn[this.index].style.color = '#676767';
        registuser[this.index].style.display = 'block';
    }
}

let login = document.getElementsByClassName('login')[0];//已有账号跳转到登录界面
login.onclick = () => {
    window.open('../html/login.html');
}


//注册功能
let hock = document.getElementsByClassName('hock');
let phone = document.getElementById('phone');
let verficode = document.getElementById('verficode');
let photel = document.getElementById('photel');
let VerCode = document.getElementById('VerCode');
let pswin = document.getElementById('pswin');
let coonfip = document.getElementById('coonfip');
let password = document.getElementById('password');//密码
let confirmpsw = document.getElementById('confirmpsw');
let phos = document.getElementById('phos');//请输入手机号码
let psw = document.getElementById('psw');//请输入密码
let confi = document.getElementById('confi');//确认密码
let regibtn = document.getElementsByClassName('submit')[0];
//密码强度
let weak = document.getElementsByClassName('weak')[0];
let secondary = document.getElementsByClassName('secondary')[0];
let strong = document.getElementsByClassName('strong')[0];


phone.onkeyup = function () {//输入的手机号码不能超过11位数
    if (this.value.length >= 11) {
        phone.value = phone.value.substring(0, 11);//截取0-20的字符串放到输入框的值中
    }
}

phone.onclick = () => {//获取手机

    photel.style.border = '1px solid cornflowerblue';
    phone.onblur = () => {
        photel.style.border = '1px solid #ccc';
        let telphone = phone.value.trim();
        let type = 'tel';
        if (telphone) {
            phos.style.display = 'none';
            var str = `checkReg.${type}(telphone)`;//字符串
            console.log(str);
            var isok = eval(str);//eval() 把字符串转成js代码
            if (isok) {//判断输入的号码是否正确
                ajax({
                    type: 'post',
                    url: '../api/register.php',
                    data: {
                        telphone,
                        num: 1
                    },
                    success: str => {//成功的回调
                        console.log(str);
                        if (str != '0') {
                            phos.style.display = 'block';
                            phos.innerHTML = '账号已存在';
                        }
                    }
                });
            }
            else {
                phos.style.display = 'block';
                phos.innerHTML = '请输入正确的手机号';
            }
        }
        else {
            console.log('请输入手机号');
            phos.style.display = 'block';
        }

    }
}
let tips = document.getElementById('tips');
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
tips.innerHTML = code();//进入页面刷新时调用code()

function fontcolor() {//生成颜色
    var str = '0123456789abcdefABCDEF';
    var num = '';//生成空字符串
    for (var i = 1; i <= 6; i++) {
        var index = parseInt(Math.random() * str.length); //随机生成str长度之内的数
        var snum = str[index]; //取下标的对应的数
        num += snum;//将得到的数存到num里拼接
        var fc = '#' + num;
    }
    tips.style.color = fc;
} fontcolor();
tips.onclick = () => {//点击看不清时更换验证码
    code();
    tips.innerHTML = code();
    fontcolor();
}

let tipss = document.getElementById('tipss');

verficode.onclick = () => {//获取验证码
    tipss.style.display = 'block';
    let str = tips.innerHTML.toLocaleLowerCase();
    console.log(str);
    VerCode.style.border = '1px solid cornflowerblue';
    verficode.onblur = () => {
        VerCode.style.border = '1px solid #ccc';
    }
    verficode.onkeyup = () => {
        if (verficode.value == str) {
            tipss.innerHTML = '验证码正确';
            tipss.style.color = '#58bc58';
        }
        else {
            tipss.innerHTML = '验证码错误';
            tipss.style.color = '#f40';
        }
    }
}


password.onclick = () => {//获取密码
    pswin.style.border = '1px solid cornflowerblue';
    password.onblur = () => {
        pswin.style.border = '1px solid #ccc';
        let pass = password.value.trim();
        if (pass) {
            psw.style.display = 'none';
        }
        else {
            psw.style.display = 'block';
            startMove(weak, { 'width': 0 });
            startMove(secondary, { 'width': 0 });
            startMove(strong, { 'width': 0 });

        }
    }
    password.onkeyup = function () {//实时获取输入的长度
        let len = password.value;
        if (len.length == 6) {
            startMove(weak, { 'width': 51 });
        }
        else if (len.length == 8) {
            startMove(secondary, { 'width': 55 });
        }
        else if (len.length == 12) {
            startMove(strong, { 'width': 51 });
        }
    }
}
confirmpsw.onclick = () => {//获取确认密码
    coonfip.style.border = '1px solid cornflowerblue';
    confirmpsw.onblur = () => {
        coonfip.style.border = '1px solid #ccc';
        let conf = confirmpsw.value.trim();
        let psw = password.value.trim();
        if (psw == conf) {//如果密码一致
            confi.style.display = 'none';
        }
        else {
            confi.style.display = 'block';
        }
    }
}

regibtn.onclick = function () {//注册按钮,只传手机号和密码
    let telphone = phone.value.trim();
    let passw = password.value.trim();
    let num = '';
    if (telphone && passw) {
        ajax({
            type: 'post',
            url: '../api/register.php',
            data: {
                telphone,
                passw,
                num
            },
            success: str => {//成功的回调
                console.log(str);
                if (str != '1') {
                    console.log('注册成功');
                    window.open('../html/login.html');
                    window.close();
                } else {
                    alert('注册失败');
                }
            }
        });
    }
    else {
        alert('注册失败');
    }
}

