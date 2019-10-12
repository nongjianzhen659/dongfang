<?php
include 'conm.php'; //成功


$name = isset($_REQUEST['telphone']) ? $_REQUEST['telphone'] : ''; //获取传过来的值
$pasw = isset($_REQUEST['passw']) ? $_REQUEST['passw'] : '';
$num = isset($_REQUEST['num']) ? $_REQUEST['num'] : '';

// if ($res) { //返回的是布尔值，为true是表示添加成功
//     //插入成功
//     echo '1';
// } else {
//     echo '2';
// }

if ($num) { //如果num存在执行查询语句
    $sql = "SELECT * FROM userinfo WHERE Username='$name'";
    $res = $conn->query($sql);
    if ($res->num_rows) { //如果存在
        echo '1';
    } else {
        echo '0';
    }
} else { //不存在时执行插入语句
    $sql = "INSERT INTO userinfo(Username,PASSWORD)VALUE('$name','$pasw')";
    $res = $conn->query($sql);
    var_dump($res);
    if ($res) { //返回的是布尔值，为true是表示添加成功
        //插入成功
        echo '1';
    } else {
        echo '0';
    }
}
