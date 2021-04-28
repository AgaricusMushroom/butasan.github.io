var heikin = new Array();
var heikincount = 0;
var heikinsentaku = new Array();
var heikinsentakucount = 0;
var img = new Array();
var timeA = 0;
var talon1 = new Array();
var talon2 = new Array();
var hand1 = new Array();
var hand2 = new Array();
var handdisp1 = new Array();
var handdisp2 = new Array();
var left = -1;
var right = -1;
var buttonflg = true;
var i;
var j;
var move;
var talon1rem = 0;
var talon2rem = 0;
var thinkstop = false;
var notclick = true;
var gamestart = false;
var result = 0;
var end = -1;
var click_type=1;
var endflg = 0;
var thinking = 0;
var stoping = 0;
var dispdif = 0;
var drag_click = false;
var hinting = 0;
var restart_speed = 50;  //仕切り直しのカードを出す速度(*10ミリ)
var imgCard = null;
var facetype = 0;
var chaindisp = null;
var lead_KA = true;
// ドラッグして画像を移動する
x = 50; // マウスと画像の縦方向の距離
y = 75; // マウスと画像の横方向の距離
imgx = 100;  //画像のＸ
imgy = 150;  //画像のＹ
flag = false;
kasanari = "無し";
 window.document.onmousemove = dragImg;
 window.document.onmouseup = dragOff;

  window.onmousemove = handleMouseMove;
  function handleMouseMove(event) {  //マウスの座標取得
      e = event || window.event; // IE対応
      //document.body.innerHTML = event.clientX + ", " + event.clientY;
  }

function setChain(){
	chain++;
	clearInterval(chaindisp);
	chaincount = 0;
	chainI.style.display = "none";
	if(chain > 9) chain = 9;
	if(chain > 0){
		chainI.src = chain+ "Chain.png";
		chainI.style.opacity = 0.0;
		chainI.style.display = "inline";
		chaindisp = setInterval("chainOut()",10);
	}
}

function chainOut(){
	chaincount++;
	if(chaincount <= 10){
		chainI.style.opacity = chaincount / 10;
	}
	if(chaincount >= 100){
		chainI.style.opacity = ( 110 - chaincount ) / 10;
	}
	if(chaincount >= 110){
		chainI.style.display = "none";
		clearInterval(chaindisp);
	}
}
		

function faceChange(value){
	facetype = 0;
	var my = 0;
	var en = 0;
	var i;
	if(value == 1){
		facetype = 3;
	} else {
		for(i = 1; i < 5; i++){
			if(hand1[i] != -1){
				my++;
			}
		}
		my += talon1rem;
		for(i = 5; i < 9; i++){
			if(hand2[i] != -1){
				en++;
			}
		}
		en += talon2rem;
		if(my < en){
			facetype = 2;
		} else if(en < my){
			facetype = 1;
		}
	}
	face2.src = "" +dispdif+facetype+ ".png";
}

function typeChange(){  //タイプチェンジ
	if(click_type == 1){  //ドラッグタイプだったら
		click_type = 2;  //クリックタイプに変更
		document.getElementById("type").src = "type2.png";
	} else {  //クリックタイプだったら
		click_type = 1;  //ドラッグタイプに変更
		document.getElementById("type").src = "type1.png";
	}
	localStorage.setItem("AgaricusSpeedOption", click_type);
}

function leadChange(){  //ＫとＡの繋がりを変更
	if(lead_KA == true){
		lead_KA = false;
		document.getElementById("typelead").src = "lead12.png";
		localStorage.setItem("AgaricusSpeedOptionLead", "false");
	} else {
		lead_KA = true;
		document.getElementById("typelead").src = "lead11.png";
		localStorage.setItem("AgaricusSpeedOptionLead", "true");
	}
}

function skip(){  //リザルト画面クリックの処理
	if(end == -1) return;
	if(end == 0){  //リザルトがまだ流れてる最中なら、カットして一気に表示する
		clearInterval(timer5);
		score = 0;
		disprem = 0;
		for(i = 1; i < 5; i++){
			if(hand1[i] != -1){
				disprem++;
			}
		}
		disprem += talon1rem;
		score -= disprem * 100;
		textID = document.getElementById("result1");
		textID.innerText = "　あなたの残りの手札：" +disprem+ "枚";
		textID.style.left = "0px";
		textID.style.top = "80px";
		disprem = 0;
		for(i = 5; i < 9; i++){
			if(hand2[i] != -1){
				disprem++;
			}
		}
		disprem += talon2rem;
		score += disprem * 100;
		textID = document.getElementById("result2");
		textID.innerText = "　COM(Lv" +dispdif+ ")の残りの手札：" +disprem+ "枚";
		textID.style.left = "0px";
		textID.style.top = "130px";
		disprem = 0;
		for(i = 0; i < heikincount; i++){
			disprem+= heikin[i];
		}
		disprem /= heikincount;
		disprem = Math.round(disprem);
		disprem /= 1000;
		textID = document.getElementById("result3");
		textID.innerText = "　平均カードセット時間：" +disprem+ "秒";
		textID.style.left = "0px";
		textID.style.top = "180px";
		disprem = 0;
		for(i = 0; i < heikinsentakucount; i++){
			disprem+= heikinsentaku[i];
		}
		disprem /= heikinsentakucount;
		disprem = Math.round(disprem);
		disprem /= 1000;
		textID = document.getElementById("result4");
		textID.innerText = "　平均判断時間：" +disprem+ "秒";
		textID.style.left = "0px";
		textID.style.top = "230px";
		disprem = 0;
		for(i = 0; i < heikincount; i++){
			disprem+= heikin[i];
		}
		disprem /= heikincount;
		disprem = parseInt(disprem);
		if(disprem < 1000) score = score + 1000 - disprem;
		disprem = 0;
		for(i = 0; i < heikinsentakucount; i++){
			disprem+= heikinsentaku[i];
		}
		disprem /= heikinsentakucount;
		disprem = parseInt(disprem);
		if(disprem < 1500) score = score + 1500 - disprem;
		score += inter * 50;
		if(score > 3500) {
			disprem = "ＳＳＳ";
		} else if(score > 3000) {
			disprem = "ＳＳ";
		} else if(score > 2500) {
			disprem = "Ｓ";
		} else if(score > 2000) {
			disprem = "Ａ";
		} else if(score > 1500) {
			disprem = "Ｂ";
		} else if(score > 1000){
			disprem = "Ｃ";
		} else if(score > 500){
			disprem = "Ｄ";
		} else {
			disprem = "Ｅ";
		}
		textID = document.getElementById("result6");
		textID.innerText = "　総合ランク：" +disprem;
		textID.style.left = "0px";
		textID.style.top = "280px";
		textID = document.getElementById("winlose");
		if(result == 0){
			textID.src = "draw.png";
			textID.style.left = "229px";
		} else if(result == 1){
			textID.src = "win.png";
			textID.style.left = "156px";
		} else {
			textID.src = "lose.png";
			textID.style.left = "142px";
		}
		textID.style.top = "370px";
		textID = document.getElementById("result5");
		textID.innerText = "画面をクリックするとタイトルに戻ります。";
		textID.style.left = "0px";
		textID.style.top = "468px";
		end = 1;
	} else {  //リザルトが流れ終わっていたら、タイトルに戻す
		gameset();
	}
}

function averageReset(){  //判断速度の設定処理
	if(!gamestart) return;
	for(e = 1; e < 5; e++){
		if(handdisp1[e] == left - 1 || handdisp1[e] == left + 1){
			if(timeA == 0){
				var date = new Date();
	 			timeA = date.getTime();
			}
			return;
		}
		if(lead_KA && ((handdisp1[e] == 1 && left == 13) || (handdisp1[e] == 13 && left == 1))){
			if(timeA == 0){
				var date = new Date();
	 			timeA = date.getTime();
			}
			return;
		}
		if(handdisp1[e] == right - 1 || handdisp1[e] == right + 1){
			if(timeA == 0){
				var date = new Date();
	 			timeA = date.getTime();
			}
			return;
		}
		if(lead_KA && ((handdisp1[e] == 1 && right == 13) || (handdisp1[e] == 13 && right == 1))){
			if(timeA == 0){
				var date = new Date();
	 			timeA = date.getTime();
			}
			return;
		}
	}
	timeA = 0;
}

function cardClick(no){  //カードをクリックした時の処理
	if(!gamestart) return;
	selectCard = document.getElementById("select");
	if(no == 0){
		drag_click = false;
		imgCard = null;
		selectCard.style.left = "-100px";
		selectCard.src = "";
	} else {
		if(click_type != 2) return;
		hinting = 0;
		drag_click = true;
		var date = new Date();
		time1 = date.getTime();
		if(timeA != 0){
	 		timeB = date.getTime();
		} else {
			timeB = 0;
		}
		imgCard = document.getElementById("img" + no);
		selectCard.style.left = parseInt(imgCard.offsetLeft,10) - 5 +"px";
		selectCard.style.top = parseInt(imgCard.offsetTop,10) - 5 +"px";
		selectCard.src = "selectcard.png";
	}
}

function BAClick(bano){  //台札をクリックした時の処理
	if(!gamestart) return;
	if(click_type != 2) return;
	if(notcardClick == false){
		if(selectCard != null){
			card = imgCard;
			if(bano == 1){
				check = document.getElementById("BAleft");
				Check("左");
			}	 else {
				check = document.getElementById("BAright");
				Check("右");
			}
		}
	}
}

function gameset(){  //タイトルに戻す処理
	cardClick(0);
	notcardClick = true;
	end = 2;
	left = -1;
	right = -1;
	buttonflg = true;
	talon1rem = 0;
	talon2rem = 0;
	thinkstop = false;
	notclick = true;
	gamestart =false;
	for(i = 1; i < 27; i++){
		talon1[i] = -1;
		talon2[i] = -1;
	}
	for(i = 1; i < 5; i++){
		hand1[i] = -1;
		handdisp1[i] = -1;
	}
	for(i = 5; i < 9; i++){
		hand2[i] = -1;
		handdisp2[i] = -1;
	}
	dispdif = 0;
	document.getElementById("easy").style.display = "inline";
	document.getElementById("normal").style.display = "inline";
	document.getElementById("hard").style.display = "inline";
	document.getElementById("savage").style.display = "inline";
	document.getElementById("savage2").style.display = "inline";
	document.getElementById("type").style.display = "inline";
	document.getElementById("optext").style.display = "inline";
	document.getElementById("typeback").style.display = "inline";
	document.getElementById("typelead").style.display = "inline";
	document.getElementById("title").style.display = "inline";
	document.getElementById("agaricus").style.display = "inline";
	document.getElementById("stop").style.left = "701px";
	document.getElementById("result0").style.left = "701px";
	document.getElementById("result1").style.left = "701px";
	document.getElementById("result2").style.left = "701px";
	document.getElementById("result3").style.left = "701px";
	document.getElementById("result4").style.left = "701px";
	document.getElementById("result5").style.left = "701px";
	document.getElementById("result6").style.left = "701px";
	document.getElementById("winlose").style.left = "701px";
	document.getElementById("winlose").src = "";
	document.getElementById("myRem").innerText = "";
	document.getElementById("enRem").innerText = "";
	document.getElementById("BAleft").style.display = "none";
	document.getElementById("BAright").style.display = "none";
	document.getElementById("deck1").style.display = "none";
	document.getElementById("deck2").style.display = "none";
	document.getElementById("deckM1").style.display = "none";
	document.getElementById("deckM2").style.display = "none";
	document.getElementById("img1").style.display = "none";
	document.getElementById("img2").style.display = "none";
	document.getElementById("img3").style.display = "none";
	document.getElementById("img4").style.display = "none";
	document.getElementById("img5").style.display = "none";
	document.getElementById("img6").style.display = "none";
	document.getElementById("img7").style.display = "none";
	document.getElementById("img8").style.display = "none";
	document.getElementById("myRem").style.display = "inline";
	document.getElementById("enRem").style.display = "inline";
	document.getElementById("dammy").style.display = "none";
	if(window.localStorage) {  //ローカルストレージに対応してる？
		document.getElementById("senrekiT").style.display = "inline";
		document.getElementById("senreki").style.display = "inline";
		document.getElementById("senrekiB").style.display = "inline";
	}
	heikincount = 0;
	heikinsentakucount = 0;
	timeA = 0;
}

function dragOn(n) {  //ドラッグ開始処理
	 if(!gamestart) return;
	 if(click_type==1){
		hinting = 0;
		document.getElementById("select").style.left = "701px";
		drag_click = true;
 	 	flag = true; 
  	 	imgName = "img" + n;
	 	var date = new Date();
		time1 = date.getTime();
	 	if(timeA != 0){
	 	timeB = date.getTime();
	 	} else {
			timeB = 0;
		 }
	 	document.getElementById(imgName).style.zIndex = 2;
	 } else {
		cardClick(n);
	 }
}
 function dragOff() {  //ドロップしたときの処理
	deSelect();
	if(click_type != 1) return;
	if(!gamestart) return;
	if(imgName == null) return;
	hinting = 0;
	drag_click = false;
	flag = false;
	document.getElementById(imgName).style.zIndex = 0;
	kasanari = "無し";
	card=document.getElementById(imgName); 
	var str = card.id;
	var str2 = str.replace(/[^0-9^\.]/g,""); 
	soeji = parseInt(str2,10);
	if(hand1[soeji] != -1){
		//動かしたカードの座標を取得
		cardX=parseInt(document.images[imgName].style.left,10);
		cardY=parseInt(document.images[imgName].style.top,10);
		//場のカードの座標（左側）を取得
		check = document.getElementById("BAleft");
		checkX=parseInt(document.getElementById("BAleft").offsetLeft,10);
		checkY=parseInt(document.getElementById("BAleft").offsetTop,10);
		if((cardX >= checkX -100 && cardX <= checkX + 100) && (cardY >= checkY -150 && cardY <= checkY + 150)){  //左側にかすっていたら
			kasanari = "左";
			Check(kasanari);
		} else {  //左側とは合わなかったら
			//場のカードの座標（右側）を取得
			check = document.getElementById("BAright");
			checkX=parseInt(document.getElementById("BAright").offsetLeft,10);
			checkY=parseInt(document.getElementById("BAright").offsetTop,10);
			if((cardX >= checkX -100 && cardX <= checkX + 100) && (cardY >= checkY -150 && cardY <= checkY + 150)){  //右側にかすっていたら
				kasanari = "右";
				Check(kasanari);
			} else {  //どっちも合わなかったら
			cardID = document.getElementById("img" + soeji);
			cardID.style.top = "430px";
			cardID.style.left = soeji * 120 + 70 +"px";
			}
		}
	}
}

 function Check(area){  //自分側の場判定
	drag_click = false;
	hinting = 0;
	var str = card.id;
	var str2 = str.replace(/[^0-9^\.]/g,""); 
	soeji = parseInt(str2,10);
	if(area == "左"){
		if(handdisp1[soeji] == left - 1 || handdisp1[soeji] == left + 1){
			setChain();
			var date = new Date();
	 		time2 = date.getTime();
			heikin[heikincount] = time2-time1;
			heikincount++;
			if(timeB != 0){
				heikinsentaku[heikinsentakucount] = timeB-timeA;
				heikinsentakucount++;
			}
			card.style.top = "-200px";  //邪魔にならないよう、動かしたカードは外に待避
			card.style.left = "-200px";
			check.src = card.src;  //場のカードの要素を動かしたカードの要素に上書き
			card.src = "";  //動かしたカードの要素を消す
			left = handdisp1[soeji];
			hand1[soeji] = -1;
			handdisp1[soeji] = -1;
			imgCard = null;
			if(click_type == 2){
				selectCard.style.left = "-100px";
				selectCard.src = "";
			}
			if(endflg == 0 && hand1[1] == -1 && hand1[2] == -1 && hand1[3] == -1 && hand1[4] == -1 && talon1rem == 0){
				endflg = 1;
				clearInterval(timer2);
				thinkstop = false;
			}
			if(targetset == 1){
				thinking = 0;
				targetset = 0;
				inter++;
				faceChange(1);
			} else if(facetype == 3){
				faceChange(0);
			}
			timeA = 0;
			averageReset();
			return;
		}
		if(lead_KA && ((handdisp1[soeji] == 1 && left == 13) || (handdisp1[soeji] == 13 && left == 1))){
			setChain();
			var date = new Date();
	 		time2 = date.getTime();
			heikin[heikincount] = time2-time1;
			heikincount++;
			if(timeB != 0){
				heikinsentaku[heikinsentakucount] = timeB-timeA;
				heikinsentakucount++;
			}
			card.style.top = "-200px";  //邪魔にならないよう、動かしたカードは外に待避
			card.style.left = "-200px";
			check.src = card.src;  //場のカードの要素を動かしたカードの要素に上書き
			card.src = "";  //動かしたカードの要素を消す
			left = handdisp1[soeji];
			hand1[soeji] = -1;
			handdisp1[soeji] = -1;
			imgCard = null;
			if(click_type == 2){
				selectCard.style.left = "-100px";
				selectCard.src = "";
			}
			if(endflg == 0 && hand1[1] == -1 && hand1[2] == -1 && hand1[3] == -1 && hand1[4] == -1 && talon1rem == 0){
				endflg = 1;
				clearInterval(timer2);
				thinkstop = false;
			}
			if(targetset == 1){
				thinking = 0;
				targetset = 0;
				inter++;
				faceChange(1);
			} else if(facetype == 3){
				faceChange(0);
			}
			timeA = 0;
			averageReset();
			return;
		}
			timeA = 0;
			averageReset();
			cardID = document.getElementById("img" + soeji);
			cardID.style.top = "430px";
			cardID.style.left = soeji * 120 + 70 +"px";
	} else {
		if(handdisp1[soeji] == right - 1 || handdisp1[soeji] == right + 1){
			setChain();
			var date = new Date();
	 		time2 = date.getTime();
			heikin[heikincount] = time2-time1;
			heikincount++;
			if(timeB != 0){
				heikinsentaku[heikinsentakucount] = timeB-timeA;
				heikinsentakucount++;
			}
			card.style.top = "-200px";
			card.style.left = "-200px";
			check.src = card.src;  //場のカードの要素を動かしたカードの要素に上書き
			card.src = "";  //動かしたカードの要素を消す
			right = handdisp1[soeji];
			hand1[soeji] = -1;
			handdisp1[soeji] = -1;
			imgCard = null;
			if(click_type == 2){
				selectCard.style.left = "-100px";
				selectCard.src = "";
			}
			if(endflg == 0 && hand1[1] == -1 && hand1[2] == -1 && hand1[3] == -1 && hand1[4] == -1 && talon1rem == 0){
				endflg = 1;
				clearInterval(timer2);
				thinkstop = false;
			}
			if(targetset == 2){
				thinking = 0;
				targetset = 0;
				inter++;
				faceChange(1);
			} else if(facetype == 3){
				faceChange(0);
			}
			timeA = 0;
			averageReset();
			return;
		}
		if(lead_KA && ((handdisp1[soeji] == 1 && right == 13) || (handdisp1[soeji] == 13 && right == 1))){
			setChain();
			var date = new Date();
	 		time2 = date.getTime();
			heikin[heikincount] = time2-time1;
			heikincount++;
			if(timeB != 0){
				heikinsentaku[heikinsentakucount] = timeB-timeA;
				heikinsentakucount++;
			}
			card.style.top = "-200px";
			card.style.left = "-200px";
			check.src = card.src;  //場のカードの要素を動かしたカードの要素に上書き
			card.src = "";  //動かしたカードの要素を消す
			right = handdisp1[soeji];
			hand1[soeji] = -1;
			handdisp1[soeji] = -1;
			imgCard = null;
			if(click_type == 2){
				selectCard.style.left = "-100px";
				selectCard.src = "";
			}
			if(endflg == 0 && hand1[1] == -1 && hand1[2] == -1 && hand1[3] == -1 && hand1[4] == -1 && talon1rem == 0){
				endflg = 1;
				clearInterval(timer2);
				thinkstop = false;
			}
			if(targetset == 2){
				thinking = 0;
				targetset = 0;
				inter++;
				faceChange(1);
			} else if(facetype == 3){
				faceChange(0);
			}
			timeA = 0;
			averageReset();
			return;
		}
			timeA = 0;
			averageReset();
			cardID = document.getElementById("img" + soeji);
			cardID.style.top = "430px";
			cardID.style.left = soeji * 120 + 70 +"px";
	}
 }

function CheckE(areaE,cardEID){  //敵の場判定
	var str = cardEID.id;
	var str2 = str.replace(/[^0-9^\.]/g,""); 
	soeji = parseInt(str2,10);
	if(areaE == "左"){
		check = document.getElementById("BAleft");
		if(handdisp2[soeji] == left - 1 || handdisp2[soeji] == left + 1){
			cardEID.style.top = "-200px";
			cardEID.style.left = "-200px";
			check.src = cardEID.src;  //場のカードの要素を動かしたカードの要素に上書き
			cardEID.src = "";  //動かしたカードの要素を消す
			left = handdisp2[soeji];
			hand2[soeji] = -1;
			handdisp2[soeji] = -1;
			thinkstop = false;
			chain = -1;
			if(endflg == 0 && hand2[5] == -1 && hand2[6] == -1 && hand2[7] == -1 && hand2[8] == -1 && talon2rem == 0) endflg = 2;
			averageReset();
			return;
		}
		if(lead_KA && ((handdisp2[soeji] == 1 && left == 13) || (handdisp2[soeji] == 13 && left == 1))){
			cardEID.style.top = "-200px";
			cardEID.style.left = "-200px";
			check.src = cardEID.src;  //場のカードの要素を動かしたカードの要素に上書き
			cardEID.src = "";  //動かしたカードの要素を消す
			left = handdisp2[soeji];
			hand2[soeji] = -1;
			handdisp2[soeji] = -1;
			thinkstop = false;
			chain = -1;
			if(endflg == 0 && hand2[5] == -1 && hand2[6] == -1 && hand2[7] == -1 && hand2[8] == -1 && talon2rem == 0) endflg = 2;
			averageReset();
			return;
		}
			inter++;
			faceChange(1);
			cardEID.style.top = "20px";
			cardEID.style.left = 530 - ( soeji - 4 ) * 120 +"px";
			thinkstop = false;
	} else {
		check = document.getElementById("BAright");
		if(handdisp2[soeji] == right - 1 || handdisp2[soeji] == right + 1){
			cardEID.style.top = "-200px";
			cardEID.style.left = "-200px";
			check.src = cardEID.src;  //場のカードの要素を動かしたカードの要素に上書き
			cardEID.src = "";  //動かしたカードの要素を消す
			right = handdisp2[soeji];
			hand2[soeji] = -1;
			handdisp2[soeji] = -1;
			chain = -1;
			if(endflg == 0 && hand2[5] == -1 && hand2[6] == -1 && hand2[7] == -1 && hand2[8] == -1 && talon2rem == 0) endflg = 2;
			thinkstop = false;
			averageReset();
			return;
		}
		if(lead_KA && ((handdisp2[soeji] == 1 && right == 13) || (handdisp2[soeji] == 13 && right == 1))){
			cardEID.style.top = "-200px";
			cardEID.style.left = "-200px";
			check.src = cardEID.src;  //場のカードの要素を動かしたカードの要素に上書き
			cardEID.src = "";  //動かしたカードの要素を消す
			right = handdisp2[soeji];
			hand2[soeji] = -1;
			handdisp2[soeji] = -1;
			chain = -1;
			if(endflg == 0 && hand2[5] == -1 && hand2[6] == -1 && hand2[7] == -1 && hand2[8] == -1 && talon2rem == 0) endflg = 2;
			thinkstop = false;
			averageReset();
			return;
		}
			inter++;
			faceChange(1);
			cardEID.style.top = "20px";
			cardEID.style.left = 530 - ( soeji - 4 ) * 120 +"px";
			thinkstop = false;
	}
}
	

 function dragImg() {  //ドラッグ中の座標処理
   if(click_type != 1) return;
   if(!flag) return;
   if(!gamestart) return;
   if(notclick) return;
   var dElm = document.documentElement , dBody = document.body ;
   var nX = dElm.scrollLeft || dBody.scrollLeft ;	// 現在位置のX座標
   var nY = dElm.scrollTop || dBody.scrollTop ;		// 現在位置のY座
   //枠からはみ出さないように調整してます
   document.images[imgName].style.top = nY + e.clientY - y - document.getElementById("main").offsetTop;
   document.images[imgName].style.left = nX + e.clientX - x - document.getElementById("main").offsetLeft;
   if(parseInt(document.images[imgName].style.top,10) < 0) document.images[imgName].style.top = 0 +"px";
   if(parseInt(document.images[imgName].style.left,10) < 0) document.images[imgName].style.left = 0 +"px";
   if(parseInt(document.images[imgName].style.top,10) > parseInt(document.getElementById("main").offsetHeight,10) - imgy) document.images[imgName].style.top = parseInt(document.getElementById("main").offsetHeight,10) - imgy +"px";
   if(parseInt(document.images[imgName].style.left,10) > parseInt(document.getElementById("main").offsetWidth,10) - imgx) document.images[imgName].style.left =  parseInt(document.getElementById("main").offsetWidth,10) - imgx +"px";
   return false;
}

function arrayset(dif){  //ゲームスタートさせる処理
	dispdif = dif;
	switch(dif){
	case 1:  //Lv1
		move_speed = 100;  //相手のカード移動にかかる時間。10で0.1秒
		think_speed = 1000;  //カード判断の周期　ドローは４分の３として計算
		break;
	case 2:  //Lv2
		move_speed = 50;  //相手のカード移動にかかる時間。10で0.1秒
		think_speed = 1000;  //カード判断の周期　ドローは４分の３として計算
		break;
	case 3:  //Lv3
		move_speed = 30;  //相手のカード移動にかかる時間。10で0.1秒
		think_speed = 800;  //カード判断の周期　ドローは４分の３として計算
		break;
	case 4:  //Lv4
		move_speed = 25;  //相手のカード移動にかかる時間。10で0.1秒
		think_speed = 600;  //カード判断の周期　ドローは４分の３として計算
		break;
	default:  //Lv5
		move_speed = 20;  //相手のカード移動にかかる時間。10で0.1秒
		think_speed = 400;  //カード判断の周期　ドローは４分の３として計算
	}
	for(i = 1; i < 27; i++){
		talon1[i] = -1;
		talon2[i] = -1;
	}
	for(i = 1; i < 27; i++){
		talon1[i] = parseInt(Math.random()*26);
		while(kaburi(1) == false){
			talon1[i] = parseInt(Math.random()*26);
		}
	}
	for(i = 1; i < 27; i++){
		talon2[i] = parseInt(Math.random()*26 + 26);
		while(kaburi(2) == false){
			talon2[i] = parseInt(Math.random()*26 + 26);
		}
	}
	talon1rem = 26;
	talon2rem = 26;
	for(i = 1; i < 5; i++){
		hand1[i] = -1;
		handdisp1[i] = -1;
	}
	for(i = 5; i < 9; i++){
		hand2[i] = -1;
		handdisp2[i] = -1;
	}
	left = talon1[talon1rem];
	right = talon2[talon2rem];
	talon1rem--;
	talon2rem--;
	document.getElementById("BAleft").src = img[left].src;
	document.getElementById("BAright").src = img[right].src;
	document.getElementById("deck1").src = "z01.png";
	document.getElementById("deck2").src = "z01.png";
	chain = -1;
	notcardClick = false;
	left = left % 13 + 1;
	right = right % 13 + 1;
	notclick = false;
	thinking = 0;
	stoping = 0;
	hinting = 0;
	drawing = 0;
	hintsoeji = -1;
	clicktalon();
	clicktalon();
	clicktalon();
	clicktalon();
	clicktalon2();
	clicktalon2();
	clicktalon2();
	clicktalon2();
	endflg = 0;
	targetset = 0;
	drag_click = false;
	inter = 0;
	document.getElementById("easy").style.display = "none";
	document.getElementById("normal").style.display = "none";
	document.getElementById("hard").style.display = "none";
	document.getElementById("savage").style.display = "none";
	document.getElementById("title").style.display = "none";
	document.getElementById("savage2").style.display = "none";
	document.getElementById("type").style.display = "none";
	document.getElementById("optext").style.display = "none";
	document.getElementById("typeback").style.display = "none";
	document.getElementById("typelead").style.display = "none";
	document.getElementById("agaricus").style.display = "none";
	document.getElementById("BAleft").style.display = "inline";
	document.getElementById("BAright").style.display = "inline";
	document.getElementById("deck1").style.display = "inline";
	document.getElementById("deck2").style.display = "inline";
	document.getElementById("deckM1").style.display = "inline";
	document.getElementById("deckM2").style.display = "inline";
	document.getElementById("img1").style.display = "inline";
	document.getElementById("img2").style.display = "inline";
	document.getElementById("img3").style.display = "inline";
	document.getElementById("img4").style.display = "inline";
	document.getElementById("img5").style.display = "inline";
	document.getElementById("img6").style.display = "inline";
	document.getElementById("img7").style.display = "inline";
	document.getElementById("img8").style.display = "inline";
	document.getElementById("stop").style.display = "none";
	face1.style.display = "inline";
	face1.src = "00.png";
	face2.style.display = "inline";
	face2.src = ""+dispdif+"0.png";
	document.getElementById("result0").style.display = "none";
	document.getElementById("result1").style.display = "none";
	document.getElementById("result2").style.display = "none";
	document.getElementById("result3").style.display = "none";
	document.getElementById("result4").style.display = "none";
	document.getElementById("result5").style.display = "none";
	document.getElementById("winlose").style.display = "none";
	if(window.localStorage) {  //ローカルストレージに対応してる？
		document.getElementById("senrekiT").style.display = "none";
		document.getElementById("senreki").style.display = "none";
		document.getElementById("senrekiB").style.display = "none";
	}
	thinkstop = false;
	document.getElementById("ready").style.left = "150px";
	scount = 3;
	timeA = 0;
	end = 0;
	averageReset();
	timer4 = setInterval("startCount()",1000);
}

function kaburi(talon){  //カードの被りを判定する処理
	if(talon == 1){
		for(j = 1; j < i; j++){
			if( talon1[i] == talon1[j] ){
				return false;
			}
		}
	} else {
		for(j = 1; j < 27; j++){
			if( talon2[i] == talon1[j] ){
				return false;
			}
		}
		for(j = 1; j < i; j++){
			if( talon2[i] == talon2[j] ){
				return false;
			}
		}
	}
	return true;
}

function clicktalon(){  //手札をクリックした時の処理
	if(notclick == false){
		if(talon1rem >= 1){
			for(i = 1; i < 5; i++){
				if(hand1[i] == -1){
					cardClick(0);
					drag_click = false;
					hinting = 0;
					hand1[i] = talon1[talon1rem];
					handdisp1[i] = talon1[talon1rem]%13 +1;
					talon1rem--;
					remDisp("myRem",talon1rem,1);
					cardID = document.getElementById("img" + i);
					cardID.style.top = "430px";
					cardID.style.left = i * 120 + 70 +"px";
					cardID.src = img[hand1[i]].src;
					if(talon1rem == 0){
						document.getElementById("deck1").src = "";
					}
					averageReset();
					return;
				}
			}
		}
	}
}

function clicktalon2(){  //相手の場札補充の処理
	if(talon2rem >= 1){
		for(i = 5; i < 9; i++){
			if(hand2[i] == -1){
				hand2[i] = talon2[talon2rem];
				handdisp2[i] = talon2[talon2rem]%13 +1;
				talon2rem--;
				remDisp("enRem",talon2rem,2);
				cardID = document.getElementById("img" + i);
				cardID.style.top = "20px";
				cardID.style.left = 530 - ( i - 4 ) * 120 +"px";
				cardID.src = img[hand2[i]].src;
				if(talon2rem == 0){
					document.getElementById("deck2").src = "";
				}
				averageReset();
				thinkstop = false;
				return;
			}
		}
	}
}

function think(){  //定期処理
	if(thinkstop == false){
		if(facetype != 3) faceChange(0);
		if(hand1[1] == -1 && hand1[2] == -1 && hand1[3] == -1 && hand1[4] == -1 && talon1rem == 0){
			if(hand2[5] == -1 && hand2[6] == -1 && hand2[7] == -1 && hand2[8] == -1 && talon2rem == 0){
				thinkstop = true;
				clearInterval(timer1);
				notclick = true;
				gamestart = false;
				result = endflg;
				move_set3(0);
				return;
			} else {
				thinkstop = true;
				clearInterval(timer1);
				notclick = true;
				gamestart = false;
				result = 1;
				move_set3(0);
				return;
			}
		}
		if(hand2[5] == -1 && hand2[6] == -1 && hand2[7] == -1 && hand2[8] == -1 && talon2rem == 0){
			thinkstop = true;
			clearInterval(timer1);
			notclick = true;
			gamestart = false;
			result = 2;
			move_set3(0);
			return;
		}
		for(a = 5; a < 9; a++){
			if((targetset != 2 && handdisp2[a] == left - 1) || (targetset != 2 && handdisp2[a] == left + 1)){
				targetset = 1;
				thinking += 10;
				if(thinking < think_speed) return;
				thinking = 0;
				thinkstop = true;
				cardEID = document.getElementById("img" + a);
				move_set("左",cardEID,document.getElementById("BAleft"));
				return;
			}
			if(lead_KA && ((targetset != 2 && handdisp2[a] == 1 && left == 13) || (targetset != 2 && handdisp2[a] == 13 && left == 1))){
				targetset = 1;
				thinking += 10;
				if(thinking < think_speed) return;
				thinking = 0;
				thinkstop = true;
				cardEID = document.getElementById("img" + a);
				move_set("左",cardEID,document.getElementById("BAleft"));
				return;
			}
			if((targetset != 1 && handdisp2[a] == right - 1) || (targetset != 1 && handdisp2[a] == right + 1)){
				targetset = 2;
				thinking += 10;
				if(thinking < think_speed) return;
				thinking = 0;
				thinkstop = true;
				cardEID = document.getElementById("img" + a);
				move_set("右",cardEID,document.getElementById("BAright"));
				return;
			}
			if(lead_KA && ((targetset != 1 && handdisp2[a] == 1 && right == 13) || (targetset != 1 && handdisp2[a] == 13 && right == 1))){
				targetset = 2;
				thinking += 10;
				if(thinking < think_speed) return;
				thinking = 0;
				thinkstop = true;
				cardEID = document.getElementById("img" + a);
				move_set("右",cardEID,document.getElementById("BAright"));
				return;
			}
		}
		targetset = 0;
		thinking = 0;
		for(a = 5; a < 9; a++){
			if(talon2rem > 0 && hand2[a] == -1){
				drawing += 10;
				if(drawing < think_speed * 0.75) return;
				drawing = 0;
				thinkstop = true;
				clicktalon2();
				return;
			}
		}
		drawing = 0;
		for(a = 1; a < 5; a++){
			if(handdisp1[a] == left - 1 || handdisp1[a] == left + 1){
				if(drag_click == false && hinting < 1000) cardHint(a);
				return;
			}
			if(lead_KA && ((handdisp1[a] == 1 && left == 13) || (handdisp1[a] == 13 && left == 1))){
				if(drag_click == false && hinting < 1000) cardHint(a);
				return;
			}
			if(handdisp1[a] == right - 1 || handdisp1[a] == right + 1){
				if(drag_click == false && hinting < 1000) cardHint(a);
				return;
			}
			if(lead_KA && ((handdisp1[a] == 1 && right == 13) || (handdisp1[a] == 13 && right == 1))){
				if(drag_click == false && hinting < 1000) cardHint(a);
				return;
			}
		}
		if(talon1rem > 0 && ( hand1[1] == -1 || hand1[2] == -1 || hand1[3] == -1 || hand1[4] == -1)){
			if(drag_click == false && hinting < 1000) cardHint(0);
			return;
		}
		hinting = 0;
		stoping += 10;
		if(stoping < 500) return;
		stoping = 0;
		thinkstop = true;
		Restart();
	} else {
		thinking = 0;
		stoping = 0;
		hinting = 0;
	}
}

function cardHint(soeji){
	hintsoeji = soeji;
	hinting += 10;
	if(hinting != 1000) return;
	faceChange(0);
	var hintcard = document.getElementById("select");
	if(hintsoeji == 0){
		hintcard.style.left = document.getElementById("deck1").offsetLeft;
		hintcard.style.top = document.getElementById("deck1").offsetTop;
	} else {
		hintcard.style.left = document.getElementById("img" + soeji).style.left;
		hintcard.style.top = document.getElementById("img" + soeji).style.top;
	}
	hintcard.style.left = parseInt(hintcard.style.left,10) - 5 + "px";
	hintcard.style.top = parseInt(hintcard.style.top,10) - 5 + "px";
	hintcard.src = "selectcardB.png";
}

function clickSelect(){
	if(hintsoeji == 0) {
		clicktalon();
		hintsoeji = -1;
	} else {
		if(click_type == 1){
			dragOn(hintsoeji);
			hintsoeji = -1;
		} else {
			if(hinting == 1000){
				cardClick(hintsoeji);
				hintsoeji = -1;
			} else {
				cardClick(0);
				hintsoeji = -1;
			}
		}
	}
}

function Restart(){  //仕切り直しの処理１
	chain = -1;
	clearInterval(timer1);
	if(talon1rem > 0){
		if(talon1rem == 1){
			setID1 = document.getElementById("deck1");
		} else {
			document.getElementById("deckM1").style.left = "20px";
			document.getElementById("deckM1").style.top = "430px";
			setID1 = document.getElementById("deckM1");
			setID1.src = "z01.png";
		}
	} else{
		for(i = 1; i < 5; i++){
			if(hand1[i] != -1){
				setID1 = document.getElementById("img" + i);
				if(click_type == 2 && setID1 == selectCard){
					cardClick(0);
				}
				break;
			}
		}
	}
	if(talon2rem > 0){
		if(talon2rem == 1){
			setID2 = document.getElementById("deck2");
		} else {
			document.getElementById("deckM2").style.left = "580px";
			document.getElementById("deckM2").style.top = "20px";
			setID2 = document.getElementById("deckM2");
			setID2.src = "z01.png";
		}
	} else{
		for(i = 5; i < 9; i++){
			if(hand2[i] != -1){
				setID2 = document.getElementById("img" + i);
				break;
			}
		}
	}
	notcardClick = false;
	move_set2(setID1,setID2);
}

function Reset(){  //仕切り直しの処理２
	check = document.getElementById("BAleft");
	if(talon1rem > 0){
		left = talon1[talon1rem];
		talon1rem--;
		remDisp("myRem",talon1rem,1);
		document.getElementById("deck1").style.left = "20px";
		document.getElementById("deck1").style.top = "430px";
		if(talon1rem == 0){
			document.getElementById("deck1").src = "";
		} else {
			document.getElementById("deckM1").src = "";
			document.getElementById("deckM1").style.left = "-200px";
		}
	} else {
		for(i = 1; i < 5; i++){
			if(hand1[i] != -1){
				left = hand1[i];
				card = document.getElementById("img" + i);
				card.style.top = "-200px";  //邪魔にならないよう、動かしたカードは外に待避
				card.style.left = "-200px";
				card.src = "";  //動かしたカードの要素を消す
				hand1[i] = -1;
				handdisp1[i] = -1;
				break;
			}
		}
	}
	check.src = img[left].src;
	left = left % 13 + 1;
	check = document.getElementById("BAright");
	if(talon2rem > 0){
		right = talon2[talon2rem];
		talon2rem--;
		remDisp("enRem",talon2rem,2);
		document.getElementById("deck2").style.left = "580px";
		document.getElementById("deck2").style.top = "20px";
		if(talon2rem == 0){
			document.getElementById("deck2").src = "";
		} else {
			document.getElementById("deckM2").src = "";
			document.getElementById("deckM2").style.left = "-200px";
		}
	} else {
		for(i = 5; i < 9; i++){
			if(hand2[i] != -1){
				right = hand2[i];
				card = document.getElementById("img" + i);
				card.style.top = "-200px";  //邪魔にならないよう、動かしたカードは外に待避
				card.style.left = "-200px";
				card.src = "";  //動かしたカードの要素を消す
				hand2[i] = -1;
				handdisp2[i] = -1;
				break;
			}
		}
	}
	averageReset();
	check.src = img[right].src;
	right = right % 13 + 1;
	thinkstop = false;
	thinking = -200;
	timer1 = setInterval("think()",10);
}

function move_set(kaburi,myID,moveID){  //相手が台札に出す時の座標設定
	faceChange(0);
	movecardID = myID;
	targetBA = kaburi;
	startX = parseInt(myID.style.left,10);
	startY = parseInt(myID.style.top,10);
	moveX = parseInt(moveID.offsetLeft,10);
	moveY = parseInt(moveID.offsetTop,10);
	move1stepX = (moveX - startX) / move_speed;
	move1stepY = (moveY - startY) / move_speed;
	b = 1;
	movecardID.style.zIndex = 2 ;
	timer2 = setInterval("move()",10)
}

function move(){  //相手の手札を台札に移動
	thisX = parseFloat(movecardID.style.left,10);
	thisY = parseFloat(movecardID.style.top,10);
	movecardID.style.left = thisX + move1stepX + "px";
	movecardID.style.top = thisY + move1stepY + "px";
	b++;
	if(b > move_speed){
		movecardID.style.zIndex = 0;
		CheckE(targetBA,movecardID);
		clearInterval(timer2);
	}
}

function move_set2(myDraw,enemyDraw){  //仕切り直しの座標設定
	faceChange(0);
	deck1 = myDraw;
	deck2 = enemyDraw;
	targetBA1 = document.getElementById("BAleft");
	targetBA2 = document.getElementById("BAright");
	startX1 = parseFloat(deck1.offsetLeft,10);
	startY1 = parseFloat(deck1.offsetTop,10);
	startX2 = parseFloat(deck2.offsetLeft,10);
	startY2 = parseFloat(deck2.offsetTop,10);
	moveX1 = parseFloat(targetBA1.offsetLeft,10);
	moveY1 = parseFloat(targetBA1.offsetTop,10);
	moveX2 = parseFloat(targetBA2.offsetLeft,10);
	moveY2 = parseFloat(targetBA2.offsetTop,10);
	move1stepX1 = (moveX1 - startX1) / restart_speed;
	move1stepY1 = (moveY1 - startY1) / restart_speed;
	move1stepX2 = (moveX2 - startX2) / restart_speed;
	move1stepY2 = (moveY2 - startY2) / restart_speed;
	c = 0;
	document.getElementById("reload").style.left = "125px";
	document.getElementById("reload").style.top = "448px";
	document.getElementById("reload").src = "reload.png";
	document.getElementById("reload").style.display = "inline";
	notclick = true;
	timer3 = setInterval("move2()",10)
}

function move2(){  //仕切り直しの移動
	thisX1 = parseFloat(deck1.style.left);
	thisY1 = parseFloat(deck1.style.top);
	thisX2 = parseFloat(deck2.style.left);
	thisY2 = parseFloat(deck2.style.top);
	deck1.style.left = thisX1 + move1stepX1 + "px";
	deck1.style.top = thisY1 + move1stepY1 + "px";
	deck2.style.left = thisX2 + move1stepX2 + "px";
	deck2.style.top = thisY2 + move1stepY2 + "px";
	c++;
	if(c > restart_speed){
		document.getElementById("reload").style.top = "700px";
		document.getElementById("reload").src = "";
		document.getElementById("reload").style.display = "none";
		notclick = false;
		notcardClick = false;
		clearInterval(timer3);
		Reset();
	}
}

function remDisp(remID,rem,chara){  //残り枚数を画面に表示する処理
	if(chara ==1){
		name = "プレイヤー";
	} else {
		name = "　COM\n　(Lv" +dispdif+ ")";
	}
	document.getElementById(remID).innerText = name+ "\n残:" +rem+ "枚";
}

function startCount(){  //開始時のカウントダウン処理
	switch(scount){
	case 3:
		document.getElementById("ready").style.left = "701px";
		document.getElementById("reload").src = "count3.png";
		document.getElementById("reload").style.left = "300px";
		document.getElementById("reload").style.top = "265px";
		document.getElementById("reload").style.display = "inline";
		break;
	case 2:
		document.getElementById("reload").style.display = "none";
		document.getElementById("reload").src = "count2.png";
		document.getElementById("reload").style.display = "inline";
		break;
	case 1:
		document.getElementById("reload").style.display = "none";
		document.getElementById("reload").src = "count1.png";
		document.getElementById("reload").style.display = "inline";
		break;
	case 0:
		document.getElementById("reload").style.display = "none";
		document.getElementById("reload").src = "count0.png";
		document.getElementById("reload").style.left = "280px";
		document.getElementById("reload").style.top = "255px";
		document.getElementById("reload").style.display = "inline";
		gamestart = true;
		timer1 = setInterval("think()",10);
		break;
	default:
		document.getElementById("reload").style.left = "-100px";
		document.getElementById("reload").src = "";
		clearInterval(timer4);
		return;
	}
	scount--;
}

function move_set3(control){  //リザルトの座標設定
	if(click_type == 2 && selectCard != null){
		selectCard.style.left = "-100px";
		selectCard.src = "";
		selectCard = null;
	}
	if(end == 1 || end == 2) return;
	controll = control;
	switch(control){
	case 0:
		if(window.localStorage) {  //ローカルストレージに対応してる？
			save();
		}
		end = -1;
		score = 0;
		document.getElementById("dammy").style.display = "inline";
		document.getElementById("stop").style.display = "inline";
		textID = document.getElementById("stop");
		textID.src = "stop.png";
		textID.style.left = "232px";
		textID.style.top = "-48px";
		textID.style.zIndex = 100;
		startX = parseInt(textID.style.left,10);
		startY = parseInt(textID.style.top,10);
		result_speed = 50;
		moveX = 232;
		moveY = 276;
		move1stepX = (moveX - startX) / result_speed;
		move1stepY = (moveY - startY) / result_speed;
		b = 1;
		timer5 = setInterval("move3()",10)
		break;
	case 1:
		end = 0;
		document.getElementById("stop").style.left = "701px";
		document.getElementById("BAleft").style.display = "none";
		document.getElementById("BAright").style.display = "none";
		document.getElementById("deck1").style.display = "none";
		document.getElementById("deck2").style.display = "none";
		document.getElementById("img1").style.display = "none";
		document.getElementById("img2").style.display = "none";
		document.getElementById("img3").style.display = "none";
		document.getElementById("img4").style.display = "none";
		document.getElementById("img5").style.display = "none";
		document.getElementById("img6").style.display = "none";
		document.getElementById("img7").style.display = "none";
		document.getElementById("img8").style.display = "none";
		document.getElementById("myRem").style.display = "none";
		document.getElementById("enRem").style.display = "none";
		document.getElementById("stop").style.display = "none";
		face1.style.display = "none";
		face2.style.display = "none";
		document.getElementById("result0").style.display = "inline";
		document.getElementById("result1").style.display = "inline";
		document.getElementById("result2").style.display = "inline";
		document.getElementById("result3").style.display = "inline";
		document.getElementById("result4").style.display = "inline";
		document.getElementById("result5").style.display = "inline";
		document.getElementById("winlose").style.display = "inline";
		document.getElementById("result0").style.left = "0px";
		document.getElementById("result0").style.top = "0px";
		document.getElementById("result0").innerText = "リザルト";
		disprem = 0;
		for(i = 1; i < 5; i++){
			if(hand1[i] != -1){
				disprem++;
			}
		}
		disprem += talon1rem;
		score -= disprem * 100;
		textID = document.getElementById("result1");
		textID.innerText = "　あなたの残りの手札：" +disprem+ "枚";
		textID.style.left = "701px";
		textID.style.top = "80px";
		startX = parseInt(textID.style.left,10);
		startY = parseInt(textID.style.top,10);
		result_speed = 50;
		moveX = 0;
		moveY = 80;
		move1stepX = (moveX - startX) / result_speed;
		move1stepY = (moveY - startY) / result_speed;
		b = 1;
		timer5 = setInterval("move3()",10)
		break;
	case 2:
		disprem = 0;
		for(i = 5; i < 9; i++){
			if(hand2[i] != -1){
				disprem++;
			}
		}
		disprem += talon2rem;
		score += disprem * 100;
		textID = document.getElementById("result2");
		textID.innerText = "　COM(Lv" +dispdif+ ")の残りの手札：" +disprem+ "枚";
		textID.style.left = "701px";
		textID.style.top = "130px";
		startX = parseInt(textID.style.left,10);
		startY = parseInt(textID.style.top,10);
		result_speed = 50;
		moveX = 0;
		moveY = 130;
		move1stepX = (moveX - startX) / result_speed;
		move1stepY = (moveY - startY) / result_speed;
		b = 1;
		timer5 = setInterval("move3()",10)
		break;
	case 3:
		disprem = 0;
		for(i = 0; i < heikincount; i++){
			disprem+= heikin[i];
		}
		disprem /= heikincount;
		disprem = Math.round(disprem);
		disprem /= 1000;
		textID = document.getElementById("result3");
		textID.innerText = "　平均カードセット時間：" +disprem+ "秒";
		textID.style.left = "701px";
		textID.style.top = "180px";
		startX = parseInt(textID.style.left,10);
		startY = parseInt(textID.style.top,10);
		result_speed = 50;
		moveX = 0;
		moveY = 180;
		move1stepX = (moveX - startX) / result_speed;
		move1stepY = (moveY - startY) / result_speed;
		b = 1;
		timer5 = setInterval("move3()",10)
		break;
	case 4:
		disprem = 0;
		for(i = 0; i < heikinsentakucount; i++){
			disprem+= heikinsentaku[i];
		}
		disprem /= heikinsentakucount;
		disprem = Math.round(disprem);
		disprem /= 1000;
		textID = document.getElementById("result4");
		textID.innerText = "　平均判断時間：" +disprem+ "秒";
		textID.style.left = "701px";
		textID.style.top = "230px";
		startX = parseInt(textID.style.left,10);
		startY = parseInt(textID.style.top,10);
		result_speed = 50;
		moveX = 0;
		moveY = 230;
		move1stepX = (moveX - startX) / result_speed;
		move1stepY = (moveY - startY) / result_speed;
		b = 1;
		timer5 = setInterval("move3()",10)
		break;
	case 5:
		disprem = 0;
		for(i = 0; i < heikincount; i++){
			disprem+= heikin[i];
		}
		disprem /= heikincount;
		disprem = parseInt(disprem);
		if(disprem < 1000) score = score + 1000 - disprem;
		disprem = 0;
		for(i = 0; i < heikinsentakucount; i++){
			disprem+= heikinsentaku[i];
		}
		disprem /= heikinsentakucount;
		disprem = parseInt(disprem);
		if(disprem < 1500) score = score + 1500 - disprem;
		score += inter * 50;
		if(score > 3500) {
			disprem = "ＳＳＳ";
		} else if(score > 3000) {
			disprem = "ＳＳ";
		} else if(score > 2500) {
			disprem = "Ｓ";
		} else if(score > 2000) {
			disprem = "Ａ";
		} else if(score > 1500) {
			disprem = "Ｂ";
		} else if(score > 1000){
			disprem = "Ｃ";
		} else if(score > 500){
			disprem = "Ｄ";
		} else {
			disprem = "Ｅ";
		}
		textID = document.getElementById("result6");
		textID.innerText = "　総合ランク：" +disprem;
		textID.style.left = "701px";
		textID.style.top = "280px";
		startX = parseInt(textID.style.left,10);
		startY = parseInt(textID.style.top,10);
		result_speed = 50;
		moveX = 0;
		moveY = 280;
		move1stepX = (moveX - startX) / result_speed;
		move1stepY = (moveY - startY) / result_speed;
		b = 1;
		timer5 = setInterval("move3()",10)
		break;
	case 6:
		textID = document.getElementById("winlose");
		textID.style.left = "701px";
		textID.style.top = "370px";
		if(result == 0){
			textID.src = "draw.png";
			moveX = 229;
		} else if(result == 1){
			textID.src = "win.png";
			moveX = 156;
		} else {
			textID.src = "lose.png";
			moveX = 142;
		}
		startX = parseInt(textID.style.left,10);
		startY = parseInt(textID.style.top,10);
		result_speed = 50;
		moveY = 370;
		move1stepX = (moveX - startX) / result_speed;
		move1stepY = (moveY - startY) / result_speed;
		b = 1;
		timer5 = setInterval("move3()",10)
		break;
	default:
		textID = document.getElementById("result5");
		textID.innerText = "画面をクリックするとタイトルに戻ります。";
		textID.style.left = "0px";
		textID.style.top = "468px";
		end = 1;
	}
}

function move3(){  //リザルトの移動
	thisX = parseFloat(textID.style.left,10);
	thisY = parseFloat(textID.style.top,10);
	textID.style.left = thisX + move1stepX + "px";
	textID.style.top = thisY + move1stepY + "px";
	b++;
	if(b > result_speed){
		controll++;
		clearInterval(timer5);
		if(controll == 1){
			setTimeout("move_set3(controll)",1000);
		} else {
			setTimeout("move_set3(controll)",500);
		}
	}
}

function save(){  //戦歴保存の処理
	switch(dispdif){
	case 1:
		work = lv1;
		break;
	case 2:
		work = lv2;
		break;
	case 3:
		work = lv3;
		break;
	case 4:
		work = lv4;
		break;
	default:
		work = lv5;
	}
	work = parseInt(work);
	switch(result){
	case 0:
		work += 1;
		break;
	case 1:
		work += 1000000;
		break;
	default:
		work += 1000;
	}
	switch(dispdif){
	case 1:
		lv1 = work;
		localStorage.setItem("AgaricusSpeedLv1", lv1);
		break;
	case 2:
		lv2 = work;
		localStorage.setItem("AgaricusSpeedLv2", lv2);
		break;
	case 3:
		lv3 = work;
		localStorage.setItem("AgaricusSpeedLv3", lv3);
		break;
	case 4:
		lv4 = work;
		localStorage.setItem("AgaricusSpeedLv4", lv4);
		break;
	default:
		lv5 = work;
		localStorage.setItem("AgaricusSpeedLv5", lv5);
	}
	l1 = lv1 % 1000000;
	l1 -= (lv1 % 1000);
	l1 = parseInt(l1 / 1000);
	l2 = lv2 % 1000000;
	l2 -= (lv2 % 1000);
	l2 = parseInt(l2 / 1000);
	l3 = lv3 % 1000000;
	l3 -= (lv3 % 1000);
	l3 = parseInt(l3 / 1000);
	l4 = lv4 % 1000000;
	l4 -= (lv4 % 1000);
	l4 = parseInt(l4 / 1000);
	l5 = lv5 % 1000000;
	l5 -= (lv5 % 1000);
	l5 = parseInt(l5 / 1000);
	document.getElementById("senreki").innerText = "Lv1: "+parseInt(lv1/1000000)+"勝"+l1+"敗"+(lv1%1000)+"分\nLv2: "+parseInt(lv2/1000000)+"勝"+l2+"敗"+(lv2%1000)+"分\nLv3: "+parseInt(lv3/1000000)+"勝"+l3+"敗"+(lv3%1000)+"分\nLv4: "+parseInt(lv4/1000000)+"勝"+l4+"敗"+(lv4%1000)+"分\nLv5: "+parseInt(lv5/1000000)+"勝"+l5+"敗"+(lv5%1000)+"分";
}

function load() {  //ページ読み込み時の処理
   //ローカルストレージの処理
   face1 = document.getElementById("face1");
   face2 = document.getElementById("face2");
   chainI = document.getElementById("chain");
   if(window.localStorage) {  //ローカルストレージに対応してる？
	if(localStorage.getItem("AgaricusSpeedOption") == 2) typeChange();
	if(localStorage.getItem("AgaricusSpeedOptionLead") == "false") leadChange();
	lv1 = 0;
	local=localStorage.getItem("AgaricusSpeedLv1");
	if(local != null) lv1 = local;
	lv2 = 0;
	local=localStorage.getItem("AgaricusSpeedLv2");
	if(local != null) lv2 = local;
	lv3 = 0;
	local=localStorage.getItem("AgaricusSpeedLv3");
	if(local != null) lv3 = local;
	lv4 = 0;
	local=localStorage.getItem("AgaricusSpeedLv4");
	if(local != null) lv4 = local;
	lv5 = 0;
	local=localStorage.getItem("AgaricusSpeedLv5");
	if(local != null) lv5 = local;
	l1 = lv1 % 1000000;
	l1 -= (lv1 % 1000);
	l1 = parseInt(l1 / 1000);
	l2 = lv2 % 1000000;
	l2 -= (lv2 % 1000);
	l2 = parseInt(l2 / 1000);
	l3 = lv3 % 1000000;
	l3 -= (lv3 % 1000);
	l3 = parseInt(l3 / 1000);
	l4 = lv4 % 1000000;
	l4 -= (lv4 % 1000);
	l4 = parseInt(l4 / 1000);
	l5 = lv5 % 1000000;
	l5 -= (lv5 % 1000);
	l5 = parseInt(l5 / 1000);
	document.getElementById("senreki").innerText = "Lv1: "+parseInt(lv1/1000000)+"勝"+l1+"敗"+(lv1%1000)+"分\nLv2: "+parseInt(lv2/1000000)+"勝"+l2+"敗"+(lv2%1000)+"分\nLv3: "+parseInt(lv3/1000000)+"勝"+l3+"敗"+(lv3%1000)+"分\nLv4: "+parseInt(lv4/1000000)+"勝"+l4+"敗"+(lv4%1000)+"分\nLv5: "+parseInt(lv5/1000000)+"勝"+l5+"敗"+(lv5%1000)+"分";
	if(dispdif != 0) return;
	document.getElementById("senrekiT").style.display = "inline";
	document.getElementById("senreki").style.display = "inline";
	document.getElementById("senrekiB").style.display = "inline";
   }
   document.getElementById("easy").style.display = "inline";
   document.getElementById("normal").style.display = "inline";
   document.getElementById("hard").style.display = "inline";
   document.getElementById("savage").style.display = "inline";
   document.getElementById("savage2").style.display = "inline";
   document.getElementById("dammy").src = "";
   document.getElementById("dammy").style.display = "none";
   document.getElementById("load").style.display = "none";
}

function intercept(enemy_no){
	if(click_type != 2) return;
	if(parseInt(document.getElementById("img" + enemy_no).offsetTop,10) > 75){
		if(parseInt(document.getElementById("img" + enemy_no).offsetLeft,10) < 300){
			BAClick(1);
		} else {
			BAClick(2);
		}
	}
}


//コピペ処理　http://unimakura.jp/javascript/javascript-1.htmlより　テキスト選択解除

function deSelect() { 
	if (window.getSelection) { 
		var selection = window.getSelection(); 
		selection.collapse(document.body, 0); 
	} else { 
		var selection = document.selection.createRange(); 
		selection.setEndPoint("EndToStart", selection); 
		selection.select(); 
	} 
} 



   // 初期処理
   img[0] = new Image();
   img[0].src = "s01.png";
   img[1] = new Image();
   img[1].src = "s02.png";
   img[2] = new Image();
   img[2].src = "s03.png";
   img[3] = new Image();
   img[3].src = "s04.png";
   img[4] = new Image();
   img[4].src = "s05.png";
   img[5] = new Image();
   img[5].src = "s06.png";
   img[6] = new Image();
   img[6].src = "s07.png";
   img[7] = new Image();
   img[7].src = "s08.png";
   img[8] = new Image();
   img[8].src = "s09.png";
   img[9] = new Image();
   img[9].src = "s10.png";
   img[10] = new Image();
   img[10].src = "s11.png";
   img[11] = new Image();
   img[11].src = "s12.png";
   img[12] = new Image();
   img[12].src = "s13.png";
   img[13] = new Image();
   img[13].src = "c01.png";
   img[14] = new Image();
   img[14].src = "c02.png";
   img[15] = new Image();
   img[15].src = "c03.png";
   img[16] = new Image();
   img[16].src = "c04.png";
   img[17] = new Image();
   img[17].src = "c05.png";
   img[18] = new Image();
   img[18].src = "c06.png";
   img[19] = new Image();
   img[19].src = "c07.png";
   img[20] = new Image();
   img[20].src = "c08.png";
   img[21] = new Image();
   img[21].src = "c09.png";
   img[22] = new Image();
   img[22].src = "c10.png";
   img[23] = new Image();
   img[23].src = "c11.png";
   img[24] = new Image();
   img[24].src = "c12.png";
   img[25] = new Image();
   img[25].src = "c13.png";
   img[26] = new Image();
   img[26].src = "h01.png";
   img[27] = new Image();
   img[27].src = "h02.png";
   img[28] = new Image();
   img[28].src = "h03.png";
   img[29] = new Image();
   img[29].src = "h04.png";
   img[30] = new Image();
   img[30].src = "h05.png";
   img[31] = new Image();
   img[31].src = "h06.png";
   img[32] = new Image();
   img[32].src = "h07.png";
   img[33] = new Image();
   img[33].src = "h08.png";
   img[34] = new Image();
   img[34].src = "h09.png";
   img[35] = new Image();
   img[35].src = "h10.png";
   img[36] = new Image();
   img[36].src = "h11.png";
   img[37] = new Image();
   img[37].src = "h12.png";
   img[38] = new Image();
   img[38].src = "h13.png";
   img[39] = new Image();
   img[39].src = "d01.png";
   img[40] = new Image();
   img[40].src = "d02.png";
   img[41] = new Image();
   img[41].src = "d03.png";
   img[42] = new Image();
   img[42].src = "d04.png";
   img[43] = new Image();
   img[43].src = "d05.png";
   img[44] = new Image();
   img[44].src = "d06.png";
   img[45] = new Image();
   img[45].src = "d07.png";
   img[46] = new Image();
   img[46].src = "d08.png";
   img[47] = new Image();
   img[47].src = "d09.png";
   img[48] = new Image();
   img[48].src = "d10.png";
   img[49] = new Image();
   img[49].src = "d11.png";
   img[50] = new Image();
   img[50].src = "d12.png";
   img[51] = new Image();
   img[51].src = "d13.png";
   img[52] = new Image();
   img[52].src = "x01.png";
   img[53] = new Image();
   img[53].src = "x02.png";
   img[54] = new Image();
   img[54].src = "z01.png";