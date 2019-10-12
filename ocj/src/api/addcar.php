<?php

include 'conm.php';

// 接收数据
$gosid = isset($_REQUEST['gosid']) ? $_REQUEST['gosid'] : '1';
$gostitle = isset($_REQUEST['gostitle']) ? $_REQUEST['gostitle'] : '2';
$gosproce = isset($_REQUEST['gosproce']) ? $_REQUEST['gosproce'] : '2';
$goscolor = isset($_REQUEST['goscolor']) ? $_REQUEST['goscolor'] : '3';
$gosurl = isset($_REQUEST['gosurl']) ? $_REQUEST['gosurl'] : '3';
$presprice = isset($_REQUEST['presprice']) ? $_REQUEST['presprice'] : '3';
$gosSnum = isset($_REQUEST['gosSnum']) ? $_REQUEST['gosSnum'] : '1';
$godsfeature = isset($_REQUEST['godsfeature']) ? $_REQUEST['godsfeature'] : '1';

$sql = "INSERT INTO shoppingcar(gid,title,price,imgurl,presentprice,color,snum,feature)VALUES('$gosid','$gostitle','$gosproce','$gosurl','$presprice','$goscolor','$gosSnum','$godsfeature');";

$res = $conn->query($sql); //发送执行的语句

// var_dump($res);
// $arr = $res->fetch_all(MYSQLI_ASSOC);
// echo json_encode($res);
