(function($){

  $.fn.upBox = function(options) {  

    //参数
    var defaults = {    

      width : '35%',                //编辑框宽度
      height : '240px',             //编辑框高度
      border : '1px dashed grey',    //编辑框边框

      uploadUrl : ''                //处理ajax上传的路径
    };    
    var opts = $.extend(defaults, options); 

    //主体功能
    this.each(function(){ 
      //获取当前元素
      var _this = $(this);
      //将div设置成可编辑状态
      _this.attr("contentEditable", "true");

      //设置样式
      _this.attr("style", "width:" + opts.width + ";"
                        + "height:" + opts.height + ";" 
                        + "border:" + opts.border + ";");

      var img = new Image();
      //监听编辑框粘贴事件
      _this.on('paste', function(e) {
        //判断剪切板中Files类型的对象是否存在
      if(e.originalEvent.clipboardData.getData('Files') != undefined) {
          //获取剪切板内容中的对象
          var items = e.originalEvent.clipboardData.items;
          //逐个处理
          for(var i = 0; i < items.length; i++) {

            var file = items[i].getAsFile();  //获取文件

            //获取图片文件的路径
            fileHandler(file, img);

            //图像缩放
            img.width = 50;
            img.height = 50;
            
            
            //将图片插入编辑框
            _this.append(img);
          }
        }
      });

      return img;
    }); 

    function fileHandler(file, img) {
            //读取文件
            var fileReader = new FileReader();
 
            fileReader.readAsDataURL(file);
            //创建xmlHttpRequest对象
            var xmlHttpRequest = new XMLHttpRequest();
            //xmlHttpRequest open操作
            xmlHttpRequest.open("POST", options.uploadUrl, true);
            //针对Firefox
            if (file.getAsBinary) {

            //     var data = dashes + boundary + crlf +
            //         "Content-Disposition: form-data;" +
            //         "name=\"" + "test" + "\";" +
            //         "filename=\"" + unescape(encodeURIComponent(file.name)) + "\"" + crlf +
            //         "Content-Type: application/octet-stream" + crlf + crlf +
            //         file.getAsBinary() + crlf +
            //         dashes + boundary + dashes 

            //     xmlHttpRequest.setRequestHeader("Content-Type", "multipart/form-data;boundary=" + boundary);
         
                xmlHttpRequest.sendAsBinary(data);
            //针对Chrome
            } else if (window.FormData) { // Chrome
                //获取数据
                var formData = new FormData();
                //将文件加入数据
                formData.append("file", file);
                //发送
                xmlHttpRequest.send(formData);
                //监听发送状态
                xmlHttpRequest.onreadystatechange = function(){
　　　　　　      //发送成功
                  if ( xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200 ) {
                    //获取文件在服务器的保存地址
                    img.src = xmlHttpRequest.responseText;
　　　　　　      
                  }
　　　　       };
            }
        }
  };
})( jQuery );
