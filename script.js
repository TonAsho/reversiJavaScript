let remember = [];
function yech(id){
	if(check[id]==="black"||check[id]==="white"){
		return;
	}
	document.getElementById(id).innerHTML="";
	let add = document.createElement('div');
	remember.push(id);
	if(remember.length>1){
		document.getElementById(remember[remember.length-2]).style.backgroundColor = "lightgreen";
	}
	document.getElementById(remember[remember.length-1]).style.backgroundColor = "rgb(56, 179, 56)";
	if (count % 2 ===0) {
		new Promise(function(resolve, reject){
			check[id] = "black";
			add.className="komaBlack";
			document.getElementById(id).append(add);
			resolve()
		}).then(function(){
			turnKoma(id)
		})
	}else{
		check[id] = "white";
		add.className="komaWhite";
		document.getElementById(id).append(add);
		turnKoma(id)
		broom = false;
	}
	if (remember.length > 59) {
		let black = 0;
		let white = 0;
		check.forEach(item => {
			if(item === "black"){
				black++;
			}else{
				white++;
			}
			if(black > white){
				document.getElementById("winner").innerHTML=`${black} points, black won!!`
				document.getElementById("wrong").innerHTML=`${white} points`
			}else if(white > black){
				document.getElementById("winner").innerHTML=`${white} points white won!!`
				document.getElementById("wrong").innerHTML=`${black} points`
			}else{
				document.getElementById("winner").innerHTML=`${black} points!!`
				document.getElementById("wrong").innerHTML=`${white} points`
			}
		})
	}

	count++;

	createCount=0
	
	createCount=0
}	
let broom = true;
let x = false;
let can = false;
function where(broom){
	let colors;
	if (broom === true) {
		colors = "black"
	}else{
		colors = "white"
	}
	for (let n = 1; n < 65; n++) {
		let checked = check[n];
		check[n] = colors
		x = true;
		
		check[n] = checked;
		x = false;
		can = false;
		
	}
}
let count = 0;
let check=[];
//読み込み時に実行
let checkArrayRight = [];
let checkArrayLeft = [];
window.onload = function(){
	for (var i = 0; i < 64; i++) {
		check.push = "white"
	}
	firstAgain();
	for (let a = 8; a < 65; a+=8) {
		checkArrayRight.push(a)
	}
	for (let c = 1; c < 64; c+=8) {
		checkArrayLeft.push(c)
		
	}
}
function firstAgain(){
	for (let n = 1; n < check.length; n++) {
		const element = check[n];
		let news = document.createElement("div")
		news.innerHTML=""
		if(element === "black"){
			news.className = "komaBlack"
		}else if(element === "white"){
			news.className = "komaWhite"
		}
		document.getElementById(n).append(news)
	}
}
//裏返すコマを取得
function turnKoma(place, x){
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


	tateUp(place, x, hantaiColor, komaColor)
	tateDown(place, x, hantaiColor, komaColor)
	//横の処理
	//ADD TO GITHUB IN TERMINAL AND FIGHT THE TEST!!!!!!!!!!
	// 横の右
	yokoRight(place, koma, hantaiColor);
	// 横の左
	yokoLeft(place, koma, hantaiColor);
	//斜めの処理	
	// 斜めの左上
	nanameUp(place, koma, hantaiColor)
	// 斜めの右下
	nanameDown(place, koma, hantaiColor)
	// 斜めの右上
	nanameRightUp(place, koma, hantaiColor)
	// 斜めの左下
	nanameLeftDown(place, koma, hantaiColor); 
}
function tateUp(place, x, hantaiColor, komaColor){
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
				let adding;
				if(komaColor === "black"){
					adding="komaBlack";
				}else if(komaColor==="white"){
					adding="komaWhite"
				}	
				for(let n = 0; n<changeKoma.length; n++){
					checking.push(1)
					createKoma(changeKoma[n], adding, komaColor, x)
					if(x === true){return}
				}
				changeKoma.length=0
				break;
			}
			ns -= 8;
			height--;
		}
	}
}
function tateDown(place, x, hantaiColor, komaColor){
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
				let add;
				if(komaColor === "black"){
					add="komaBlack";
				}else if(komaColor ==="white"){
					add="komaWhite"
				}
				for(let n = 0; n<changeKomas.length; n++){
					checking.push(2)
					createKoma(changeKomas[n], add, komaColor, x)
					if(x === true){return}
				}
				changeKomas.length=0
				break;
			}
			nss += 8;
			heights++;
		}
	}
}
function yokoRight(id, koma, hantaiColor){
	let komaWidth = Math.floor(id%8);
	let komaHeight = Math.floor(id/8)
	let turnKomaArray = [];
	let count = 0;
	checkArrayRight.forEach(item => {
		if(item === id){
			return
		}
	})
	for (let n = komaWidth+1; n < 9; n++) {
		// prerare ID
		const element = 8 * Number(komaHeight)+Number(n);
		if (count === 0) {
			if (check[element] === "none" || check[element] === koma) {
				return;
			}else{
				turnKomaArray.push(element)
			}
		}else {
			if (check[element]==="none") {
				return;
			}
			if(check[element] === hantaiColor){
				turnKomaArray.push(element)
			}else if (check[element] === koma) {
				for (let num = 0; num < turnKomaArray.length; num++) {
					let komas;
					if (koma === "black") {
						komas = "komaBlack"
					}else{
						komas = "komaWhite"
					}
					checking.push(3)
					createKoma(turnKomaArray[num], komas, koma, x)
					if(x === true){return}
				}
				return;
			}
		}
		count++;
	}
}
function yokoLeft(id, koma, hantaiColor){
	let komaWidth = Math.floor(id%8);
	let komaHeight = Math.floor(id/8);
	if (komaWidth === 0) {
		komaWidth = 8;
		komaHeight--;
	}
	let turnKomaArray = [];
	let count = 0;
	checkArrayLeft.forEach(item => {
		if(item === id){
			return;
		}
	})

	for (let n = komaWidth-1; n > 0; n--) {
		// prerare ID
		const element = 8 * Number(komaHeight) + Number(n);
		if (count === 0) {
			if (check[element] === "none" || check[element] === koma) {
				return;
			}else{
				turnKomaArray.push(element)
			}
		}else {
			if (check[element]==="none") {
				return;
			}
			if(check[element] === hantaiColor){
				turnKomaArray.push(element)
			}else if (check[element] === koma) {
				for (let num = 0; num < turnKomaArray.length; num++) {
					let komas;
					if (koma === "black") {
						komas = "komaBlack"
					}else{
						komas = "komaWhite"
					}
					checking.push(4)
					createKoma(turnKomaArray[num], komas, koma, x)
					if(x === true){return}
				}
				return;
			}else{
			}
		}
		count++;
	}
}
function nanameUp(ids, koma, hantaiColor){
	let komaWidth = Math.floor(ids%8);
	let komaHeight = Math.floor(ids/8)
	let turnKomaArray = [];
	let count = 0;
	let id = Number(ids);

	for (let n = id+9; n < 65; n+=9) {
		// prerare ID
		const element = n;
		for (let x = 0; x < checkArrayRight.length; x++) {
			if (element === checkArrayRight[x]) {
				if (check[element]!==koma) {
					return;
				}
			}		
		}
		if (count === 0) {
			if (check[element] === "none" || check[element] === koma) {
				return;
			}else{
				turnKomaArray.push(element)
			}
		}else {
			if (check[element]==="none") {
				return;
			}
			if(check[element] === hantaiColor){
				turnKomaArray.push(element)
			}else if (check[element] === koma) {
				for (let num = 0; num < turnKomaArray.length; num++) {
					let komas;
					if (koma === "black") {
						komas = "komaBlack"
					}else{
						komas = "komaWhite"
					}
					checking.push(5)
					createKoma(turnKomaArray[num], komas, koma, x)
					if(x === true){return}
				}
				return;
			}
		}
		count++;
	}
}
function nanameDown(ids, koma, hantaiColor){
	let komaWidth = Math.floor(ids%8);
	let komaHeight = Math.floor(ids/8)
	let turnKomaArray = [];
	let count = 0;
	let id = Number(ids);
	for (let n = id-9; n > 0; n-=9) {
		// prerare ID
		const element = n;
		for (let x = 0; x < checkArrayLeft.length; x++) {
			if (element === checkArrayRight[x]) {
				if (check[element]!==koma) {
					return;
				}
			}		
		}
		if (count === 0) {
			if (check[element] === "none" || check[element] === koma) {
				return;
			}else{
				turnKomaArray.push(element)
			}
		}else {
			if (check[element]==="none") {
				return;
			}
			if(check[element] === hantaiColor){
				turnKomaArray.push(element)
			}else if (check[element] === koma) {
				for (let num = 0; num < turnKomaArray.length; num++) {
					let komas;
					if (koma === "black") {
						komas = "komaBlack"
					}else{
						komas = "komaWhite"
					}
					checking.push(6)
					createKoma(turnKomaArray[num], komas, koma, x)
					if(x === true){return}
					
				}
				return;
			}
		}
		count++;
	}
}
function nanameRightUp(ids, koma, hantaiColor){
	let komaWidth = Math.floor(ids%8);
	let komaHeight = Math.floor(ids/8)
	let turnKomaArray = [];
	let count = 0;
	let id = Number(ids);
	for (let n = id+7; n < 65; n+=7) {
		// prerare ID
		const element = n;
		for (let x = 0; x < checkArrayLeft.length; x++) {
			if (element === checkArrayLeft[x]) {
				if (check[element]!==koma) {
					return;
				}
			}		
		}
		if (count === 0) {
			if (check[element] === "none" || check[element] === koma) {
				return;
			}else{
				turnKomaArray.push(element)
			}
		}else {
			if (check[element]==="none") {
				return;
			}
			if(check[element] === hantaiColor){
				turnKomaArray.push(element)
			}else if (check[element] === koma) {
				for (let num = 0; num < turnKomaArray.length; num++) {
					let komas;
					if (koma === "black") {
						komas = "komaBlack"
					}else{
						komas = "komaWhite"
					}
					checking.push(7)
					createKoma(turnKomaArray[num], komas, koma, x)
					if(x === true){return}
					
				}
				return;
			}
		}
		count++;
	}
}
function nanameLeftDown(ids, koma, hantaiColor){
	let komaWidth = Math.floor(ids%8);
	let komaHeight = Math.floor(ids/8)
	let turnKomaArray = [];
	let count = 0;
	let id = Number(ids);
	for (let n = id-7; n > 0; n-=7) {
		// prerare ID
		const element = n;
		for (let x = 0; x < checkArrayLeft.length; x++) {
			if (element === checkArrayRight[x]) {
				if (check[element]!==koma) {
					return;
				}
			}		
		}
		if (count === 0) {
			if (check[element] === "none" || check[element] === koma) {
				return;
			}else{
				turnKomaArray.push(element)
			}
		}else {
			if (check[element]==="none") {
				return;
			}
			if(check[element] === hantaiColor){
				turnKomaArray.push(element)
			}else if (check[element] === koma) {
				for (let num = 0; num < turnKomaArray.length; num++) {
					let komas;
					if (koma === "black") {
						komas = "komaBlack"
					}else{
						komas = "komaWhite"
					}
					checking.push(8)
					createKoma(turnKomaArray[num], komas, koma)
					if(x === true){return}
					
				}
				return;
			}
		}
		count++;
	}
}
let checking = [];
function createKoma(id, classNames, colorKoma, x){
	if (x === true) {
		can = true;
		changeStyles(id)
		return;
	}
	check[id] = colorKoma
	document.getElementById(id).innerHTML = "";
	let addNew = document.createElement("div")
	addNew.className = classNames;
	let color;
	let hantai;
	if (colorKoma === "black") {
		color = "white"
		hantai = "black"
	}else{
		color = "black"
		hantai = "white"
	}
	addNew.style.backgroundColor = `${color}`;
	addNew.style.animation = "animations forwards 0.5s ease-out";
	setTimeout(() => {
		addNew.style.backgroundColor = `${hantai}`
	}, 200);
	document.getElementById(id).append(addNew);
}
function changeStyles(ids){
	let id = ids;
	checking.forEach(item => {
		switch (item) {
			case 1:
				id += 8
				break;
			case 2:
				id -= 8
				break;
			case 3:
				id -=1
				break;
			case 4:
				id += 1
				break;
			case 5:
				id -= 9
				break;
			case 6:
				id += 9
				break;
			case 7:
				id -= 7
				break;
			case 8:
				id += 7
			default:
				return;
		}
		document.getElementById(id).innerHTML="id"
	})
	
}








