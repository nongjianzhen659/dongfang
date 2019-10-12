(function () {

    let RecommendTitle = document.getElementById('RecommendTitle');
    let recbtn = RecommendTitle.getElementsByTagName('li');
    let RecommendMain = document.getElementsByClassName('RecommendMain');
    //选项卡
    for (i = 0; i < recbtn.length; i++) {
        recbtn[i].index = i;
        recbtn[0].style = 'font-weight: 600';
        recbtn[0].style.color = '#505966';
        recbtn[i].onclick = function () {
            for (i = 0; i < recbtn.length; i++) {
                RecommendMain[i].style.display = 'none';
                recbtn[i].style = 'font-weight: 100';
            }
            RecommendMain[this.index].style.display = 'block';
            recbtn[this.index].style = 'font-weight: 600';
            recbtn[this.index].style.color = '#505966';
        }
    }

    //跳转登录页面
    let logins = document.getElementById('login');
    logins.onclick = function () {
        window.open('../html/login.html');
    }

    //跳转首页
    let ocj = document.getElementById('ocj');
    ocj.onclick = function () {
        window.open('../index.html');
        window.close();
    }

    //判断是否已登录
    let purposerigth = document.getElementsByClassName('purposerigth')[0];
    let conmen = document.getElementById('left_block_list');
    let carbox = document.getElementsByClassName('carbox')[0];
    let shoppingCon = document.getElementsByClassName('shoppingCon')[0];
    let Conti = document.getElementsByClassName('Conti')[0];
    let handle = document.getElementsByClassName('handle')[0];
    let emptycart = document.getElementsByClassName('emptycart')[0];
    let welc = document.getElementsByClassName('welc')[0];
    let realo = document.getElementsByClassName('realo')[0];
    let tuichu = document.getElementsByClassName('tuichu')[0];
    let str = document.cookie;
    let arr = str.split('=');
    if (arr[1]) {//判断是否以登录，如果登录了查询数据库的数据渲染
        purposerigth.style.display = 'none';
        welc.innerHTML = 'OCJ会员欢迎光临OCJ.COM.CN';
        realo.style.display = 'none';
        tuichu.style.display = 'block';
        carbox.style.display = 'block';
        Conti.style.display = 'block';
        handle.style.display = 'block';
        shoppingCon.style.display = 'none';
        function init() {//初始化
            ajax({
                type: 'post',
                url: '../api/shoppingcar.php',
                success: str => {//成功的回调
                    creat(str);
                }
            });

        }
        init();
        function creat(str) {
            let Arr = JSON.parse(str);
            let shppingcarnum = document.getElementsByClassName('shppingcarnum')[0];
            shppingcarnum.innerHTML = Arr.length;
            var html = Arr.map(function (item) {
                return `
                         <div class="listcar" data-id="${item.gid}">
                        <input type="checkbox" name="" id="" class="chek">
                            <!-- 商品信息 -->
                                <div class="goods">
                                <div class="goodsimg" style="float: left">
                                    <img src="${item.imgurl}" alt="">
                                    </div>
                                    <div class="goodsr" style="float: right">
                                        <p class="goodstitle" >
                                            ${item.title}
                                        </p>
                                        <p class="colors">颜色/种类：<span id="color">${item.color}</span></p>
                                    </div>
                                </div>
                                <!-- 积分 -->
                                <div class="inte">
                                    <span class="fr integs">${item.feature}</span>
                                    <div class="integ"></div>
                                </div>
                                <!-- 单价 -->
                                <div class="UnitPrice">
                                    ￥
                                    <span class="unitori">${item.presentprice}</span>
                                </div>
                                <!-- 数量 -->
                                <div class="goodsNumber">
                                    <input type="button" value="-" class="reduce">
                                        <input type="text" class="godsnum" data-kucun="${item.stock}" value="${item.snum}">
                                            <input type="button" value="+" class="add">
                                </div>
                                            <!-- 小计 -->
                                <div class="Sub">
                                                ￥
                                    <span class="Subtotal">${item.price}</span>
                                            </div>
                                            <!-- 操作 -->
                                <div class="operation">
                                                <div class="purchase"></div>
                                                <div class="delAndclo">
                                                    <div id="clo">
                                                        收藏
                                        </div>
                                                    <div class="del">
                                                        删除
                                        </div>
                                                </div>
                                            </div>
                          </div>
                                        `;
            }).join('');
            if (Arr.length == 0) {
                carbox.style.display = 'none';
                Conti.style.display = 'none';
                handle.style.display = 'none';
                shoppingCon.style.display = 'block';
            }
            conmen.innerHTML = html;


            //删除单个商品
            let del = document.getElementsByClassName('del');
            for (i = 0; i < del.length; i++) {
                del[i].index = i;
                del[i].onclick = function () {
                    var gosid = Arr[this.index].gid;
                    ajax({
                        type: 'post',
                        url: '../api/shoppingcar.php',
                        data: {
                            gosid: gosid
                        },
                        success: str => {
                            console.log(str);
                            // creat(str);
                            init();
                        }
                    });
                    init();
                    // location.reload('../html/Detailspage.html');
                }
            }

            //清空购物车
            emptycart.onclick = () => {
                let snu = true;
                ajax({
                    type: 'post',
                    url: '../api/shoppingcar.php',
                    data: {
                        snu: snu
                    },
                    success: str => {
                        creat(str);
                    }
                });
            }
            let reduce = conmen.getElementsByClassName('reduce');//减
            let add = conmen.getElementsByClassName('add');//加
            let godsnum = conmen.getElementsByClassName('godsnum');//拿到数值
            let godsSnum = document.getElementsByClassName('godsSnum')[0];//拿到数值
            let goodsCheckb = conmen.getElementsByClassName('chek');//选择
            let Allchek = document.getElementById('Allchek');//全选按钮
            let totals = document.getElementById('totals');//总价
            let Subtotal = conmen.getElementsByClassName('Subtotal');//小计
            let unitori = conmen.getElementsByClassName('unitori');//单价
            let batchel = document.getElementsByClassName('batchel')[0];//单价
            let listcar = document.getElementsByClassName('listcar');
            // //购物车功能
            function changeNum2(num, num2) {
                var kucun = godsnum[num2].dataset.kucun;//获取库存
                if (num < 1) {//最小
                    num = 1;
                } else if (num >= kucun) {//最大数，不能超过库存量
                    num = kucun;
                }
                godsnum[num2].value = num;
                //小计==数量 * 单价
                Subtotal[num2].innerHTML = (num * unitori[num2].innerHTML).toFixed(2);
                total();//数量变化，总价和总数量要跟着变
            }
            for (i = 0; i < reduce.length; i++) {
                reduce[i].index = i;
                add[i].index = i;
                godsnum[i].index = i;
                del[i].index = i;
                reduce[i].onclick = function () {//减
                    var num = godsnum[this.index].value;
                    num--;
                    changeNum2(num, this.index);
                }
                add[i].onclick = function () {//加
                    var num = godsnum[this.index].value;
                    num++;
                    changeNum2(num, this.index);
                }
                godsnum[i].oninput = function () {//如果手动输入数据
                    var num = this.value;
                    changeNum2(num, this.index);
                }

            }
            Allchek.onclick = function () {//全选
                for (var i = 0; i < goodsCheckb.length; i++) {
                    goodsCheckb[i].checked = Allchek.checked;
                }
                total();
            }
            function ischeckall() {
                var num = 0;
                var arr = [];
                for (var i = 0; i < goodsCheckb.length; i++) {
                    if (goodsCheckb[i].checked) {
                        num++;
                        arr.push(i);
                    }
                }
                if (num == goodsCheckb.length && num != 0) {
                    Allchek.checked = true;
                } else {
                    Allchek.checked = false;
                }
                return arr;
            }
            function total(arr) {
                var arr = ischeckall();
                var sum = 0;
                var priceAll = 0;
                arr.forEach(function (item) {
                    sum += godsnum[item].value * 1;
                    priceAll += Subtotal[item].innerHTML * 1;
                });
                godsSnum.innerHTML = sum;//商品总价
                totals.innerHTML = priceAll.toFixed(2);
            }
            for (var i = 0; i < goodsCheckb.length; i++) {
                goodsCheckb[i].onclick = function () {
                    total();
                }
            }
            batchel.onclick = function () {//删除选中的行
                var arr = ischeckall();
                let str = confirm("你确定要删除我码");
                if (str) {
                    arr.forEach(function (index) {
                        ajax({
                            type: 'post',
                            url: '../api/shoppingcar.php',
                            data: {
                                gosid: listcar[index].dataset["id"]
                            },
                            success: str => {
                                init();
                                location.reload('../html/shoppingcar.html');
                            }
                        });
                    });
                }
                init();
                total();
            }
        }
    }
    else {
        purposerigth.style.display = 'block';
        welc.innerHTML = '欢迎光临&nbsp;OCJ.COM.CN';
        realo.style.display = 'block';
        tuichu.style.display = 'none';
        carbox.style.display = 'none';
        Conti.style.display = 'none';
        handle.style.display = 'none';
        shoppingCon.style.display = 'block';
    }
    //继续购物
    Conti.onclick = () => {
        window.open('../index.html');
    }
})();