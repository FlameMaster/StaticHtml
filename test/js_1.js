/**
 * 
 * 
 * 
 * 
 */

alert("-------猜数字游戏-------");

var a = Math.round(Math.random() * 100);

var b = parseInt(prompt("请输入一个整数（0~100）：", ""));

// 递归
function fun() {
	if (b == a) {
		alert("恭喜你！猜对了！");
	} else if (b > a) {
		alert("大了");
		b = parseInt(prompt("请输入一个整数（0~100）：", ""));
		fun();
	} else {
		alert("小了");
		b = parseInt(prompt("请输入一个整数（0~100）：", ""));
		fun();
	}
}
fun();

// 循环
for (;;) {
	b = parseInt(prompt("请输入一个整数（0~100）：", ""));
	if (b == a) {
		alert("恭喜你！猜对了！");
		break;
	} else if (b > a) {
		alert("大了");
	} else {
		alert("小了");
	}
}
