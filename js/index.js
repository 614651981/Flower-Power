window.onload=function(){

	window.onscroll=function(){
		// 鼠标滑动,导航固定
		let header=document.querySelector('header');
		let scrolltop=document.body.scrollTop;
		header.style.position='fixed';
		header.style.background='#fff';
		header.style.top=0;
		header.style.zIndex=100;
		if(scrolltop<=50){
			header.style.position='';
		}


		let head=document.querySelector('.head');
		head.style.position='fixed';
		head.style.background='#fff';
		head.style.top=0;
		head.style.zIndex=100;
		if(scrolltop<=50){
			head.style.position='';
		}
	}



	// 最新优惠遮罩显示
	let lis=document.querySelectorAll('.products');
	console.log(lis)
	let zhezhaos=document.querySelectorAll(".zhezhao");
	console.log(zhezhaos)
	let zzs=document.querySelectorAll(".zz");
	lis.forEach((element,index)=>{
				element.onmouseover=function(){
					for(let i=0;i<zhezhaos.length;i++){
						zhezhaos[index].style.display="block";
					}
				}
				element.onmouseout=function(){
					for(let i=0;i<zhezhaos.length;i++){
						zhezhaos[index].style.display="none";
					}
				}

	})

 	
 	//点击侧导航，收起内容显示
 	let shou=document.querySelectorAll(".head .iconfont ")[0];
 	console.log(shou)
 	let aside=document.querySelector(".section-aside");
 	console.log(aside);
 	shou.onclick=function(){
 		aside.style.display="block";
 	}
 	aside.ondblclick=function(){
 		aside.style.display="none";
 	}


 	// banner大图轮播
 	

 	let imglistli=document.querySelectorAll(".big-img > ul > li img");
 	console.log(imglistli)
 	
 	let t=setInterval(move,3000);
	let num=0;
	function move(){
		num++;
		if(num==imglistli.length){
			num=0;
		}
		for(let i=0;i<imglistli.length;i++){
				imglistli[i].style.display='none';
			}
			imglistli[num].style.display='block';
			
	}
	function moveL(){
		num--;
   		if(num<0){
			num=imglistli.length-1;
		}
		for(let i=0;i<imglistli.length;i++){
				imglistli[i].style.display='none';

		}
		imglistli[num].style.display='block';
		
	}



}
