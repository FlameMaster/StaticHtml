/**
 * window对象
 * 
 */

//打开新窗口
function win_ope(){
	window.open("js.html")
}


//关闭当前窗口
function win_clo(){
	self.close();
}

//警告窗口
function win_ale(){
	window.alert("警告窗口");
}


//对话框
function win_con(){
	var bCon = window.confirm("对话框");
	return bCon;
}

//5秒之后打开新窗口
function win_tim(){
	var Time = setTimeout("open('tp.png')",5000);
}

//前一页
function win_bac(){
	history.back();
}
//后一页
function win_for(){
	history.forward();
}

//跳转
function win_ass(){
	location.assign("..\\网页\\1.html");
}



