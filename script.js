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
						check[changeKomas[n]]="black"
						adds.className="komaBlack";
					}else if(komaColor ==="white"){
						check[changeKomas[n]]="white";
						adds.className="komaWhite"
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
	//ADD TO GITHUB IN TERMINAL AND FIGHT THE TEST!!!!!!!!!!
	let changeKom = [];
	let widthRight= Math.floor(Number(place)%8);
	let n;
	let placePuls;
	let siki;
	let i=0;
	placePuls = Math.floor(place) + 1;
	n=8
	siki = `${widthRight < n}`;
	while (i<2) {
		if(i===1){
			placePuls = Math.floor(place) - 1;
			n=0;
			siki = `${widthRight > n}`;
		}
		if(check[placePuls]===komaColor||check[placePuls]==="none"){
		}else{
			let s = 0;
			while(siki){
				console.log(siki)
				if(check[placePuls]===hantaiColor){
					changeKom.push(placePuls);
					s++;
				}else if(check[placePuls]==="none"){
					changeKom.length=0;
					siki=false
					console.log("lkjszd")
					break;
				}else if(check[placePuls]===komaColor && s !== 0){
					for(let n = 0; n<changeKom.length; n++){
						document.getElementById(changeKom[n]).innerHTML="";
						let ad = document.createElement('div');
						document.getElementById(changeKom[n]).append(ad);
						if(komaColor === "black"){
							check[changeKom[n]]="black"
							ad.className="komaBlack";
						}else if(komaColor ==="white"){
							check[changeKom[n]]="white";
							ad.className="komaWhite"
						}
					}
					changeKom.length=0;
					break;
				}
				if (i === 0){
					placePuls++;
					widthRight++;
					siki = `${widthRight < n}`;
					if (siki===false) {
						console.log('fasdasdfas')
					}
				}else{
					placePuls--;
					widthRight--;
					siki = `${widthRight > n}`;
				}
			}
		}
		i++;
	}
	//斜めの処理
}




