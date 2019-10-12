<?php

include 'conm.php';

$name = isset($_REQUEST['name']) ? $_REQUEST['name'] : ''; //获取传过来的值
$pasw = isset($_REQUEST['pasw']) ? $_REQUEST['pasw'] : ''; //获取传过来的值
$sql = "SELECT * FROM userinfo WHERE Username='$name'and Password='$pasw'";

$res = $conn->query($sql); //发送执行的语句

// var_dump($res);
// $arr = $res->fetch_all(MYSQLI_ASSOC);
// echo json_encode($name);

if ($res->num_rows) { //num_rows可判断是否存在
    echo '0'; //登录成功
} else {
    echo '1'; //登录失败
}
