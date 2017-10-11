
function getClass(classname,ranger){

	ranger = ranger ? ranger : document;
	// rager=rager||document;

	if(document.getElementsByClassName){
		return ranger.getElementsByClassName(classname);
	}else{
		var nawarr=[];
		var all=ranger.getElementsByTagName('*');
		for(var i=0;i<all.length;i++){
			// if(all[i].className==classname){
			 if(checkClass(all[i].className,classname)){
				newarr.push(all[i]);
			}
		}
		return newarr;
	}
}
function checkClass(className,classname){
	var arr=className.split(' ');
	for(var i=0;i<arr.length;i++){
		if(arr[i]==classname){
			return true;
		}
	}
	return false;
}
function $(select){
	if(typeof select =='string'){
		
		var first=select.charAt(0);
		if(first=='.'){
			return getClass(select.substring(1));
		}else if(first=='#'){
			return document.getElementById(select.substring(1));
		}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
			return document.getElementsByTagName(select);
		}
		}else if(typeof select=='function'){
			window.addEventListener('load',select);
		}
}





