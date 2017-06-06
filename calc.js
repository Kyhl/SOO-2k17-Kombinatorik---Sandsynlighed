function onLoad() {
	//Recursive();
	Iterative();
}

function Iterative(num){
	var i;
	var num;
	num=parseFloat(document.index.num.value);
	var res1=1;
	if(num == undefined || num == null){
		num = Math.ceil(Math.random()*10);
	}
	if(num == 0 || num == 1){
		res1 = 1;
	}else{
		for(i=1; i<=num; i++){
			res1 = res1*i;
		}
	}
	document.index.resultat1.value=res1;
}