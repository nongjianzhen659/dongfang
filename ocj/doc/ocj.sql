/*
Navicat MySQL Data Transfer

Source Server         : 659
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : ocj

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2019-10-12 19:28:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for listpage
-- ----------------------------
DROP TABLE IF EXISTS `listpage`;
CREATE TABLE `listpage` (
  `gid` int(20) NOT NULL,
  `url` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` float(10,2) NOT NULL,
  `feature` float(10,2) NOT NULL,
  `oriprice` int(20) NOT NULL,
  `color` varchar(255) NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of listpage
-- ----------------------------
INSERT INTO `listpage` VALUES ('106', '../img/15319216-M.jpg', '象印（ZOJIRUSHI） CD-WCH50C 微电脑家用不锈钢电动电热水', '1299.00', '12.99', '0', '红色');
INSERT INTO `listpage` VALUES ('105', '../img/15226098M.jpg', '康佳（KONKA） 电水壶 2L电烧水壶 304不锈钢电热水壶 双层防烫水', '99.00', '0.00', '129', '黄色');
INSERT INTO `listpage` VALUES ('104', '../img/15234862M.jpg', '奥克斯（AUX） 5L 家用保温电热水瓶 HX-8501（5L大容量,不锈', '319.00', '3.19', '0', '蓝色');
INSERT INTO `listpage` VALUES ('103', '../img/15318026-M.jpg', '咪咕 便携式电水壶V09（保温 烧开水 煮茶 煮咖啡 便携式设计 防滑底座', '259.00', '2.59', '0', '绿色');
INSERT INTO `listpage` VALUES ('102', '../img/15074012-M.jpg', '[商城]荣事达（Royalstar） 便携旅行电热玻璃水壶家用小型容量自动', '179.00', '0.00', '0', '白色');
INSERT INTO `listpage` VALUES ('101', '../img/15318053-5M.jpg', '[商城]荣事达（Royalstar） 旅行电热烧水壶即热式速热饮水机迷你便', '499.00', '0.00', '0', '红色');
INSERT INTO `listpage` VALUES ('100', '../img/15256903M.jpg', '德龙 （Delonghi）KBX2016不锈钢家用电水壶 烧水壶 3色可选', '489.00', '0.00', '690', '黄色');
INSERT INTO `listpage` VALUES ('99', '../img/15100627M.jpg', '[商城]格来德（Grelide）电热水壶 D1017B', '99.00', '0.00', '0', '蓝色');
INSERT INTO `listpage` VALUES ('98', '../img/15267168M.jpg', '象印(ZOJIRUSHI) 【爆款产品】4L 微电脑家用电动电热水瓶 保温壶 CD-WCH40C', '669.00', '0.00', '0', '绿色');
INSERT INTO `listpage` VALUES ('97', '../img/15306006-3M.jpg', '[商城]康佳(KONKA) 电水壶 2L电烧水壶 304不锈钢电热水壶 双层防烫水壶 KEK-15DG2029', '89.00', '0.00', '0', '白色');
INSERT INTO `listpage` VALUES ('96', '../img/15322705-M.jpg', '生活元素(LIFE ELEMENT) 折叠电热水壶压缩式迷你双电压便携出国旅行小烧水壶折叠壶(电热水壶I25)', '329.00', '0.00', '0', '红色');
INSERT INTO `listpage` VALUES ('95', '../img/15322917-M.jpg', '米技(MIJI) 快速不锈钢电水壶 WEK-03  1.7L(加热快,容量大)', '259.00', '0.00', '0', '黄色');
INSERT INTO `listpage` VALUES ('94', '../img/15326696-M.jpg', '象印(ZOJIRUSHI) CD-WCH30C 微电脑家用不锈钢电动电热水瓶 保温壶 电热水壶', '999.00', '0.00', '0', '蓝色');
INSERT INTO `listpage` VALUES ('93', '../img/763740-3M.jpg', '摩飞 （morphy richards）便携式电热水壶', '298.00', '0.00', '0', '绿色');
INSERT INTO `listpage` VALUES ('92', '../img/15168794M.jpg', '[商城]格来德（Grelide） 三层防烫时尚彩钢电热水壶（D2017K）', '159.00', '0.00', '0', '白色');
INSERT INTO `listpage` VALUES ('91', '../img/15179311M.jpg', '[商城]格来德（Grelide） 养生壶（G118E）', '199.00', '0.00', '0', '红色');
INSERT INTO `listpage` VALUES ('90', '../img/15209965M.jpg', '[商城]格来德（Grelide） 电热水壶WKF-242S一体加热（ 大容', '129.00', '0.00', '0', '黄色');
INSERT INTO `listpage` VALUES ('89', '../img/15243907M.jpg', '[商城]生活元素（LIFE ELEMENT） 煮茶器 0.8L养生壶玻璃蒸', '369.00', '0.00', '0', '蓝色');
INSERT INTO `listpage` VALUES ('88', '../img/15247521M.jpg', '[商城]北欧欧慕（Nathome） 调温折叠水壶（NSH0609）', '219.00', '0.00', '0', '绿色');
INSERT INTO `listpage` VALUES ('87', '../img/15258472M.jpg', '[商城]格来德（Grelide） 玻璃电热水壶（G318）', '159.00', '0.00', '0', '白色');
INSERT INTO `listpage` VALUES ('86', '../img/15278654-9M.jpg', '拓璞（TOPCREATING） 拓璞 DK312旅行电热水壶 便携迷你烧水', '269.00', '2.69', '0', '红色');
INSERT INTO `listpage` VALUES ('85', '../img/15293958-M.jpg', '拓璞（TOPCREATING） DK406  316不锈钢电热水壶小容量防', '458.00', '4.58', '0', '黄色');
INSERT INTO `listpage` VALUES ('84', '../img/15301743-M.jpg', '拓璞DK450 炫彩电水壶玻璃热水壶 家用电热水壶1.7L炫光电水壶304', '698.00', '6.98', '0', '蓝色');
INSERT INTO `listpage` VALUES ('83', '../img/15306936-M.jpg', '[商城]北欧欧慕（Nathome） 沸腾小方电热水壶（NSH0805）', '249.00', '0.00', '0', '绿色');
INSERT INTO `listpage` VALUES ('82', '../img/15319216-M.jpg', '[商城]小熊（Bear） 折叠水壶便携式烧水壶旅行水壶电水壶保温热水壶电热', '249.00', '0.00', '0', '白色');
INSERT INTO `listpage` VALUES ('81', '../img/15226098M.jpg', '[商城]现代（HYUNDAI） 电热水壶家用全自动小型容量烧水保温304不', '399.00', '0.00', '0', '红色');
INSERT INTO `listpage` VALUES ('80', '../img/15234862M.jpg', '苏泊尔（SUPOR）  SWF17E16C电水壶（1.7L 长沸除氯 LE', '299.00', '0.00', '0', '黄色');
INSERT INTO `listpage` VALUES ('79', '../img/15318026-M.jpg', '苏泊尔（SUPOR） SWF17E20C电水壶（1.7L 全钢无缝内胆不藏', '269.00', '0.00', '0', '蓝色');
INSERT INTO `listpage` VALUES ('78', '../img/15074012-M.jpg', '阿里亚特 （Ariete）意式复古大容量不锈钢家用自动电水壶2864电热水', '359.00', '0.00', '488', '绿色');
INSERT INTO `listpage` VALUES ('77', '../img/15318053-5M.jpg', '<font color=\"#239CDC\"><b>[时尚厨房攻略]</b></font>金正（NINTAUS） Z10电热水壶（0.7L 折叠壶身', '159.00', '1.59', '259', '白色');
INSERT INTO `listpage` VALUES ('76', '../img/15256903M.jpg', '[商城]格来德（Grelide） 防烫电热水壶（D1703B,紫色）', '79.00', '0.00', '0', '红色');
INSERT INTO `listpage` VALUES ('75', '../img/15100627M.jpg', '苏泊尔（SUPOR） SW-17T12a电水壶', '269.00', '0.00', '0', '黄色');
INSERT INTO `listpage` VALUES ('74', '../img/15267168M.jpg', '<font color=\"#239CDC\"><b>[爆款]</b></font>苏泊尔（SUPOR）  SWF17E20C电水壶（赠 诗特意商务玻', '169.00', '0.00', '269', '蓝色');
INSERT INTO `listpage` VALUES ('73', '../img/15306006-3M.jpg', '金正（NINTAUS） JZSP-51P电热开水瓶（5L容量 6种温度选择', '399.00', '3.99', '0', '绿色');
INSERT INTO `listpage` VALUES ('72', '../img/15322705-M.jpg', '圈厨（QCOOKER）小米生态链 QS-1201玻璃电水壶（1.2L，蓝光', '159.00', '0.00', '199', '白色');
INSERT INTO `listpage` VALUES ('71', '../img/15322917-M.jpg', '奥克斯（AUX） 烧热水壶玻璃电水壶HX-A1815P保温家用304不锈钢', '169.00', '1.69', '0', '红色');
INSERT INTO `listpage` VALUES ('70', '../img/15326696-M.jpg', '[商城]小熊（Bear） 电水壶热水壶烧水壶 304不锈钢玻璃煮茶壶ZDH', '149.00', '0.00', '0', '黄色');
INSERT INTO `listpage` VALUES ('69', '../img/763740-3M.jpg', '德国博朗 电热水壶WK600 不锈钢色', '559.00', '0.00', '999', '蓝色');
INSERT INTO `listpage` VALUES ('68', '../img/15168794M.jpg', '虎牌 电热水瓶PDU-A40C', '1999.00', '59.97', '0', '绿色');
INSERT INTO `listpage` VALUES ('67', '../img/15179311M.jpg', '象印（ZOJIRUSHI） 【爆款产品】日本原装进口保温电热水瓶 电水壶 ', '1299.00', '0.00', '0', '白色');
INSERT INTO `listpage` VALUES ('66', '../img/15209965M.jpg', '象印（ZOJIRUSHI） 【爆款产品】日本原装进口 微电脑家用不锈钢真空', '1858.00', '0.00', '0', '红色');
INSERT INTO `listpage` VALUES ('65', '../img/15243907M.jpg', '博朗（BRAUN） wk300 电热水壶 自动断电烧开水壶  欧洲进口', '688.00', '6.88', '0', '黄色');
INSERT INTO `listpage` VALUES ('63', '../img/15258472M.jpg', '[商城]九阳（JOYOUNG） 电热水壶K12-F3公主星月壶', '399.00', '0.00', '0', '绿色');
INSERT INTO `listpage` VALUES ('64', '../img/15247521M.jpg', '[商城]小熊（Bear） 电水壶ZDH-A17L1（1.7L）', '149.00', '0.00', '0', '蓝色');
INSERT INTO `listpage` VALUES ('62', '../img/15278654-9M.jpg', '[商城]九阳（JOYOUNG） 电热水壶K15-F23 开水壶双层防烫全钢', '138.00', '0.00', '0', '白色');
INSERT INTO `listpage` VALUES ('61', '../img/15293958-M.jpg', '虎牌（TIGER） PYH-A22C电热水瓶VE真空2.2L自动节能3+1', '1498.00', '0.00', '0', '红色');
INSERT INTO `listpage` VALUES ('60', '../img/15301743-M.jpg', '虎牌（TIGER） PDH-A30C 家用电热水瓶三段保温去氯防烫烧水壶 ', '1298.00', '0.00', '0', '黄色');
INSERT INTO `listpage` VALUES ('59', '../img/15306936-M.jpg', '[商城]奥克斯（AUX） 5L 智能电热水瓶 AUX-8066（6段保温,', '379.00', '0.00', '0', '蓝色');
INSERT INTO `listpage` VALUES ('58', '../img/15319216-M.jpg', '[商城]奥克斯（AUX） 5L 家用保温电热水瓶 HX-8039（食品接触', '259.00', '0.00', '299', '绿色');
INSERT INTO `listpage` VALUES ('57', '../img/15226098M.jpg', '[商城]CLARA 克拉拉 1.8L 玻璃电热水壶 CX-817-1（电水', '118.00', '0.00', '0', '白色');
INSERT INTO `listpage` VALUES ('56', '../img/15234862M.jpg', '<font color=\"#239CDC\"><b>[时尚厨房攻略]</b></font>德龙 （Delonghi）KBOE2001 不锈钢家用电水', '498.00', '4.98', '790', '红色');
INSERT INTO `listpage` VALUES ('55', '../img/15318026-M.jpg', '<font color=\"#239CDC\"><b>[时尚厨房攻略]</b></font>奥克斯（AUX）  5L 家用保温电热水瓶 HX-8039', '259.00', '2.59', '339', '黄色');
INSERT INTO `listpage` VALUES ('54', '../img/15074012-M.jpg', '<font color=\"#239CDC\"><b>[时尚厨房攻略]</b></font>摩飞 MR7456A电热水壶自动断电（1.5升）', '389.00', '3.89', '499', '蓝色');
INSERT INTO `listpage` VALUES ('53', '../img/15318053-5M.jpg', '哈尔斯（HAERS） 真空电热水壶HEK-1200-1Z', '229.00', '0.00', '299', '绿色');
INSERT INTO `listpage` VALUES ('52', '../img/15256903M.jpg', '象印(ZOJIRUSHI) 【爆款产品】4L 微电脑家用电动电热水瓶 保温壶 CD-WCH40C', '669.00', '0.00', '0', '白色');
INSERT INTO `listpage` VALUES ('51', '../img/15100627M.jpg', '[商城]康佳(KONKA) 电水壶 2L电烧水壶 304不锈钢电热水壶 双层防烫水壶 KEK-15DG2029', '89.00', '0.00', '0', '红色');
INSERT INTO `listpage` VALUES ('50', '../img/15267168M.jpg', '生活元素(LIFE ELEMENT) 折叠电热水壶压缩式迷你双电压便携出国旅行小烧水壶折叠壶(电热水壶I25)', '329.00', '0.00', '0', '黄色');
INSERT INTO `listpage` VALUES ('49', '../img/15306006-3M.jpg', '米技(MIJI) 快速不锈钢电水壶 WEK-03  1.7L(加热快,容量大)', '259.00', '0.00', '0', '蓝色');
INSERT INTO `listpage` VALUES ('48', '../img/15322705-M.jpg', '象印(ZOJIRUSHI) CD-WCH30C 微电脑家用不锈钢电动电热水瓶 保温壶 电热水壶', '999.00', '0.00', '0', '绿色');
INSERT INTO `listpage` VALUES ('47', '../img/15322917-M.jpg', '摩飞 （morphy richards）便携式电热水壶', '298.00', '0.00', '0', '白色');
INSERT INTO `listpage` VALUES ('46', '../img/15326696-M.jpg', '奥克斯（AUX） HX-A5029大容量2L自动断电茶壶304不锈钢电热水', '129.00', '1.29', '0', '红色');
INSERT INTO `listpage` VALUES ('45', '../img/763740-3M.jpg', 'YSDE优顺达 0.8L 保温双电压便携电热水壶 LT-JG01（折叠电水', '199.00', '1.99', '0', '黄色');
INSERT INTO `listpage` VALUES ('44', '../img/15168794M.jpg', '奥克斯（AUX） 2L大容量烧水壶304不锈钢电热水壶HX-A5029茶壶', '129.00', '1.29', '0', '蓝色');
INSERT INTO `listpage` VALUES ('43', '../img/15179311M.jpg', '[爆款]美的（Midea） 电热水壶HJ1508（1.5L，三层防烫，ST', '179.00', '1.79', '199', '绿色');
INSERT INTO `listpage` VALUES ('42', '../img/15209965M.jpg', '美的（Midea） 电热水壶H215E4（1.5L，双层不锈钢，STRIX', '239.00', '2.39', '0', '白色');
INSERT INTO `listpage` VALUES ('41', '../img/15243907M.jpg', '象印（ZOJIRUSHI） CV-TYH30C家用电热水瓶真空保温智能保温', '1199.00', '11.99', '0', '红色');
INSERT INTO `listpage` VALUES ('40', '../img/15247521M.jpg', '生活元素（LIFE ELEMENT） 折叠电热水壶迷你旅行便携旅行烧水壶可', '299.00', '2.99', '0', '黄色');
INSERT INTO `listpage` VALUES ('39', '../img/15258472M.jpg', '灿坤 高硼硅电热水壶TSK-3178C（1.5L,蓝光可视设计，不锈钢刀头', '169.00', '1.69', '0', '蓝色');
INSERT INTO `listpage` VALUES ('38', '../img/15278654-9M.jpg', '美的（Midea） 电热水瓶PF709-50T（5升，10段温度设定，关机', '329.00', '0.00', '469', '绿色');
INSERT INTO `listpage` VALUES ('37', '../img/15293958-M.jpg', '康佳（KONKA） 折叠烧水壶 旅行电水壶 双电压便携保温电热水壶 硅胶杯', '299.00', '2.99', '0', '白色');
INSERT INTO `listpage` VALUES ('36', '../img/15301743-M.jpg', '康佳（KONKA） 1.8L电热水壶304不锈钢壶身烧水壶三重保护水壶 K', '129.00', '1.29', '0', '红色');
INSERT INTO `listpage` VALUES ('35', '../img/15306936-M.jpg', '奥克斯（AUX） 电水壶HX-A5111保温家用304不锈钢内胆电热烧水壶', '99.00', '0.00', '119', '黄色');
INSERT INTO `listpage` VALUES ('34', '../img/15319216-M.jpg', 'meyou 名友MY-35E恒温壶（温奶 温茶 温咖啡）', '199.00', '1.99', '0', '蓝色');
INSERT INTO `listpage` VALUES ('33', '../img/15226098M.jpg', '[商城]格来德（Grelide） 旅行电热水壶（D2606）', '149.00', '0.00', '0', '绿色');
INSERT INTO `listpage` VALUES ('32', '../img/15234862M.jpg', '[商城]北欧欧慕（Nathome） 折叠电热水壶 旅行便携电水壶（NSH0', '269.00', '0.00', '0', '白色');
INSERT INTO `listpage` VALUES ('31', '../img/15318026-M.jpg', '[商城]康佳（KONKA） 1.7L大容量电热水壶 精准控温 双层防烫KE', '99.00', '0.00', '0', '红色');
INSERT INTO `listpage` VALUES ('30', '../img/15074012-M.jpg', '金正（NINTAUS） SH70电水壶 （ 600ML 高硼硅玻璃 24小', '269.00', '2.69', '0', '黄色');
INSERT INTO `listpage` VALUES ('29', '../img/15318053-5M.jpg', '圈厨（QCOOKER）小米生态链 复古电水壶 带温度表（1.7L，带温度表', '259.00', '0.00', '299', '蓝色');
INSERT INTO `listpage` VALUES ('28', '../img/15256903M.jpg', '奥克斯（AUX） 电水壶1.8L大容量304不锈钢烧水壶电热水壶HX-A1', '129.00', '1.29', '0', '绿色');
INSERT INTO `listpage` VALUES ('27', '../img/15100627M.jpg', '[时尚厨房攻略]象印/ZOJIRUSHI CD-LCQ50HC 象印电热水', '1399.00', '13.99', '2099', '白色');
INSERT INTO `listpage` VALUES ('26', '../img/15267168M.jpg', '象印（ZOJIRUSHI） CD-JUH30C日本原装进口保温电热水瓶 电', '1158.00', '0.00', '2199', '红色');
INSERT INTO `listpage` VALUES ('25', '../img/15306006-3M.jpg', '[时尚厨房攻略]象印（ZOJIRUSHI） CV-CSH30C 家用真空保', '709.00', '7.09', '1348', '黄色');
INSERT INTO `listpage` VALUES ('24', '../img/15322705-M.jpg', '[商城]奥克斯（AUX） 1.8L 304不锈钢炫彩防烫电热水壶 HX-A', '99.00', '0.00', '0', '蓝色');
INSERT INTO `listpage` VALUES ('23', '../img/15322917-M.jpg', 'YSDE优顺达 保温双电压便携电热水壶 LT-JG01（折叠电水壶,烧水壶', '199.00', '1.99', '0', '绿色');
INSERT INTO `listpage` VALUES ('22', '../img/15326696-M.jpg', '奥克斯（AUX） 【爆款产品】HX-A5029大容量2L烧开水壶304不锈', '109.00', '1.09', '0', '白色');
INSERT INTO `listpage` VALUES ('21', '../img/763740-3M.jpg', '[商城]小熊（Bear） 电水壶ZDH-A15L5家用304不锈钢保温烧水', '139.00', '0.00', '159', '红色');
INSERT INTO `listpage` VALUES ('20', '../img/15168794M.jpg', '[爆款]象印（ZOJIRUSHI） CD-WCH40C 微电脑家用不锈钢电', '609.00', '6.09', '1099', '黄色');
INSERT INTO `listpage` VALUES ('19', '../img/15179311M.jpg', '[时尚厨房攻略]摩飞 MR6080便携式烧水壶电热水壶旅行大容量保温一体自', '293.00', '2.93', '328', '蓝色');
INSERT INTO `listpage` VALUES ('18', '../img/15209965M.jpg', '哈尔斯（HAERS） 【爆款产品】真空电热水壶HEK-1200-1Z', '229.00', '0.00', '0', '绿色');
INSERT INTO `listpage` VALUES ('17', '../img/15243907M.jpg', '阿里亚特 （Ariete）意式复古大容量不锈钢家用电水壶 烧水壶 3色可选', '368.00', '3.68', '0', '白色');
INSERT INTO `listpage` VALUES ('16', '../img/15247521M.jpg', '苏泊尔（SUPOR） SW-17T12a电水壶', '199.00', '0.00', '0', '红色');
INSERT INTO `listpage` VALUES ('15', '../img/15258472M.jpg', '奥克斯（AUX） HX-A5029 2L 304不锈钢电热水壶 1+1组合', '129.00', '1.29', '0', '黄色');
INSERT INTO `listpage` VALUES ('14', '../img/15278654-9M.jpg', '奥克斯（AUX） 1.5L 雅白电热水壶 HX-A1503B（一键自动保温', '99.00', '0.00', '129', '蓝色');
INSERT INTO `listpage` VALUES ('13', '../img/15293958-M.jpg', '[商城]康佳（KONKA） 开水壶烧水壶不锈钢电热水壶自动断电家用小型保温', '99.00', '0.00', '0', '绿色');
INSERT INTO `listpage` VALUES ('12', '../img/15301743-M.jpg', '象印（ZOJIRUSHI） 【爆款产品】4L 微电脑家用电动电热水瓶 保温', '669.00', '0.00', '0', '白色');
INSERT INTO `listpage` VALUES ('11', '../img/15306936-M.jpg', '[商城]康佳（KONKA） 电水壶 2L电烧水壶 304不锈钢电热水壶 双', '89.00', '0.00', '0', '红色');
INSERT INTO `listpage` VALUES ('10', '../img/15319216-M.jpg', '生活元素（LIFE ELEMENT） 折叠电热水壶压缩式迷你双电压便携出国', '329.00', '3.29', '0', '黄色');
INSERT INTO `listpage` VALUES ('9', '../img/15226098M.jpg', '[时尚厨房攻略]米技（MIJI） 快速不锈钢电水壶 WEK-03  1.7', '259.00', '2.59', '399', '蓝色');
INSERT INTO `listpage` VALUES ('8', '../img/15234862M.jpg', '象印（ZOJIRUSHI） CD-WCH30C 微电脑家用不锈钢电动电热水', '999.00', '9.99', '0', '绿色');
INSERT INTO `listpage` VALUES ('7', '../img/15318026-M.jpg', '摩飞 （morphy richards）便携式电热水壶', '298.00', '2.98', '0', '白色');
INSERT INTO `listpage` VALUES ('6', '../img/15074012-M.jpg', '象印(ZOJIRUSHI) 【爆款产品】4L 微电脑家用电动电热水瓶 保温壶 CD-WCH40C', '669.00', '0.00', '0', '红色');
INSERT INTO `listpage` VALUES ('5', '../img/15318053-5M.jpg', '[商城]康佳(KONKA) 电水壶 2L电烧水壶 304不锈钢电热水壶 双层防烫水壶 KEK-15DG2029', '89.00', '0.00', '0', '黄色');
INSERT INTO `listpage` VALUES ('4', '../img/15256903M.jpg', '生活元素(LIFE ELEMENT) 折叠电热水壶压缩式迷你双电压便携出国旅行小烧水壶折叠壶(电热水壶I25)', '329.00', '0.00', '0', '蓝色');
INSERT INTO `listpage` VALUES ('3', '../img/15100627M.jpg', '米技(MIJI) 快速不锈钢电水壶 WEK-03  1.7L(加热快,容量大)', '259.00', '0.00', '0', '绿色');
INSERT INTO `listpage` VALUES ('2', '../img/15267168M.jpg', '象印(ZOJIRUSHI) CD-WCH30C 微电脑家用不锈钢电动电热水瓶 保温壶 电热水壶', '999.00', '0.00', '0', '白色');
INSERT INTO `listpage` VALUES ('1', '../img/15306006-3M.jpg', '摩飞 （morphy richards）便携式电热水壶', '298.00', '0.00', '0', '红色');
INSERT INTO `listpage` VALUES ('107', '../img/15306936-M.jpg', '[商城]荣事达（Royalstar） 养生壶全自动多功能玻璃电煮茶壶家用电', '179.00', '0.00', '0', '白色');
INSERT INTO `listpage` VALUES ('108', '../img/15301743-M.jpg', '惠而浦（Whirlpool） 电热水壶WEK-JM1710X', '209.00', '2.09', '0', '绿色');
INSERT INTO `listpage` VALUES ('109', '../img/15293958-M.jpg', '惠而浦（Whirlpool） 电热水壶WEK-JM1711X', '199.00', '1.99', '0', '蓝色');
INSERT INTO `listpage` VALUES ('110', '../img/15278654-9M.jpg', '苏泊尔（SUPOR） 玻璃电水壶热水壶高硼硅 SW-17S25A', '199.00', '0.00', '399', '黄色');
INSERT INTO `listpage` VALUES ('111', '../img/15258472M.jpg', '<font color=\"#239CDC\"><b>[时尚厨房攻略]</b></font>凯伍德 （KENWOOD）ZJG112CL家用玻璃大容量电', '649.00', '6.49', '790', '红色');
INSERT INTO `listpage` VALUES ('112', '../img/15247521M.jpg', '美的（Midea） 可折叠式电热水壶（0.6L，硅胶加不锈钢材质，折叠便携', '239.00', '0.00', '309', '白色');
INSERT INTO `listpage` VALUES ('113', '../img/15243907M.jpg', '松下（Panasonic） NC-EN3000 家用不锈钢电热水瓶保温水壶', '780.00', '0.00', '0', '绿色');
INSERT INTO `listpage` VALUES ('114', '../img/15209965M.jpg', '<font color=\"#239CDC\"><b>[时尚厨房攻略]</b></font>松下（Panasonic） NC-EN4000 家用不锈钢', '758.00', '0.00', '880', '蓝色');
INSERT INTO `listpage` VALUES ('115', '../img/15179311M.jpg', '松下（Panasonic） NC-HKD122 家用不锈钢电水壶烧水壶快烧', '389.00', '0.00', '0', '黄色');
INSERT INTO `listpage` VALUES ('116', '../img/15168794M.jpg', '巴慕达  巴慕达手冲壶BALMUDA K02E日本专业手冲壶茶壶精准控水不', '1699.00', '16.99', '0', '红色');
INSERT INTO `listpage` VALUES ('117', '../img/763740-3M.jpg', '苏泊尔（SUPOR） 快速加热电热水瓶SW-45S50A', '499.00', '4.99', '0', '白色');
INSERT INTO `listpage` VALUES ('118', '../img/15326696-M.jpg', '哈尔斯（HAERS） 【爆款产品】智能恒温杯350ML', '139.00', '0.00', '0', '绿色');
INSERT INTO `listpage` VALUES ('119', '../img/15322917-M.jpg', '哈尔斯（HAERS） 智能恒温杯350ML', '259.00', '2.59', '0', '蓝色');
INSERT INTO `listpage` VALUES ('120', '../img/15322705-M.jpg', '现代（HYUNDAI） 韩国现代全自动上水壶 QC-CSH103 多功能电', '349.00', '0.00', '599', '黄色');
INSERT INTO `listpage` VALUES ('121', '../img/15306006-3M.jpg', 'SKG 养生壶全自动加厚玻璃电热水壶8088S', '329.00', '3.29', '0', '红色');
INSERT INTO `listpage` VALUES ('122', '../img/15267168M.jpg', '灿坤 智能控温手冲壶TSK-3613CT（不锈钢材质，一键保温，可温度设定', '699.00', '6.99', '0', '白色');
INSERT INTO `listpage` VALUES ('123', '../img/15100627M.jpg', '象印（ZOJIRUSHI） CV-TYH40C家用不锈钢电热水瓶真空保温智', '1299.00', '12.99', '0', '绿色');
INSERT INTO `listpage` VALUES ('124', '../img/15256903M.jpg', '[商城]小熊（Bear） 电水壶ZDH-A12R2家用保温双层防烫高硼硅玻', '169.00', '0.00', '0', '蓝色');
INSERT INTO `listpage` VALUES ('125', '../img/15318053-5M.jpg', '<font color=\"#239CDC\"><b>[爆款]</b></font>灿坤 不锈钢电热水壶1.8L', '99.00', '0.99', '189', '黄色');
INSERT INTO `listpage` VALUES ('126', '../img/15074012-M.jpg', '灿坤 不锈钢电热水壶TSK-3169C（1.5L，不锈钢材质，自动断电）', '129.00', '0.00', '169', '红色');
INSERT INTO `listpage` VALUES ('127', '../img/15318026-M.jpg', '<font color=\"#239CDC\"><b>[时尚厨房攻略]</b></font>生活元素（LIFE ELEMENT） 迷你旅行便携旅行烧水', '249.00', '2.49', '329', '白色');
INSERT INTO `listpage` VALUES ('128', '../img/15234862M.jpg', '哈尔斯（HAERS） 智能恒温杯350ML', '259.00', '2.59', '0', '绿色');
INSERT INTO `listpage` VALUES ('129', '../img/15226098M.jpg', '美的（Midea） 电热水壶SJ1702HM（1.7L，自动蒸汽感应开关，', '149.00', '1.49', '0', '蓝色');
INSERT INTO `listpage` VALUES ('130', '../img/15319216-M.jpg', '巴慕达 巴慕达手冲壶BALMUDA K02E日本专业手冲咖啡壶茶壶精准控水', '1699.00', '16.99', '0', '黄色');
INSERT INTO `listpage` VALUES ('131', '../img/15306936-M.jpg', 'YSDE优顺达 0.8L 保温双电压便携电热水壶 LT-DG01（折叠电水', '229.00', '2.29', '0', '红色');
INSERT INTO `listpage` VALUES ('132', '../img/15301743-M.jpg', 'YSDE优顺达 0.8L 保温双电压便携电热水壶 LT-DG01（折叠电水', '229.00', '2.29', '0', '白色');
INSERT INTO `listpage` VALUES ('133', '../img/15293958-M.jpg', '<font color=\"#239CDC\"><b>[爆款]</b></font>生活元素（LIFE ELEMENT） 便携式折叠电水壶I10（0.', '169.00', '1.69', '239', '绿色');
INSERT INTO `listpage` VALUES ('134', '../img/15278654-9M.jpg', '象印（ZOJIRUSHI） CD-WDH30C 微电脑家用不锈钢电动电热水', '1099.00', '10.99', '0', '蓝色');
INSERT INTO `listpage` VALUES ('135', '../img/15258472M.jpg', '象印（ZOJIRUSHI） CD-WDH50C 微电脑家用不锈钢电动电热水', '1399.00', '13.99', '0', '黄色');
INSERT INTO `listpage` VALUES ('136', '../img/15247521M.jpg', '[商城]奥克斯（AUX） 5L 大容量不锈钢电水壶 AK-15N01（食品', '103.00', '0.00', '0', '红色');
INSERT INTO `listpage` VALUES ('137', '../img/15243907M.jpg', '摩飞 MR7456A电热水壶自动断电（1.5升,绿色）', '369.00', '0.00', '499', '白色');
INSERT INTO `listpage` VALUES ('138', '../img/15209965M.jpg', '象印（ZOJIRUSHI） CD-WDH40C 微电脑家用不锈钢电动电热水', '1199.00', '11.99', '0', '绿色');

-- ----------------------------
-- Table structure for shoppingcar
-- ----------------------------
DROP TABLE IF EXISTS `shoppingcar`;
CREATE TABLE `shoppingcar` (
  `gid` int(100) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `price` float(40,2) NOT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `presentprice` float(40,2) NOT NULL,
  `stock` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '10',
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `snum` int(20) NOT NULL,
  `feature` float(20,2) NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM AUTO_INCREMENT=107 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shoppingcar
-- ----------------------------

-- ----------------------------
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('1', 'admin', '123456');
INSERT INTO `userinfo` VALUES ('60', 'zhangsan', 'asdasd');
INSERT INTO `userinfo` VALUES ('61', 'njz', '123456');
INSERT INTO `userinfo` VALUES ('56', 'hahah', 'njz19980708');
INSERT INTO `userinfo` VALUES ('57', 'xinyonghu', '123123');
INSERT INTO `userinfo` VALUES ('58', '976659', 'asdasd');
SET FOREIGN_KEY_CHECKS=1;
