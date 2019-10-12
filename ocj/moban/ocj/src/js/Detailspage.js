(function () {

    var wrap = document.getElementById('wrap');
    var main = wrap.getElementsByClassName('main')[0];//盒子1
    var biger = wrap.getElementsByClassName('biger')[0];//盒子2
    var smaller = wrap.getElementsByClassName('smaller')[0];//小图
    var fangda = wrap.getElementsByClassName('fangda')[0];//小图
    var attribute = document.getElementsByClassName('attribute')[0];//小图
    var GoodTitle = document.getElementsByClassName('GoodTitle')[0];//小图

    //拿到数据
    let str = decodeURI(location.search).slice(1);
    function init() {
        ajax({
            type: 'get',
            url: '../api/detapage.php',
            data: {
                str: str
            },
            success(str) {//成功的方法
                creat(str)
            }
        });

    }
    init();

    //渲染
    function creat(str) {
        let arr = JSON.parse(str);
        let arr2 = JSON.parse(str);
        console.log(arr2);
        let html = arr.map(function (item) {
            return `<li><img src="${item.url}" alt=""></li>
                <li><img src="../img/15313495-8L.jpg" alt=""></li>
                `;
        }).join('');
        smaller.innerHTML = html;
        GoodTitle.innerHTML = arr[0].title;
        let html1 = arr2.map(function (item) {
            return `<div class="goodsnumber">
                                <span>商品编号</span>
                                <strong>${item.gid}</strong>
                            </div>
                            <div class="goodsprice">
                                <div class="goodspriNum">
                                    <span>商品价格</span>
                                    <strong style="color: #f10000;">￥${item.price}</strong>
                                </div>
                                <div class="goodspriJifen">
                                    <span>积&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分</span>
                                    <div class="priJifen" style="">
                                        <div class="jifen"style="margin-right: 10px;"></div><em  id="feature" >${item.feature} </em><span
                                            style="color: #7d8289;margin-left: 5px;">(最高积分)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="peisong">
                                <div class="peisongdizhi">
                                    <span>配&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;送</span>
                                    <div class="dizhi"></div>
                                </div>
                                <div class="peisongdizhi">
                                    <span>颜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色</span>
                                    <div class="goodscolor">${item.color}</div>
                                </div>
                                <div class="peisongdizhi">
                                    <span>数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量</span>
                                    <div class="goodsSnn">
                                        <input type="button" value="-" id="cur">
                                        <input type="text" value="1" id="goodsSnnuber">
                                        <input type="button" value="+" id="add">
                                    </div>
                                </div>
                            </div>
                             <div class="purchase">
                                <div class="purchaseLfetItem">
                                    <div class="Buyimm">
                                        <div class="imm" style="margin-left: 40px;">立即购买</div>
                                    </div>
                                    <div class="Addcart">加入购物车</div>
                                </div>
                                <div class="purchaseRightItem">
                                    <div class="QRtitle">
                                        APP首购最高减200元
                                        <br>
                                        (以下单为准)
                                    </div>
                                    <div class="QR">
                                        <img src="../img/15306006B.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="service">
                                <img src="../img/deilss_03.gif" alt="">
                            </div>
                `;
        }).join('');
        attribute.innerHTML = html1;

        console.log(arr2);

        //加减
        let cur = document.getElementById('cur');
        let goodsSnnuber = document.getElementById('goodsSnnuber');
        let add = document.getElementById('add');
        let snum = goodsSnnuber.value;
        cur.onclick = function () {//减
            snum--;
            goodsSnnuber.value = snum;
            if (snum <= 1) {
                snum = 1;
                goodsSnnuber.value = snum;
            }
        }
        add.onclick = function () {//减
            snum++;
            goodsSnnuber.value = snum;
        }

        //大图的渲染
        main.innerHTML = `<img src="${arr[0].url}" alt="" id="imgg">
				<div class="mask"></div> `;
        biger.innerHTML = `<img src="${arr[0].url}" alt="" id="imgg1">`;

        //2.鼠标移入盒子1：盒子2和盒子3出现;移出：隐藏
        var mask = wrap.getElementsByClassName('mask')[0];//盒子3：遮罩
        main.onmouseover = function () {
            biger.style.display = 'block';
            mask.style.display = 'block';
            fangda.style.display = 'none';
        }
        main.onmouseout = function () {
            biger.style.display = 'none';
            mask.style.display = 'none';
            fangda.style.display = 'block';
        }

        //3.鼠标在盒子1滑动的过程：盒子2跟着鼠标走，遮罩动了，大图跟着按照比例运动
        main.onmousemove = function (ev) {
            var iLeft = ev.pageX - wrap.offsetLeft - mask.offsetWidth / 2;
            var iTop = ev.pageY - wrap.offsetTop - mask.offsetHeight / 2;
            //临界值
            if (iLeft <= 0) {
                iLeft = 0;
            } else if (iLeft >= wrap.offsetWidth - mask.offsetWidth) {
                iLeft = wrap.offsetWidth - mask.offsetWidth;
            }
            if (iTop <= 0) {
                iTop = 0;
            } else if (iTop >= main.offsetHeight - mask.offsetHeight) {
                iTop = main.offsetHeight - mask.offsetHeight;
            }

            //比例系数
            var scalX = iLeft / (wrap.offsetWidth - mask.offsetWidth);
            var scalY = iTop / (main.offsetHeight - mask.offsetHeight);
            mask.style.left = iLeft + 'px';
            mask.style.top = iTop + 'px';

            //大图运动距离：大图的最大运动距离 * 比例系数
            biger.children[0].style.left = (biger.offsetWidth - biger.children[0].offsetWidth) * scalX + 'px';
            biger.children[0].style.top = (biger.offsetHeight - biger.children[0].offsetHeight) * scalY + 'px';
        }

        var lis = smaller.getElementsByTagName('img');
        var list = smaller.getElementsByTagName('li');
        var imgg = document.getElementById('imgg');
        var imgg1 = document.getElementById('imgg1');
        for (i = 0; i < lis.length; i++) {//便利图片

            lis[i].onmousemove = function () {
                imgg.src = this.src;//替换大图片地址
                imgg1.src = this.src;//替换放大镜图片地址
            }
        }
        for (i = 0; i < list.length; i++) {//点击高亮
            list[i].index = i;
            list[i].onmousemove = function () {
                for (j = 0; j < list.length; j++) {
                    list[j].className = '';
                }
                list[this.index].className = 'active';
            }
        }

        //选项卡
        let Tabbtn = document.getElementsByClassName('goodsTabTitleItem');
        let Tabcon = document.getElementsByClassName('goodsTabConItem');
        for (i = 0; i < Tabbtn.length; i++) {
            Tabbtn[i].index = i;
            Tabbtn[0].className = 'goodsTabTitleItem acrive';
            Tabbtn[i].onclick = function () {
                for (i = 0; i < Tabbtn.length; i++) {
                    Tabbtn[i].className = 'goodsTabTitleItem';
                    Tabcon[i].style.display = 'none';
                }
                Tabbtn[this.index].className = 'goodsTabTitleItem acrive';
                Tabcon[this.index].style.display = 'block';
            }
        }

        //吸顶
        var box = document.getElementsByClassName('goodsTabTitle')[0];
        var Buy = document.getElementsByClassName('Buy')[0];
        iTop = 750;
        window.onscroll = function () {
            if (scrollY >= iTop) {//如果滑动的距离大于box距离顶部的距离
                box.className = 'goodsTabTitle active';
                Buy.style.display = 'block';
            }
            else {
                box.className = 'goodsTabTitle';
                Buy.style.display = 'none';
            }
        }
        let Addcart = document.getElementsByClassName('Addcart')[0];
        let feature = document.getElementById('feature');
        let Buyimm = document.getElementsByClassName('Buyimm')[0];
        var gosid = arr[0].gid;//拿到对应的id
        var gostitle = arr[0].title;//拿到对应的标题
        var gosproce = arr[0].price * goodsSnnuber.value;//拿到对应的价格
        var gosSnum = goodsSnnuber.value;//拿到对应的数量
        var godsfeature = feature.innerHTML;//拿到对应的数量
        var goscolor = arr[0].color;//拿到对应的颜色
        var gosurl = arr[0].url;//拿到对应的图片地址
        var presprice = arr[0].price;//拿到对应的图片地址

        //立即购买
        Buyimm.onclick = function () {
            ajax({//发送需要添加得物品
                type: 'get',
                url: '../api/addcar.php',
                data: {
                    gosid: gosid,
                    gostitle: gostitle,
                    gosproce: gosproce,
                    goscolor: goscolor,
                    gosurl: gosurl,
                    gosSnum: gosSnum,
                    presprice: presprice,
                    godsfeature: godsfeature
                },
                success: str => {
                    console.log(str);
                }
            });
            window.open('../html/shoppingcar.html');
        }

        //添加购物车
        Addcart.onclick = function () {
            console.log(gosid, gostitle, gosproce, goscolor, gosurl, presprice, gosSnum, godsfeature);
            ajax({//发送需要添加得物品
                type: 'get',
                url: '../api/addcar.php',
                data: {
                    gosid: gosid,
                    gostitle: gostitle,
                    gosproce: gosproce,
                    goscolor: goscolor,
                    gosurl: gosurl,
                    gosSnum: gosSnum,
                    presprice: presprice,
                    godsfeature: godsfeature
                },
                success: str => {
                    console.log(str);
                }
            });
            alert('添加成功');
        }
    }

})();