<?php
include 'conm.php';

$name = isset($_REQUEST['username']) ? $_REQUEST['username'] : ''; //获取传过来的值
$pasw = isset($_REQUEST['password']) ? $_REQUEST['password'] : '';

$sql = "INSERT INTO userinfo(Username,PASSWORD)VALUE('$name','$pasw')";
$res = $conn->query($sql);
var_dump($res);
// $arr = $res->fetch_all(MYSQLI_ASSOC);
// echo json_encode($arr);
