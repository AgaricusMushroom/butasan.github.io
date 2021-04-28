   var temochi=new Array("","","","","","","","","","");
   var temochi2=new Array("無し","無し","無し","無し","無し","無し","無し","無し","無し","無し");
   var naibu=new Array("無し","無し","無し","無し","無し","無し","無し","無し","無し","無し");
   var naibu2=new Array("無し","無し","無し","無し","無し","無し","無し","無し","無し","無し");
   var naibu3=new Array("無し","無し","無し","無し","無し","無し","無し","無し","無し","無し");
   var naibu4=new Array("無し","無し","無し","無し","無し","無し","無し","無し","無し","無し");
   var money=1000;
   var kazu=0;
   var kazu2=0;
   var i;
   var sum=0;
   var mysum=0;
   var esum=0;
   var hyouji
   var img = new Array();
   var id="1";
   var flg;
   var ok=100;
   var down=0;
   var bj=0;
   var bjstr="";
   var bj2=0;
   var bj2str="";
   var kettei=0;
   var game=0;
   var ok2=100;
   var tejun=0;
   var Nobust="false";
   var Jackfever="false";
   var Greatsplit="false";
   var Joker="false";
   var Hidden="false";
   var bflg=0;
   var str="";
   var gs;
   var jo=0;
   var highscore=0;
   var plus;
   var bgm=1;
   var insurance=0;
   var txt = new Array();
         txt[1] = '<table border="1" width="200" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">トランプを１枚引きます。</font></th></table>';
         txt[2] = '<table border="1" width="220" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">手札を確定し、勝負します。</font></th></table>';
         txt[3] = '<table border="1" width="400" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">賭け金を２倍にし、１度だけヒットした後スタンドします。<br>１度でもヒットをすると使用できません。</font></th></table>'
         txt[4] = '<table border="1" width="360" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">賭け金の半額を保険にし、相手がブラックジャックだった場合、保険の倍額が貰えます。<br>相手がブラックジャックの可能性がある時のみ使用可能です。</font></th></table>';
         txt[5] = '<table border="1" width="300" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">賭け金の半額を放棄し、勝負を降ります。<br>ただし、相手がブラックジャックだった場合は失敗します。</font></th></table>';
         txt[6] = '<table border="1" width="300" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">あなたが所持しているトランプと数の合計を確認できます。</font></th></table>';
         txt[7] = '<table border="1" width="300" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">初めからやり直します。<br>手持ちのお金や設定はリセットされるので注意しましょう。</font></th></table>';
         txt[8] = '<table border="1" width="300" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">ブラックジャックのルールなどを確認する事ができます。</font></th></table>';
         txt[9] = '<table border="1" width="300" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">賭け金を設定し、トランプを２枚引きます。</font></th></table>';
         txt[10] = '<table border="1" width="320" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">ボーナスルールを使用するか決定できます。<br>ボーナスルールを有効にすると、どのルールを有効にするか選択できます。</font></th></table>';
         txt[11] = '<table border="1" width="300" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">ボーナスルールの説明と内容を確認する事ができます。</font></th></table>';

   function popUp(i) {
     if(document.hint.elements[0].checked){
       ID.innerHTML = txt[i];
       // ヘルプの位置を調整
       ID.style.left = event.x + 30; // 表示するx座標（適度に調整してください）
       ID.style.top = event.y + 5; // 表示するy座標（適度に調整してください）
       ID.style.visibility = "visible";
     }
   }

   // ヘルプの非表示
   function hidePop() {
     if(document.hint.elements[0].checked){
       ID.style.visibility = "hidden";
     }
   }

   function Button1(){
    if(game==1){
    if(kazu!=10){
     for(flg=0;flg!=1;){
      if(Joker=="true"){
       temochi[kazu] = parseInt(Math.random()*53);
      } else {
       temochi[kazu] = parseInt(Math.random()*51);
      }
      hyouji=temochi[kazu];
      naibu2[kazu] = temochi[kazu]+1;
      if(naibu2[kazu]>52){
       temochi[kazu]=14;
      } else {
       temochi[kazu]=temochi[kazu]%13+1;
      }
      naibu[kazu] = temochi[kazu];
      kaburi();
     }
     if(Hidden=="true"){
       if(id=="1"){
         document.getElementById(id).src=img[hyouji].src;
       } else {
         document.getElementById(id).src=img[54].src;
       }
     } else {
       document.getElementById(id).src=img[hyouji].src;
     }
     document.getElementById(id).width="150";
     document.getElementById(id).height="225";
     id++;
     if(Hidden=="true"){
       if(id=="2"){
         switch(temochi[kazu]){
           case 1:
           temochi[kazu]="A";
           break;
          case 11:
           temochi[kazu]="J";
           break;
          case 12:
           temochi[kazu]="Q";
           break;
          case 13:
           temochi[kazu]="K";
           break;
          case 14:
           temochi[kazu]="Joker";
           break;
         }
       } else {
         temochi[kazu]="???";
       }
     } else {
       switch(temochi[kazu]){
        case 1:
         temochi[kazu]="A";
         break;
        case 11:
         temochi[kazu]="J";
         break;
        case 12:
         temochi[kazu]="Q";
         break;
        case 13:
         temochi[kazu]="K";
         break;
        case 14:
         temochi[kazu]="Joker";
         break;
       }
     }
     kazu=kazu+1;
     bj=0;
     bjstr="";
     keisan()
     mysum=sum;
     if(Hidden=="true"){
       if(id=="2"){
         if(mysum>21){
           document.getElementById("kazu").value="Bust!!";
         } else {
           document.getElementById("kazu").value=mysum;
         }
       } else {
       }
     } else { 
         if(mysum>21){
           document.getElementById("kazu").value="Bust!!";
         } else {
           document.getElementById("kazu").value=mysum;
         }
       if(mysum>21){
        if(Nobust=="true"){
         if(nbust==0){
          nbust=1;
          alert("ノーバスト発動！ヒットをやり直します！");
          id--;
          kazu=kazu-1;
          Button1();
         }
        }
       }
     }
    } else {
     alert("これ以上ヒット出来ません。");
    }
    }
   }

   function Button2(){
    if(game==1){
    keisan();
    mysum=sum;
    if(Hidden=="true"){
      alert("あなたの手持ち　合計：???\n"+temochi[0]+"\n"+temochi[1]+"\n"+temochi[2]+"\n"+temochi[3]+"\n"+temochi[4]+"\n"+temochi[5]+"\n"+temochi[6]+"\n"+temochi[7]+"\n"+temochi[8]+"\n"+temochi[9]);
    } else {
      alert("あなたの手持ち　合計："+mysum+"\n"+temochi[0]+"\n"+temochi[1]+"\n"+temochi[2]+"\n"+temochi[3]+"\n"+temochi[4]+"\n"+temochi[5]+"\n"+temochi[6]+"\n"+temochi[7]+"\n"+temochi[8]+"\n"+temochi[9]);
    }
    }
   }

   function keisan(){
    gs=0;
    sum=0;
    if(tejun==0){
     for(i=0;i<kazu;i++){
      if(naibu[i]!=1){
       if(naibu[i]!=14){
        if(naibu[i]>=11){
         sum=sum+10;
        } else {
         sum=sum+naibu[i];
        }
       }
      }
     }
    } else {
     for(i=0;i<kazu2;i++){
      if(naibu3[i]!=1){
       if(naibu3[i]!=14){
        if(naibu3[i]>=11){
         sum=sum+10;
        } else {
         sum=sum+naibu3[i];
        }
       }
      }
     }
    }
  
    if(tejun==0){  
     for(i=0;i<kazu;i++){
      if(naibu[i]==1){
       if(sum+11>21){
        sum=sum+1;
       } else {
        sum=sum+11;
       }
      }
     }
     if(Greatsplit=="true"){
      for(i=0;i<kazu;i++){
       for(j=i+1;j<kazu;j++){
        if(naibu[i]==naibu[j]){
         gs++;
        }
       }
      }
     }
    } else {
     for(i=0;i<kazu2;i++){
      if(naibu3[i]==1){
       if(sum+11>21){
        sum=sum+1;
       } else {
        sum=sum+11;
       }
      }
     }
    }

    if(tejun==0){  
     for(i=0;i<kazu;i++){
      if(naibu[i]==14){
       if(sum<21){
        if(sum+11>21){
         sum=sum+(21-sum);
        } else {
         sum=sum+11;
        }
       }
      }
     }
    } else {
     for(i=0;i<kazu2;i++){
      if(naibu3[i]==14){
       jo=1;
       if(sum<21){
        if(sum+11>21){
         sum=sum+(21-sum);
        } else {
         sum=sum+11;
        }
       }
      }
     }
    }
   }

   function Button3(){
    if(game==1){
    if(money>=ok){
     if(down==1){
      ok=ok*2;
     }
     if(bj==1){
      if(Jackfever=="true"){
       alert("ジャックフィーバー！賭け金が２．５倍になります！");
       ok=ok*250;
       ok=ok/100;
      } else {
       alert("ブラックジャックボーナス！賭け金が１．５倍になります！");
       ok=ok*150;
       ok=ok/100;
      }
     }
     keisan();
     mysum=sum;
     plus=0;
     if(gs>=6){
      alert("グレートスプリット発動！勝利時の払い戻し額が２．５倍になります！");
      plus=ok*150;
      plus=ok/100
     } else if(gs>=3){
      alert("グレートスプリット発動！勝利時の払い戻し額が２倍になります！");
      plus=ok;
     } else if(gs>=1){
      alert("グレートスプリット発動！勝利時の払い戻し額が１．５倍になります！");
      plus=ok/2;
     }
    alert("相手のターンです。");
    tejun=1;
    id="13";
    if(Hidden=="true"){
      if(naibu3[0]==1 || naibu3[0]>=10){
        if(naibu3[0]==14){
        hit();
        }
      } else if(naibu3[0]>=3){
        hit();
      } else {
        hit();
        hit();
      }
      keisan();
      esum=sum;
    } else {
      for(flg=0;flg!=1;){
       keisan();
       esum=sum;
       if(jo==1){
        if(esum>=21){
         flg=1;
        } else {
         hit();
        }
       } else {
        if(esum>=17){
         flg=1;
        } else {
         hit();
        }
       }
      }
    }
    open();
    alert("手持ちのお金："+money+"\n賭け金："+ok+"\n相手の数："+esum+bj2str+"\n自分の数："+mysum+bjstr);
    if(bj==1 || bj2==1){
     if(bj==1 && bj2==1){
       alert("引き分けです。");
      } else if(bj==1){
       alert("あなたの勝ちです！");
       win();
      } else {
       alert("あなたの負けです…。");
       lose();
      }
    } else {
     if(mysum>21){
      if(esum>21){
       alert("引き分けです。");
      } else {
       alert("あなたの負けです…。");
       lose();
      }
     } else if(esum>21){
       alert("あなたの勝ちです！");
       win();
     } else if(mysum==esum){
       alert("引き分けです。");
     } else if(mysum>esum){
       alert("あなたの勝ちです！");
       win();
     } else {
       alert("あなたの負けです…。");
       lose();
     }
    }
    if(insurance==1){
      if(bj2==1){
        alert("インシュアランスに成功！\n$"+ok+"を手に入れました！");
        money=money+ok;
      } else {
        plus=ok/2;
        alert("インシュアランスに失敗しました…。\n$"+plus+"を没収されました…。");
        money=money-plus;
      }
    }
    gameset();
    } else {
     alert("お金が足りません。");
    }
    }
   }

   function restart(){
		  reset();
		  disp();
 		 if(kettei==1){
		   tejun=1;
                   id="11";
		   hit();
		   hit();
		   keisan();
 		   esum=sum;
 		   if(esum==21){
 		    bj2=1;
		    bj2str="(ブラックジャック)";
 		   }
 		   tejun=0;
                   id="1";
		   Button1();
		   Button1();
		   keisan();
 		   mysum=sum;
		   if(mysum==21){
		     if(Hidden=="false"){
		      alert("ブラックジャック！");
                                  }
		     bj=1;
		     bjstr="(ブラックジャック)";
		   }
  		}
   }


   function gameset(){
     if(money>highscore){
       highscore=money;
       localStorage.setItem("AgaricusBlackjackHighscore", highscore);
       document.getElementById("score").value=highscore;
     }
     if(money>=1){
        kettei=0;
        reset();
	if(window.confirm("もう一度プレイしますか？")){
                 restart();
              } else {
	   game=0;
	}
      } else {
       alert("貴方は破産してしまい、地下送りになった。\nＧＡＭＥ　ＯＶＥＲ");
       if(window.confirm("地下から這い上がりますか？")){
                   money=1000;
                   restart();
       } else {
         location.href = "BJ4_C.html";
       }
      }
    }

   function Button4(){
    if(game==1){
    if(Hidden=="true"){
      bj=0;
    }
    if(bj==1){
     alert("ブラックジャックです。このままスタンドしましょう！");
    } else {
     if(kazu<3){
      // ok=document.formA.textA.value;
      if(money>=ok){
       down=1;
       alert("ダブルダウン！賭け金が２倍になります！");
       Button1();
       Button3();
      } else {
       alert("お金が足りません。");
      }
     } else {
      alert("一度でもヒットするとダブルダウンすることは出来ません。");
     }
    }
    }
   }

   function Button5(){
	if(window.confirm("はじめからプレイしますか？\n（お金はリセットされます！）")){
   		 window.location.reload();
              } 
   }

   function Button6(){
    alert("ブラックジャックとは…\nプレイヤーとディーラー（対戦相手）がお互いトランプを引き、引いた数を足していきます。\nより２１に近い方が勝ちというゲームです。\nただし、２１を超えてしまうとバストしてしまいます。");
    alert("数の計算について…\n基本的に出た数がそのまま加算されますが、Ｊ，Ｑ，Ｋ，Ａのみ例外です。\nＪ，Ｑ，Ｋはすべて１０として計算されます。\nＡは１１として計算されますが、１１を足した結果が２１を超えてしまった場合、１として再計算されます。");
    alert("このゲームで使う用語の説明…\nヒット：トランプを１枚引きます。\nスタンド：この手札で確定し、勝負します。\nバスト：数の合計が２１を超えてしまった状態。相手もバストしていない限りは絶対に負けてしまいます。\nブラックジャック：最初の２枚で２１になった状態。ボーナスとして賭け金が１．５倍になります。\nビッド：お金を賭けます。このゲームではリスタートとして使います。");
    alert("特殊なコマンドについて…\nダブルダウン：掛け金を２倍にしてトランプを１枚だけ引き、そのまま勝負します。\nインシュアランス：相手がブラックジャックの可能性がある時、賭け金の半額を保険として掛ける事が出来ます。もし相手がブラックジャックだった場合、保険が倍になって返ってくるので、事実上の引き分けとなりますが、もしブラックジャックではなかった場合、保険は没収されます。\nサレンダー：最初に配られた２枚のカードを見て、勝ち目が無いと判断した場合は、賭け金の半額を放棄して勝負を降りる事が出来ます。ただし、相手がブラックジャックだった場合は失敗します（レイトサレンダー）。また、一度でもヒットするとサレンダーする事は出来ません。");
    alert("ディーラーのトランプは１枚目のみ確認することが出来ます。\n自分の手札と相談しながら戦いましょう。\n最後に信じるは己の運です。レッツトライ！");
    alert("最後に…\nお金がすべてなくなってしまうとゲームオーバーです！注意しましょう！");
   }

   function Button7(){
    if(game==0){
    		  restart();
     } else {
      alert("このボタンはゲームが終了した時のみ有効です。");
     }
   }

   function Button8(){
     if(game==1){
       if(insurance==1){
         alert("既にインシュアランスを行っています！");
       } else {
         if(naibu3[0]==1 || naibu3[0]>=10){
           plus=ok/2;
           if(window.confirm("賭け金の半額である$"+plus+"を追加してインシュアランスを行いますか？")){
             alert("インシュアランスを行いました！");
             insurance=1;
           }
         } else {
           alert("インシュアランスは相手の１枚目がA,10,J,Q,KもしくはJokerの時のみ有効です。");
         }
       }
     }
   }

   function Button9(){
     if(game==1){
       if(kazu<3){
         plus=ok/2;
         if(window.confirm("$"+plus+"を支払い、サレンダーを行いますか？\n（相手がブラックジャックの時は失敗します）")){
           id="12";
           for(i=1;i<kazu2;i++){
             hyouji=temochi2[i];
             document.getElementById(id).src=img[hyouji].src;
             id++;
           }
           if(bj2==1){
             alert("サレンダーに失敗しました…。");
             Button3();
           } else {
             alert("$"+plus+"を支払い、勝負を降りました。");
             money=money-plus;
             gameset();
           }
         }
       } else {
         alert("一度でもヒットするとサレンダーすることは出来ません。");
       }
     }
   } 

   function kaburi(){
    flg=1;
    if(tejun==0){
     for(i=0;i<kazu;i++){
      if(naibu2[i]==naibu2[kazu]){
       flg=0;
      }
     }
     for(i=0;i<kazu2;i++){
      if(naibu4[i]==naibu2[kazu]){
       flg=0;
      }
     }
    } else {
     for(i=0;i<kazu2;i++){
      if(naibu4[i]==naibu4[kazu2]){
       flg=0;
      }
     }
     for(i=0;i<kazu;i++){
      if(naibu2[i]==naibu4[kazu2]){
       flg=0;
      }
     }
    }
   }


   function submitStop(e){
    if (!e) var e = window.event;
    if(e.keyCode == 13)
        return false;
   }

   function hit(){
     bj2=0;
     for(flg=0;flg!=1;){
      if(Joker=="true"){
       temochi2[kazu2] = parseInt(Math.random()*53);
      } else {
       temochi2[kazu2] = parseInt(Math.random()*51);
      }
      hyouji=temochi2[kazu2];
      naibu4[kazu2] = temochi2[kazu2]+1;
      if(naibu4[kazu2]>52){
       naibu3[kazu2] = 14;
      } else {
       naibu3[kazu2] = temochi2[kazu2]%13+1;
      }
      kaburi();
     }
     if(id=="11"){
      document.getElementById(id).src=img[hyouji].src;
     } else {
      document.getElementById(id).src=img[54].src;
     }
     document.getElementById(id).width="150";
     document.getElementById(id).height="225";
     id++;
     kazu2=kazu2+1;
     flg=0;
   }

   function win(){
    money=money+ok+plus;
   }

   function lose(){
    money=money-ok;
   }

// クッキー保存　setCookie(クッキー名, クッキーの値, クッキーの有効日数); //
function setCookie(c_name,value,expiredays){
    // pathの指定
    var path = location.pathname;
    // pathをフォルダ毎に指定する場合のIE対策
    var paths = new Array();
    paths = path.split("/");
    if(paths[paths.length-1] != ""){
        paths[paths.length-1] = "";
        path = paths.join("/");
    }
    // 有効期限の日付
    var extime = new Date().getTime();
    var cltime = new Date(extime + (60*60*24*1000*expiredays));
    var exdate = cltime.toUTCString();
    // クッキーに保存する文字列を生成
    var s="";
    s += c_name +"="+ escape(value);// 値はエンコードしておく
    s += "; path="+ path;
    if(expiredays){
        s += "; expires=" +exdate+"; ";
    }else{
        s += "; ";
    }
    // クッキーに保存
    document.cookie=s;
}

// クッキーの値を取得 getCookie(クッキー名); //
function getCookie(c_name){
    var st="";
    var ed="";
    if(document.cookie.length>0){
        // クッキーの値を取り出す
        st=document.cookie.indexOf(c_name + "=");
        if(st!=-1){
            st=st+c_name.length+1;
            ed=document.cookie.indexOf(";",st);
            if(ed==-1) ed=document.cookie.length;
            // 値をデコードして返す
            return unescape(document.cookie.substring(st,ed));
        }
    }
    return "";
}


   function disp(){
	for(kettei=0;kettei <1;){
	ok = parseInt(window.prompt("賭け金を入力してください。手持ちのお金："+money, ok2));
               if(ok>money){
	alert("お金が足りません。");
	} else if (ok<=money){
	 kettei=1;
	 game=1;
	 ok2=ok;
	} else {
	 alert("入力が正しくありません。ゲームを終了します。");
         kettei=2;
	game=0;
	}
	}
   }

    function reset(){
     for(i=0;i<10;i++){
      temochi[i]="";
     }
     for(i=0;i<10;i++){
      naibu[i]="無し";
     }
     for(i=0;i<10;i++){
      naibu2[i]="無し";
     }
     kazu=0;
     i=0;
     sum=0;
     mysum=0;
     esum=0;
     hyouji=0;
     id="1";
     flg=0;
     ok=0;
     down=0;
     bj=0;
     bjstr="";
     bj2=0;
     bj2str="";
     kettei=0;
     tejun=0;
     kazu2=0;
     nbust=0;
     jo=0;
     insurance=0;
     document.getElementById(1).src=img[54].src;
     document.getElementById(2).src=img[54].src;
     document.getElementById(11).src=img[54].src;
     document.getElementById(12).src=img[54].src;
     for(i=3;i<=10;i++){
      document.getElementById(i).src="";
      document.getElementById(i).width="0";
      document.getElementById(i).height="0";
     }
     for(i=13;i<=20;i++){
      document.getElementById(i).src="";
      document.getElementById(i).width="0";
      document.getElementById(i).height="0";
     }
      document.getElementById('abc').value=money;
     rule();
    }

    function open(){
     alert("オープン！");
     id="12";
     for(i=1;i<kazu2;i++){
      hyouji=temochi2[i];
      document.getElementById(id).src=img[hyouji].src;
      id++;
     }
     if(Hidden=="true"){
       id="2";
       for(i=1;i<kazu;i++){
        hyouji=naibu2[i]-1;
        document.getElementById(id).src=img[hyouji].src;
        id++;
       }
     }
    }

    function Tokushu(){
     if(bflg==0){
      bflg=1;
      document.getElementById("Bonus").value="ボーナスルールを無効にする";
      document.getElementById("rule").style.display = "block";
      document.getElementById("t1").style.display = "block";
      document.getElementById("tt1").style.display = "block";
      document.getElementById("t2").style.display = "block";
      document.getElementById("tt2").style.display = "block";
      document.getElementById("t3").style.display = "block";
      document.getElementById("tt3").style.display = "block";
      document.getElementById("t4").style.display = "block";
      document.getElementById("tt4").style.display = "block";
      document.getElementById("t5").style.display = "block";
      document.getElementById("tt5").style.display = "block";
     } else {
      bflg=0;
      document.getElementById("Bonus").value="ボーナスルールを有効にする";
      document.getElementById("rule").style.display = "none";
      document.getElementById("t1").style.display = "none";
      document.getElementById("tt1").style.display = "none";
      document.getElementById("t2").style.display = "none";
      document.getElementById("tt2").style.display = "none";
      document.getElementById("t3").style.display = "none";
      document.getElementById("tt3").style.display = "none";
      document.getElementById("t4").style.display = "none";
      document.getElementById("tt4").style.display = "none";
      document.getElementById("t5").style.display = "none";
      document.getElementById("tt5").style.display = "none";
     }
    }

    function rule(){
      Nobust="false";
      Jackfever="false";
      Greatsplit="false";
      Joker="false";
      Hidden="false";
      document.getElementById("rule1").style.display = "none";
      document.getElementById("rule2").style.display = "none";
      document.getElementById("rule3").style.display = "none";
      document.getElementById("rule4").style.display = "none";
      document.getElementById("rule5").style.display = "none";
     if(bflg==0){
     } else {
       if( document.chbox.elements[0].checked ){
        str=str+document.chbox.elements[0].value;
        Nobust="true";
        str="";
        document.getElementById("rule1").style.display = "block";
       }
       if( document.chbox.elements[1].checked ){
        str=str+document.chbox.elements[1].value;
        Jackfever="true";
        str="";
        document.getElementById("rule2").style.display = "block";
       }
       if( document.chbox.elements[2].checked ){
        str=str+document.chbox.elements[2].value;
        Greatsplit="true";
        str="";
        document.getElementById("rule3").style.display = "block";
       }
       if( document.chbox.elements[3].checked ){
        str=str+document.chbox.elements[3].value;
        Joker="true";
        str="";
        document.getElementById("rule4").style.display = "block";
       }
       if( document.chbox.elements[4].checked ){
        str=str+document.chbox.elements[4].value;
        Hidden="true";
        str="";
        document.getElementById("rule5").style.display = "block";
       }
      }
     }

     function Setumei(){
      alert("ボーナスルールとは…\nこのゲームのオリジナルを含む特殊なルールを導入できます。\nボーナスルールを有効にして有効にしたいルールをクリックするとボーナスルールが適用されます。\nただし、ゲーム中に有効にした場合は、次のゲームから適用されます。");
      alert("ボーナスルールの内容…\nノーバスト：バストしてしまった際に１度だけヒットをやり直します。\nジャックフィーバー：ブラックジャックボーナスが２．５倍になります。\nグレートスプリット：手札に同じ数のトランプが２枚以上あった時に払い戻し額が１．５倍になります。\nジョーカー：ジョーカーが加えられます。 ジョーカーは１１として計算されますが、１１を足した結果が２１を超えてしまった場合、２１からの差分として再計算されます。（例：Ｊ　Ｑの時にジョーカーを引くと２１－２０の１となる）\nハイドカード：お互い１枚目しか見えない状態で勝負します。");
     }

    function onButtonClick() {
      selindex = document.form1.Select1.selectedIndex;
      target = document.getElementById("output");
      switch (selindex) {
        case 0:
          stop();
          break;
        case 1:
          Play();
          break;
        case 2:
          Play2();
          break;
        case 3:
          Play3();
          break;
        case 4:
          Play4();
          break;
        case 5:
          Play5();
          break;
        case 6:
          Play6();
          break;
      }
    }

function stop(){
               document.getElementById("BGM1").pause();
               document.getElementById("BGM1").currentTime = 0;
               document.getElementById("BGM2").pause();
               document.getElementById("BGM2").currentTime = 0;
               document.getElementById("BGM3").pause();
               document.getElementById("BGM3").currentTime = 0;
               document.getElementById("BGM4").pause();
               document.getElementById("BGM4").currentTime = 0;
               document.getElementById("BGM5").pause();
               document.getElementById("BGM5").currentTime = 0;
               document.getElementById("BGM6").pause();
               document.getElementById("BGM6").currentTime = 0;
	}

function Play(){
               stop();
               bgm=1;
               document.getElementById("BGM1").play();
}

function Play2(){
               stop();
               bgm=2;
               document.getElementById("BGM2").play();
}

function Play3(){
               stop();
               bgm=3;
               document.getElementById("BGM3").play();
}

function Play4(){
               stop();
               bgm=4;
               document.getElementById("BGM4").play();
}

function Play5(){
               stop();
               bgm=5;
               document.getElementById("BGM5").play();
}

function Play6(){
               stop();
               bgm=6;
               document.getElementById("BGM6").play();
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
   img[13].src = "h01.png";
   img[14] = new Image();
   img[14].src = "h02.png";
   img[15] = new Image();
   img[15].src = "h03.png";
   img[16] = new Image();
   img[16].src = "h04.png";
   img[17] = new Image();
   img[17].src = "h05.png";
   img[18] = new Image();
   img[18].src = "h06.png";
   img[19] = new Image();
   img[19].src = "h07.png";
   img[20] = new Image();
   img[20].src = "h08.png";
   img[21] = new Image();
   img[21].src = "h09.png";
   img[22] = new Image();
   img[22].src = "h10.png";
   img[23] = new Image();
   img[23].src = "h11.png";
   img[24] = new Image();
   img[24].src = "h12.png";
   img[25] = new Image();
   img[25].src = "h13.png";
   img[26] = new Image();
   img[26].src = "c01.png";
   img[27] = new Image();
   img[27].src = "c02.png";
   img[28] = new Image();
   img[28].src = "c03.png";
   img[29] = new Image();
   img[29].src = "c04.png";
   img[30] = new Image();
   img[30].src = "c05.png";
   img[31] = new Image();
   img[31].src = "c06.png";
   img[32] = new Image();
   img[32].src = "c07.png";
   img[33] = new Image();
   img[33].src = "c08.png";
   img[34] = new Image();
   img[34].src = "c09.png";
   img[35] = new Image();
   img[35].src = "c10.png";
   img[36] = new Image();
   img[36].src = "c11.png";
   img[37] = new Image();
   img[37].src = "c12.png";
   img[38] = new Image();
   img[38].src = "c13.png";
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

  //メイン処理
  highscore=localStorage.getItem("AgaricusBlackjackHighscore");