(function($){

  $.fn.upBox = function() { 	
  	//主体功能
  	this.each(function(){ 
  		//获取当前元素
  		var _this = $(this);
  		//将div设置成可编辑状态
  		_this.attr("contentEditable", "true");

  		//监听编辑框粘贴事件
  		_this.on('paste', function(e) {
  			//判断剪切板中Files类型的对象是否存在
			if(e.originalEvent.clipboardData.getData('Files') != undefined) {
    			//获取剪切板内容中的对象
    			var items = e.originalEvent.clipboardData.items;
    			//逐个处理
    			for(var i = 0; i < items.length; i++) {

    				var file = items[i].getAsFile();

    				reader = new FileReader();

 	  				reader.onload = function(e){
        
    	    			var img = new Image();
    	    			//获取图片文件的路径
    	    			img.src = e.target.result;
    	    			//插入到编辑框中
    	    			_this.append(img);
    				};
    				//读取文件
    				reader.readAsDataURL(file);
    			}
    		}
  		});
  	}); 
  };
})( jQuery );
