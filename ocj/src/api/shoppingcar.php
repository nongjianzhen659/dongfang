<?php

include 'conm.php';


$gosid = isset($_REQUEST['gosid']) ? $_REQUEST['gosid'] : '';
$isok = isset($_REQUEST['snu']) ? $_REQUEST['snu'] : '';


// 查询数据渲染数据
if ($gosid) {
    $sql2 = "delete from shoppingcar where gid = $gosid";
    $res = $conn->query($sql2);
    $sql = "SELECT *FROM shoppingcar";
    $res = $conn->query($sql);
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($arr, JSON_UNESCAPED_UNICODE);
} else if ($isok == true) {
    $sql = "DELETE FROM shoppingcar";
    $res = $conn->query($sql);
}
$sql = "SELECT *FROM shoppingcar";
$res = $conn->query($sql);
$arr = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($arr, JSON_UNESCAPED_UNICODE);
