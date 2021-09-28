function yech(id){
	if(check[id]==="black"||check[id]==="white"){
		return;
	}
	document.getElementById(id).innerHTML="";
	let add = document.createElement('div');
	if (count % 2 ===0) {
		check[id] = "black";
		add.className="komaBlack";
		document.getElementById(id).append(add);
		turnKoma(id)
	
	}else{
		check[id] = "white";
		add.className="komaWhite";
		document.getElementById(id).append(add);
		turnKoma(id)
	}
	count++;	
}
let count = 0;
let check=[];
//読み込み時に実行
window.onload = function(){
	for (var i = 0; i < 64; i++) {
		check.push("none");
	}
}
//裏返すコマを取得
function turnKoma(place){
	//縦の処理
	let koma = check[place];
	let komaColor;
	let hantaiColor;
	if(koma === "black"){
		komaColor = "black"
		hantaiColor = "white"
	}else if(koma === "white"){
		komaColor = "white";
		hantaiColor = "black"
	}
	let changeKoma=[];
	let ns = place - 8;
	let height = Math.floor(place/8) + 1;
	if(check[ns]===komaColor || check[ns]==="none"){
	}else{
	let count = 0;
		while(height> 0){
			if(check[ns]===hantaiColor){
				changeKoma.push(ns);
				count++;
			}else if(check[ns]==="none"){
				changeKoma.length=0;
				break;
			}else if(check[ns]===komaColor && count !== 0){
				for(let n = 0; n<changeKoma.length; n++){
					document.getElementById(changeKoma[n]).innerHTML="";
					let add = document.createElement('div');
					document.getElementById(changeKoma[n]).append(add);
					if(komaColor === "black"){
						check[changeKoma[n]]="black"
						add.className="komaBlack";
					}else if(komaColor==="white"){
						check[changeKoma[n]]="white"
						add.className="komaWhite"
					}	
				}
				changeKoma.length=0
				break;
			}
			ns -= 8;
			height--;
		}
	}
	let changeKomas = [];
	let number = Number(place);
	let nss=number+8;
	let heights = Math.floor(place/8) + 1;
	if(check[nss]===komaColor||check[nss]==="none"){
	}else{
		let counts = 0;
		while(heights < 9){
			if(check[nss]===hantaiColor){
				changeKomas.push(nss);
				counts++;
			}else if(check[nss]==="none"){
				changeKomas.length=0;
				break;
			}else if(check[nss]===komaColor && counts !== 0){
				for(let n = 0; n<changeKomas.length; n++){
					document.getElementById(changeKomas[n]).innerHTML="";
					let adds = document.createElement('div');
					document.getElementById(changeKomas[n]).append(adds);
					if(komaColor === "black"){
						check[changeKoma[n]]="black"
						adds.className="komaWhite";
					}else if(komaColor ==="white"){
						check[changeKoma[n]]="white";
						adds.className="komaBlack"
					}
				}
				changeKomas.length=0
				break;
			}
			nss += 8;
			heights++;
		}
	}
	//横の処理
	//テスト後に作る
}









