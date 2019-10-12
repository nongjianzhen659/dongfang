(function () {


    let login = document.getElementById("login");
    login.onclick = function () {
        window.open('login.html');
        console.log(666);
    }

    var goods = document.getElementsByClassName('goods')[0];
    let ipage = 1;//获取第一页
    let num = 20;//每页4条数据
    let paixu = '';
    function init() {//初始化

        ajax({
            type: 'post',
            url: '../api/listpage.php',
            data: {
                ipage,
                num,
                paixu,
            },
            success(str) {//成功的方法
                create(str)
            }
        });

        function create(str) {
            let arr = JSON.parse(str);
            let html = arr.list.map(function (item) {
                return `<div class="goodsItem" data-id="${item.gid}">
                                <div class="Max">
                                <span style="display:none">${item.color}</span>
                                    <img src="${item.url}" alt="" class="Maximg">
                                </div>
                                <div class="dian"></div>
                                <div class="goodstitle">
                                    ${item.title}
                                </div>
                                <div class="yuanjia" style="height: 20px;">
                                    <del>￥${item.oriprice}</del>
                                </div>
                                <div class="goodsprice">
                                    ￥<em class="sprice">${item.price}</em>
                                </div>
                                <div class="icon">
                                    <span class="feature">${item.feature}</span>
                                </div>
                                <div class="more_link">
                                    <span class="addtocart">加入购物车</span>
                                    <span class="zoom"></span>
                                    <span class="favorit"></span>
                                    <span class="pk"></span>
                                </div>
                            </div>`;
            }).join('');
            goods.innerHTML = html;

            function pages() {
                let page = document.getElementsByClassName('page')[0];
                let yeshu = document.getElementsByClassName('yeshu')[0];
                let sum = Math.ceil(arr.total / num);
                yeshu.innerHTML = sum;
                let aStr = '';
                for (let i = 0; i < sum; i++) {
                    aStr += `<span>${i + 1}</span>`;
                }
                page.innerHTML = aStr;
                page.children[ipage - 1].classList.add('active');

                page.onclick = ev => {
                    if (ev.target.tagName == 'SPAN') {
                        ipage = ev.target.innerHTML;
                        init();
                    }
                }
            }
            pages();

            let addtocart = document.getElementsByClassName('addtocart');//加入购物车
            var goodstitle = document.getElementsByClassName('goodstitle');//点击标题进入详情页
            var sussec = document.getElementsByClassName('sussec')[0];//点击标题进入详情页
            var Max = document.getElementsByClassName('Max');
            for (i = 0; i < Max.length; i++) {
                Max[i].index = i;//搞一个索引
                goodstitle[i].index = i;//搞一个索引
                addtocart[i].index = i;//搞一个索引
                Max[i].onclick = function () {
                    var gosid = arr.list[this.index].gid;//点击到的id
                    window.open('../html/Detailspage.html?' + gosid);//传参
                }
                goodstitle[i].onclick = function () {
                    var gosid = arr.list[this.index].gid;//点击到的id
                    window.open('../html/Detailspage.html?' + gosid);//传参
                }
                addtocart[i].onclick = function () {//加入购物车
                    var gosid = arr.list[this.index].gid;//拿到对应的id
                    var gostitle = arr.list[this.index].title;//拿到对应的标题
                    var gosproce = arr.list[this.index].price;//拿到对应的价格
                    var goscolor = arr.list[this.index].color;//拿到对应的颜色
                    var gosurl = arr.list[this.index].url;//拿到对应的图片地址
                    var godsfeature = arr.list[this.index].feature;//拿到对应的图片地址
                    var presprice = arr.list[this.index].price;//拿到对应的图片地址
                    console.log(gosid, gostitle, gosproce, goscolor, gosurl, presprice, godsfeature);
                    ajax({//发送需要添加得物品
                        type: 'get',
                        url: '../api/addcar.php',
                        data: {
                            gosid: gosid,
                            gostitle: gostitle,
                            gosproce: gosproce,
                            goscolor: goscolor,
                            gosurl: gosurl,
                            presprice: presprice,
                            godsfeature: godsfeature
                        },
                        success: str => {
                            console.log(str);
                        }
                    });
                    sussec.style.display = 'block';//添加成功弹出
                    let closesus = document.getElementsByClassName('closesus')[0];
                    let Stotal = document.getElementsByClassName('Stotal')[0];
                    let sussecBReturn = document.getElementsByClassName('sussecBReturn')[0];
                    let Settlement = document.getElementsByClassName('Settlement')[0];
                    Stotal.innerHTML = gosproce;
                    closesus.onclick = function () {
                        sussec.style.display = 'none';
                    }
                    sussecBReturn.onclick = function () {
                        sussec.style.display = 'none';
                    }
                    Settlement.onclick = function () {
                        window.open('../html/shoppingcar.html');
                        // window.close('listpage.html');
                        sussec.style.display = 'none';
                    }
                }
            }
        }
    }
    init();

})();