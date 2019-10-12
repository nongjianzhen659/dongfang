<?php
include 'conm.php';

$str = isset($_REQUEST['str']) ? $_REQUEST['str'] : '106';

$sql = "SELECT * FROM listpage WHERE gid = '$str'";
$res = $conn->query($sql); //发送执行的语句
$arr = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($arr);
