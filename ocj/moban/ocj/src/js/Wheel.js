
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
