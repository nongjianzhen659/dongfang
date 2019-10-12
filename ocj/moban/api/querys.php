<?php
include 'conm.php';

$sql = "SELECT * FROM userinfo";

$res = $conn->query($sql); //发送执行的语句

// var_dump($res);
$arr = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($arr);
