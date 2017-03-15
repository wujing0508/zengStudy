
// 
(function(window){
 var ZENGW;
 // 自定义函数
 ZENGW=function(str){
 	return new ZENGW.fn.init(str);
 }
 // ZENGW 的原型赋值 为一个对象
 ZENGW.fn=ZENGW.prototype={
 	//  初始化
 	init:function(str){
 		// 开始解析传进来的参数1！！
 		// 例如 #div  .div 
 		// 但是还有 #div span>
 		// 就做了 #div div div
 		// 方式用户输入多余的空格先去出前后的空格！
 		var argm=ZENGW.fn.trim(str);
 		// 把多个空格合成一个空格！
 		var merge=ZENGW.fn.mergeTrim(argm);
 		// 这里只是处理后代选择器！！获取id class 
 		var elementList=argm.split(" ");
 		var parentDom=[];
 		var resultsData=[document];
 		// 要的是传入最后元素 返回的是数组
 		for(var j=0;j<elementList.length;j++){
 			parentDom=resultsData;
 			resultsData=[];
	 		for (var i = 0; i < parentDom.length; i++) {
		 		// 如果带有# 是id
		 		if (/^#/.test(elementList[j])) {
		 			var temp=parentDom[i].getElementById(elementList[j].replace(/^#/,""));
		 			resultsData.push(temp);
		 		// 类
		 		}else if(/^\./.test(elementList[j])){
		 			console.log("class");
		 			// 此处没有考虑兼容
		 			var temp=parentDom[i].querySelectorAll(elementList[j]);
		 			for (var i = 0; i < temp.length; i++) {
		 				resultsData.push(temp[i]);
		 			}
		 		// 属性
		 		}else{
					console.log("css");
					var temp=parentDom[i].getElementsByTagName(elementList[j]);
					// getElementsByTagName 本身返回的就是一个类数组
					for (var i = 0; i < temp.length; i++) {
						resultsData.push(temp[i]);
					};
		 		}	
	 		}
 		}
 		return resultsData;
 	},
 	//  去除首尾的空格
 	trim:function(str){
 		return  str.replace(/^\s+|\s+$/g ,"");
 	},
 	// 把多个空格合成一个
 	mergeTrim:function(str){
 		return  str.replace(/\s+/g ," ");
 	},
 	first:function(){
 		console.log(this);
 	}
 }






 window.$=window.ZW=ZENGW;

})(window);


