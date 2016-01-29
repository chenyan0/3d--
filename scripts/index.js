window.onload=function(){
	// 基础部分的 数据存储 逻辑操作
	// javascript特定用途部分 必须能做到的事 
	// 能表达页面中的任何元素
	// (所有的页面元素对象都都定义在window这个对象中)
	// 选取页面中的元素
	var el=document.getElementById('test');
	

	el.style.marginLeft='';
	// els是一个类数组
	console.log(els);

	// 获取元素的信息 
	// 和浏览器配合通过对元素的属性进行操作改变元素的样式
	// 对元素进行操作


// ------------------------------3d轮播------------------------------------------
	// 选取元素的api
	// document.getElementById('')会得到单个元素
	// document.getElementsByClass('')会得到一个元素的集合，类似数组
	// 给元素添加样式的api
	// xx.style.webKitTransform='translate3d(0,0,0)';
	// var data=[{x:-300,z:-400},{x:-200,z:-200},{x:0,z:0},{x:200,z:-200},{x:300,z:-400}];
	// 利用document.getElementByClassName 得到所有的面
	// 写一个函数给所有的面 按照顺序分别添加数组中的样式，面有5个，数组中正好也是5个数据
	// 函数每调用一次，就把数组中最后一个元素放到开头
	// 再次调用函数，就会看到面的变化
	
	var els=document.getElementsByClassName('kuang');
	data=[
		{translateX:'-400px',translateZ:'-500px'},
		{translateX:'-200px',translateZ:'-250px'},
		{translateX:'0',translateZ:'0'},
		{translateX:'200px',translateZ:'-250px'},
		{translateX:'400px',translateZ:'-500px'}
		],
	Index=[1,2,3,2,1];
	lunbo=function(){
		for(var i=0;i<els.length;i++){
			els[i].style.backgroundImage='url(./images/'+(i+1)+'.jpg)';
			els[i].style.backgroundSize='cover';
			els[i].style.webkitTransform='translate3d('+data[i].translateX+',0,'+data[i].translateZ+')';
			els[i].style.zIndex=Index[i];
		}
		data.push(data.shift());
		Index.push(Index.shift());
		
	};
	lunbo();
	setInterval(lunbo,4000);



// ----------------------------------总结---------------------------

	//var el=document.getElementById();
	// var els=document.getElementsByClassName();

	// el.style.marginLeft='';  
	// el.innerHTML='xx'  换内容

	// setInterval(fn,1000);
	// el.onclick=function(){
	// 	console.log(this.innerHTML);
	// };


	// var cc=document.getElementsByClassName('kuang');
	// cc[0].onclick=function(){
	// 	alert(this.innerHTML);
	// };
	//这个函数接受两个参数，第一个参数是一个回调函数，第二个参数是时间，
	// 函数的功能是 每隔s 就自动帮我们调用一次传入的回调函数
	
	// els[1].style.backgroundColor='blue';
	// els[2].style.backgroundColor='blue';
	// els[3].style.backgroundColor='blue';
	// els[4].style.backgroundColor='blue';
	// 并不是所有的对象都有style这个属性
	// 和浏览器配合监测用户的行为（事件）
	// 












	
	
	
};