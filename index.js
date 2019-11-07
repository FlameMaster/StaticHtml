/**
 * 
 */

// 标签数组
var arrays = [
		[
				[ "百度贴吧", "img\\tieba.png",
						"http://www.baidu.com/home/show/home" ],
				[ "腾讯qq空间", "img\\kongjian.png", "bin/index.html" ],
				[ "新浪微博", "img\\weibo.png", "index.html" ],
				[ "网易163邮箱", "img\\163youxiang.png", "index.html" ],
				[ "腾讯qq邮箱", "img\\qqyouxiang.png", "index.html" ] ],
		[
				[ "优酷视频", "img\\youku.png", "index.html" ],
				[ "剑灵官网", "img\\bns.png", "index.html" ],
				[ "哔哩哔哩", "img\\bilibili.png",
						"http://www.bilibili.com/video/bangumi.html" ],
				[ "爱稀饭", "img\\aixifan.png", "index.html" ],
				[ "机锋手机论坛", "img\\jifeng.png", "index.html" ]
		]];

function win_but(){
	win_one();
	var but_r = document.getElementById("b_0");
	var back_r = document.getElementById("back");
	var parent1s = but_r.parentNode;
	parent1s.removeChild(but_r);
	parent1s.removeChild(back_r);
	win_b1();
}


function win_rb1(){
	var b01_r = document.getElementById("b_1");
	var parent10s = b01_r.parentNode;
	parent10s.removeChild(b01_r);
}

function win_b1(){
	var b1 = document.createElement("img");
	b1.setAttribute("id", "b_1");
	b1.setAttribute("alt", "编辑标签");
	b1.setAttribute("src", "img\\b_3.png");
	b1.setAttribute("onclick", "win_three()");
	back = document.getElementById("ID_background");
	back.appendChild(b1);
}



// 显示标签
function win_one() {
	for (var i = 0; i < arrays.length; i++) {
		for (var j = 0; j < arrays[i].length; j++) {
				// 1 创建img标签对象 <img />
				var a = document.createElement("img");
				// 设置变量
				var x = 400 + i * 84, y = 591 + j * 148;
				// 2 为创建的img标签增加属性
				a.setAttribute("id", i + "" + j);
				a.setAttribute("alt", arrays[i][j][0]);
				a.setAttribute("src", arrays[i][j][1]);
				a.setAttribute("style", "top:" + x + "px;left:" + y
						+ "px;position:absolute;");
				a.setAttribute("onclick", "window.open('" + arrays[i][j][2]
						+ "')");
				// 4 找到div标签
				var div_0 = document.getElementById("ID_background");
				// 5 添加
				div_0.appendChild(a);
				if(i>1){
					var b = document.createElement("div");
					b.setAttribute("id", i + "o" + j);
					b.setAttribute("class", "text");
					b.setAttribute("style", "top:" + x + "px;left:" + y
							+ "px;position:absolute;");
					b.innerHTML = arrays[i][j][0];
					div_0.appendChild(b);
				}
		}
	}
}
				
// 添加标签（未解决添加不进去问题）
function win_two() {
	var arrays_zero = [[[document.getElementsByName("biaoqian")[0].value,"img\\fc.png",document.getElementsByName("dizhi")[0].value]]];
	for (var i = 0;; i++) {
			if (i<arrays.length) {
				for (var j = 0; j < 5; j++) {
						if (j==arrays[i].length) {
							arrays[i]=arrays[i].concat(arrays_zero[0]);
							win_remove_zero();
							win_one();
							win_b1()
							return;
						}
				}
			}else{
				arrays=arrays.concat(arrays_zero);
				win_remove_zero();
				win_one();
				win_b1()
				return;
			}
	}
	win_remove_zero();
	win_one();
}

// 添加标签页面
function win_three() {
	win_rb1();
	win_remove();
	//div容器
	{
		// 1 创建img标签对象 <div />
		var a = document.createElement("div");
		// 2 为创建的img标签增加属性
		a.setAttribute("id", "div_zero");
		a.setAttribute("align", "center");
		// 4 找到div标签
		var div_0 = document.getElementById("ID_background");
		// 5 添加
		div_0.appendChild(a);
	}
	var a = document.createElement("br");
	a.setAttribute("id", "br_zero");
	var div_0 = document.getElementById("div_zero");
	div_0.appendChild(a);
	//表单
	{
		var a = document.createElement("table");
		a.setAttribute("id", "table_zero");
		a.setAttribute("border","2");
		a.setAttribute("width","70%");
		a.setAttribute("bordercolor","#0033CC");
		a.setAttribute("cellpadding","10px");
		a.setAttribute("cellspacing","3px");
		var div_0 = document.getElementById("div_zero");
		div_0.appendChild(a);
	}
	//表单第一行标题
	{
		var a = document.createElement("tr");
		a.setAttribute("id", "tr_zero");
		var div_0 = document.getElementById("table_zero");
		div_0.appendChild(a);
		var a = document.createElement("th");
		a.setAttribute("id", "th_zero");
		a.setAttribute("colspan", "2");
		a.setAttribute("style", "color:#00F");
		//为标签添加标签体
		a.innerHTML = "添加标签：";
		var div_0 = document.getElementById("tr_zero");
		div_0.appendChild(a);
	}
	//标签名
	{
		var a = document.createElement("tr");
		a.setAttribute("id", "tr_one");
		var div_0 = document.getElementById("table_zero");
		div_0.appendChild(a);
		
		var a = document.createElement("th");
		a.setAttribute("id", "th_one");
		a.innerHTML = "标 签 名：";
		var div_0 = document.getElementById("tr_one");
		div_0.appendChild(a);
		
		var a = document.createElement("td");
		a.setAttribute("id", "td_zero");
		a.setAttribute("align", "center");
		var div_0 = document.getElementById("tr_one");
		div_0.appendChild(a);
		
		var a = document.createElement("input");
		a.setAttribute("id", "in_zero");
		a.setAttribute("type", "text");
		a.setAttribute("name", "biaoqian");
		var div_0 = document.getElementById("td_zero");
		div_0.appendChild(a);
		
	}
	//标签地址
	{
		var a = document.createElement("tr");
		a.setAttribute("id", "tr_two");
		var div_0 = document.getElementById("table_zero");
		div_0.appendChild(a);
		
		var a = document.createElement("th");
		a.setAttribute("id", "th_two");
		a.innerHTML = "标签地址：";
		var div_0 = document.getElementById("tr_two");
		div_0.appendChild(a);
		
		var a = document.createElement("td");
		a.setAttribute("id", "td_one");
		a.setAttribute("align", "center");
		var div_0 = document.getElementById("tr_two");
		div_0.appendChild(a);
		
		var a = document.createElement("input");
		a.setAttribute("id", "in_one");
		a.setAttribute("type", "text");
		a.setAttribute("name", "dizhi");
		var div_0 = document.getElementById("td_one");
		div_0.appendChild(a);
	}
	//提交按钮
	{
		var a = document.createElement("tr");
		a.setAttribute("id", "tr_three");
		var div_0 = document.getElementById("table_zero");
		div_0.appendChild(a);
		
		var a = document.createElement("th");
		a.setAttribute("id", "th_three");
		a.setAttribute("colspan", "2");
		var div_0 = document.getElementById("tr_three");
		div_0.appendChild(a);
		
		var a = document.createElement("input");
		a.setAttribute("id", "in_two");
		a.setAttribute("type", "button");
		a.setAttribute("value", "添加标签");
		a.setAttribute("onclick", "win_two()");
		a.setAttribute("style","background: #FFF no-repeat;height:30px;width:100px;");
		var div_0 = document.getElementById("th_three");
		div_0.appendChild(a);
	}
	var a = document.createElement("br");
	a.setAttribute("id", "br_one");
	var div_0 = document.getElementById("div_zero");
	div_0.appendChild(a);
}

//删除添加页面
//删除添加标签页面
//删除添加标签页面
function win_remove_zero(){
	//input
	var th_th = document.getElementById("th_three");
	th_th.removeChild(in_two);
	var td_o = document.getElementById("td_one");
	td_o.removeChild(in_one);
	var td_z = document.getElementById("td_zero");
	td_z.removeChild(in_zero);
	//th td
	var tr_th = document.getElementById("tr_three");
	tr_th.removeChild(th_three);
	var tr_t = document.getElementById("tr_two");
	tr_t.removeChild(th_two);
	var tr_t = document.getElementById("tr_two");
	tr_t.removeChild(td_one);
	var tr_o = document.getElementById("tr_one");
	tr_o.removeChild(th_one);
	var tr_o = document.getElementById("tr_one");
	tr_o.removeChild(td_zero);
	var tr_z = document.getElementById("tr_zero");
	tr_z.removeChild(th_zero);
	//tr
	var table_z = document.getElementById("table_zero");
	table_z.removeChild(tr_three);
	table_z.removeChild(tr_two);
	table_z.removeChild(tr_one);
	table_z.removeChild(tr_zero);
	//table br
	var div_z = document.getElementById("div_zero");
	div_z.removeChild(br_one);
	div_z.removeChild(table_zero);
	div_z.removeChild(br_zero);
	//div
	var parent = div_z.parentNode;
	parent.removeChild(div_z);
} 

//删除标签
//删除显示标签
// 删除所有显示的标签
function win_remove() {
	for (var i = 0; i < arrays.length; i++) {
		for (var j = 0; j < arrays[i].length; j++) {
				// 1 获得要删除的img
				var img_r = document.getElementById(i + "" + j);
				// 2 获得div的父元素
				var parent = img_r.parentNode;
				// 3 通过爹删除孩子
				parent.removeChild(img_r);
				if(i>1){
					var div_r = document.getElementById(i + "o" + j);
					var parent0 = div_r.parentNode;
					parent0.removeChild(div_r);
				}
		}
	}
}
