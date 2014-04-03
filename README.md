upBox
=====

一个可以往 edit box 的内容里 paste picture 的 jQuery plugin哦！ 

介绍 instruction
================

由知乎某相关问题“知乎回答问题编辑框用 Ctrl+V 粘贴图片是如何实现的？”及喻小伟小朋友的提议决定，<br/>
implement 一个在 edit box 中直接 paste picture 即可 upload 的jQuery plugin！

当前版本 version
================

v1.0Beta 	2014-4-3 18:46
-------------------------------------------------------------

1. only support screenshot 产生的图片！
2. 仅 support 可支持 HTML5 的 explorer！
3. support 将 picture insert into edit box！
4. don't support 将插入的 picture upload！
5. 似乎只 support <div> 标签！（具体请看“举个栗子”环节）
6. edit box 的 style 非常ugly！

历史记录 history
================

(none)

举个栗子 example
================

### require

jQuery support

### html code

		<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
		<html>
			<head>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<title>编辑框CTRL-V粘贴图片栗子</title>

				<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
				<script type="text/javascript" src="upBox.js"></script>
				<script type="text/javascript" src="pastePic.js"></script>
		
		
			</head>
		<body>
		
					<div class="edit-box">
				
					</div>
		</body>
		</html>

### js code

		$(document).ready(function(){

			$(".edit-box").upBox();

		});


