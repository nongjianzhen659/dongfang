<?php

include 'conm.php';

$page = isset($_REQUEST['ipage']) ? $_REQUEST['ipage'] : '';
$num = isset($_REQUEST['num']) ? $_REQUEST['num'] : '';
$paixu = isset($_REQUEST['paixu']) ? $_REQUEST['paixu'] : '';



$index = ($page - 1) * $num;
if ($paixu) {
    $sql = "SELECT * FROM listpage ORDER BY price $paixu LIMIT $index,$num ";
} else {
    $sql = "SELECT * FROM listpage LIMIT $index,$num";
}
$res = $conn->query($sql);
// //3.提取数据
$arr = $res->fetch_all(MYSQLI_ASSOC);

// //语句：查询整个表的
$sql2 = 'SELECT * FROM listpage';
$res2 = $conn->query($sql2);

// // var_dump($arr);
$data = array( //制作关联数组，就可以一次性传多个值给前端
    'total' => $res2->num_rows,
    'list' => $arr,
    'page' => $page,
    'num' => $num
);

echo json_encode($data);

// //5.关闭数据库
$res->close();
$conn->close();
