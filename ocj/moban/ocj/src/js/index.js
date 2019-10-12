
function loboimg(obj) {

    this.lobotu = {

    }

    Object.assign(this.lobotu, obj);
    this.lobo = document.getElementById(this.lobotu.ele);
    this.prvebtn = this.lobo.getElementsByClassName('prve')[0];
    this.nextbtn = this.lobo.getElementsByClassName('next')[0];
    this.lobos = this.lobo.querySelectorAll('#loboimg li');
    this.ydbtn = this.lobo.getElementsByClassName('yd')[0];
    this.timer = null;
    this.now = -1;//正在播放的li的下标
    this.zIndex = 2;
    this.init();//初始化
}

loboimg.prototype.init = function () {//渲染节点
    let html = '';
    for (i = 0; i < this.lobos.length; i++) {//渲染
        html += `<span>${i + 1}</span>`;//创建span节点
    }
    this.ydbtn.innerHTML = html;
    this.timer = setInterval(function () {
        this.next();
    }.bind(this), 3000)
    this.nextbtn.onclick = () => {//点击下一张
        this.next();
        console.log(this.now);
    }
    this.prvebtn.onclick = () => {//点击下一张
        this.prev();
    }
    this.Movein();//移入
    this.Moveout();//移出
    this.jiaodian();//焦点跟随
}
loboimg.prototype.prev = function () {//上一张
    this.now--;
    this.Carousel();
}
loboimg.prototype.next = function () {//下一张
    this.now++;
    this.Carousel();
}
loboimg.prototype.Carousel = function () {//图片轮播
    if (this.now > this.lobos.length - 1) {//now到了最后一张回到第一张
        this.now = 0;
    } else if (this.now < 0) {
        this.now = this.lobos.length - 1;
    }

    if (this.zIndex > this.lobos.length) {//层级到了临界点就归零
        this.zIndex = 1;
        for (let ele of this.lobos) {
            ele.style.zIndex = 0;
        }
    }
    //大图的轮播 z-index  
    this.lobos[this.now].style.zIndex = this.zIndex++;
    this.lobos[this.now].style.opacity = 0;//像手风琴效果：高度变化
    startMove(this.lobos[this.now], { 'opacity': 100 });
    this.Highlight();
}
loboimg.prototype.Highlight = function () {//焦点
    this.sbtn = this.lobo.getElementsByTagName('span');
    this.sbtn[0].classList.add('active');//第一个高亮
    for (let ele of this.sbtn) {
        ele.classList.remove('active');
    }
    let index = this.now;//焦点
    this.sbtn[index].classList.add('active');
}
loboimg.prototype.Movein = function () {//移入
    this.lobo.onmouseover = () => {//移入
        startMove(this.prvebtn, { 'opacity': 100 });
        startMove(this.nextbtn, { 'opacity': 100 });
        clearInterval(this.timer);
    };
}
loboimg.prototype.Moveout = function () {//移入
    this.lobo.onmouseout = () => {
        startMove(this.prvebtn, { 'opacity': 0 });
        startMove(this.nextbtn, { 'opacity': 0 });
        clearInterval(this.timer);
        this.timer = setInterval(function () {
            this.next();
        }.bind(this), 3000);
    }
};
loboimg.prototype.jiaodian = function () {//焦点跟随
    this.ydbtn.onclick = ev => {
        if (ev.target.tagName == 'SPAN') {
            this.now = ev.target.innerHTML - 1;
            this.Carousel();
        }
    }
}
let IconList = document.getElementsByClassName('IconList')[0];
let huiyuanList = IconList.getElementsByClassName('huiyuanList');
let Vipimg = IconList.getElementsByTagName('img');

for (i = 0; i < huiyuanList.length; i++) {
    huiyuanList[i].index = i;
    huiyuanList[i].onmousemove = function () {
        startMove(Vipimg[this.index], { 'top': -15 });
    }
    huiyuanList[i].onmouseout = function () {
        startMove(Vipimg[this.index], { 'top': 0 });
    }
}

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