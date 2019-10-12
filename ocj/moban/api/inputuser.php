<?php
include 'conm.php';

$password = isset($_REQUEST['pwds']) ? $_REQUEST['pwds'] : '';
$str = isset($_REQUEST['num']) ? $_REQUEST['num'] : '';

$sql = "update userinfo set `Password`='$password' where id=$str";
$res = $conn->query($sql);
var_dump($res);
// $arr = $res->fetch_all(MYSQLI_ASSOC);
// echo json_encode($arr);
