   var temochi=new Array("","","","","","","","","","");
   var temochi2=new Array("����","����","����","����","����","����","����","����","����","����");
   var naibu=new Array("����","����","����","����","����","����","����","����","����","����");
   var naibu2=new Array("����","����","����","����","����","����","����","����","����","����");
   var naibu3=new Array("����","����","����","����","����","����","����","����","����","����");
   var naibu4=new Array("����","����","����","����","����","����","����","����","����","����");
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
         txt[1] = '<table border="1" width="200" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">�g�����v���P�������܂��B</font></th></table>';
         txt[2] = '<table border="1" width="220" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">��D���m�肵�A�������܂��B</font></th></table>';
         txt[3] = '<table border="1" width="400" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">�q�������Q�{�ɂ��A�P�x�����q�b�g������X�^���h���܂��B<br>�P�x�ł��q�b�g������Ǝg�p�ł��܂���B</font></th></table>'
         txt[4] = '<table border="1" width="360" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">�q�����̔��z��ی��ɂ��A���肪�u���b�N�W���b�N�������ꍇ�A�ی��̔{�z���Ⴆ�܂��B<br>���肪�u���b�N�W���b�N�̉\�������鎞�̂ݎg�p�\�ł��B</font></th></table>';
         txt[5] = '<table border="1" width="300" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">�q�����̔��z��������A�������~��܂��B<br>�������A���肪�u���b�N�W���b�N�������ꍇ�͎��s���܂��B</font></th></table>';
         txt[6] = '<table border="1" width="300" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">���Ȃ����������Ă���g�����v�Ɛ��̍��v���m�F�ł��܂��B</font></th></table>';
         txt[7] = '<table border="1" width="300" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">���߂����蒼���܂��B<br>�莝���̂�����ݒ�̓��Z�b�g�����̂Œ��ӂ��܂��傤�B</font></th></table>';
         txt[8] = '<table border="1" width="300" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">�u���b�N�W���b�N�̃��[���Ȃǂ��m�F���鎖���ł��܂��B</font></th></table>';
         txt[9] = '<table border="1" width="300" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">�q������ݒ肵�A�g�����v���Q�������܂��B</font></th></table>';
         txt[10] = '<table border="1" width="320" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">�{�[�i�X���[�����g�p���邩����ł��܂��B<br>�{�[�i�X���[����L���ɂ���ƁA�ǂ̃��[����L���ɂ��邩�I���ł��܂��B</font></th></table>';
         txt[11] = '<table border="1" width="300" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">�{�[�i�X���[���̐����Ɠ��e���m�F���鎖���ł��܂��B</font></th></table>';

   function popUp(i) {
     if(document.hint.elements[0].checked){
       ID.innerHTML = txt[i];
       // �w���v�̈ʒu�𒲐�
       ID.style.left = event.x + 30; // �\������x���W�i�K�x�ɒ������Ă��������j
       ID.style.top = event.y + 5; // �\������y���W�i�K�x�ɒ������Ă��������j
       ID.style.visibility = "visible";
     }
   }

   // �w���v�̔�\��
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
          alert("�m�[�o�X�g�����I�q�b�g����蒼���܂��I");
          id--;
          kazu=kazu-1;
          Button1();
         }
        }
       }
     }
    } else {
     alert("����ȏ�q�b�g�o���܂���B");
    }
    }
   }

   function Button2(){
    if(game==1){
    keisan();
    mysum=sum;
    if(Hidden=="true"){
      alert("���Ȃ��̎莝���@���v�F???\n"+temochi[0]+"\n"+temochi[1]+"\n"+temochi[2]+"\n"+temochi[3]+"\n"+temochi[4]+"\n"+temochi[5]+"\n"+temochi[6]+"\n"+temochi[7]+"\n"+temochi[8]+"\n"+temochi[9]);
    } else {
      alert("���Ȃ��̎莝���@���v�F"+mysum+"\n"+temochi[0]+"\n"+temochi[1]+"\n"+temochi[2]+"\n"+temochi[3]+"\n"+temochi[4]+"\n"+temochi[5]+"\n"+temochi[6]+"\n"+temochi[7]+"\n"+temochi[8]+"\n"+temochi[9]);
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
       alert("�W���b�N�t�B�[�o�[�I�q�������Q�D�T�{�ɂȂ�܂��I");
       ok=ok*250;
       ok=ok/100;
      } else {
       alert("�u���b�N�W���b�N�{�[�i�X�I�q�������P�D�T�{�ɂȂ�܂��I");
       ok=ok*150;
       ok=ok/100;
      }
     }
     keisan();
     mysum=sum;
     plus=0;
     if(gs>=6){
      alert("�O���[�g�X�v���b�g�����I�������̕����߂��z���Q�D�T�{�ɂȂ�܂��I");
      plus=ok*150;
      plus=ok/100
     } else if(gs>=3){
      alert("�O���[�g�X�v���b�g�����I�������̕����߂��z���Q�{�ɂȂ�܂��I");
      plus=ok;
     } else if(gs>=1){
      alert("�O���[�g�X�v���b�g�����I�������̕����߂��z���P�D�T�{�ɂȂ�܂��I");
      plus=ok/2;
     }
    alert("����̃^�[���ł��B");
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
    alert("�莝���̂����F"+money+"\n�q�����F"+ok+"\n����̐��F"+esum+bj2str+"\n�����̐��F"+mysum+bjstr);
    if(bj==1 || bj2==1){
     if(bj==1 && bj2==1){
       alert("���������ł��B");
      } else if(bj==1){
       alert("���Ȃ��̏����ł��I");
       win();
      } else {
       alert("���Ȃ��̕����ł��c�B");
       lose();
      }
    } else {
     if(mysum>21){
      if(esum>21){
       alert("���������ł��B");
      } else {
       alert("���Ȃ��̕����ł��c�B");
       lose();
      }
     } else if(esum>21){
       alert("���Ȃ��̏����ł��I");
       win();
     } else if(mysum==esum){
       alert("���������ł��B");
     } else if(mysum>esum){
       alert("���Ȃ��̏����ł��I");
       win();
     } else {
       alert("���Ȃ��̕����ł��c�B");
       lose();
     }
    }
    if(insurance==1){
      if(bj2==1){
        alert("�C���V���A�����X�ɐ����I\n$"+ok+"����ɓ���܂����I");
        money=money+ok;
      } else {
        plus=ok/2;
        alert("�C���V���A�����X�Ɏ��s���܂����c�B\n$"+plus+"��v������܂����c�B");
        money=money-plus;
      }
    }
    gameset();
    } else {
     alert("����������܂���B");
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
		    bj2str="(�u���b�N�W���b�N)";
 		   }
 		   tejun=0;
                   id="1";
		   Button1();
		   Button1();
		   keisan();
 		   mysum=sum;
		   if(mysum==21){
		     if(Hidden=="false"){
		      alert("�u���b�N�W���b�N�I");
                                  }
		     bj=1;
		     bjstr="(�u���b�N�W���b�N)";
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
	if(window.confirm("������x�v���C���܂����H")){
                 restart();
              } else {
	   game=0;
	}
      } else {
       alert("�M���͔j�Y���Ă��܂��A�n������ɂȂ����B\n�f�`�l�d�@�n�u�d�q");
       if(window.confirm("�n�����甇���オ��܂����H")){
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
     alert("�u���b�N�W���b�N�ł��B���̂܂܃X�^���h���܂��傤�I");
    } else {
     if(kazu<3){
      // ok=document.formA.textA.value;
      if(money>=ok){
       down=1;
       alert("�_�u���_�E���I�q�������Q�{�ɂȂ�܂��I");
       Button1();
       Button3();
      } else {
       alert("����������܂���B");
      }
     } else {
      alert("��x�ł��q�b�g����ƃ_�u���_�E�����邱�Ƃ͏o���܂���B");
     }
    }
    }
   }

   function Button5(){
	if(window.confirm("�͂��߂���v���C���܂����H\n�i�����̓��Z�b�g����܂��I�j")){
   		 window.location.reload();
              } 
   }

   function Button6(){
    alert("�u���b�N�W���b�N�Ƃ́c\n�v���C���[�ƃf�B�[���[�i�ΐ푊��j�����݂��g�����v�������A���������𑫂��Ă����܂��B\n���Q�P�ɋ߂����������Ƃ����Q�[���ł��B\n�������A�Q�P�𒴂��Ă��܂��ƃo�X�g���Ă��܂��܂��B");
    alert("���̌v�Z�ɂ��āc\n��{�I�ɏo���������̂܂܉��Z����܂����A�i�C�p�C�j�C�`�̂ݗ�O�ł��B\n�i�C�p�C�j�͂��ׂĂP�O�Ƃ��Čv�Z����܂��B\n�`�͂P�P�Ƃ��Čv�Z����܂����A�P�P�𑫂������ʂ��Q�P�𒴂��Ă��܂����ꍇ�A�P�Ƃ��čČv�Z����܂��B");
    alert("���̃Q�[���Ŏg���p��̐����c\n�q�b�g�F�g�����v���P�������܂��B\n�X�^���h�F���̎�D�Ŋm�肵�A�������܂��B\n�o�X�g�F���̍��v���Q�P�𒴂��Ă��܂�����ԁB������o�X�g���Ă��Ȃ�����͐�΂ɕ����Ă��܂��܂��B\n�u���b�N�W���b�N�F�ŏ��̂Q���łQ�P�ɂȂ�����ԁB�{�[�i�X�Ƃ��ēq�������P�D�T�{�ɂȂ�܂��B\n�r�b�h�F������q���܂��B���̃Q�[���ł̓��X�^�[�g�Ƃ��Ďg���܂��B");
    alert("����ȃR�}���h�ɂ��āc\n�_�u���_�E���F�|�������Q�{�ɂ��ăg�����v���P�����������A���̂܂܏������܂��B\n�C���V���A�����X�F���肪�u���b�N�W���b�N�̉\�������鎞�A�q�����̔��z��ی��Ƃ��Ċ|���鎖���o���܂��B�������肪�u���b�N�W���b�N�������ꍇ�A�ی����{�ɂȂ��ĕԂ��Ă���̂ŁA������̈��������ƂȂ�܂����A�����u���b�N�W���b�N�ł͂Ȃ������ꍇ�A�ی��͖v������܂��B\n�T�����_�[�F�ŏ��ɔz��ꂽ�Q���̃J�[�h�����āA�����ڂ������Ɣ��f�����ꍇ�́A�q�����̔��z��������ď������~��鎖���o���܂��B�������A���肪�u���b�N�W���b�N�������ꍇ�͎��s���܂��i���C�g�T�����_�[�j�B�܂��A��x�ł��q�b�g����ƃT�����_�[���鎖�͏o���܂���B");
    alert("�f�B�[���[�̃g�����v�͂P���ڂ̂݊m�F���邱�Ƃ��o���܂��B\n�����̎�D�Ƒ��k���Ȃ���킢�܂��傤�B\n�Ō�ɐM����͌Ȃ̉^�ł��B���b�c�g���C�I");
    alert("�Ō�Ɂc\n���������ׂĂȂ��Ȃ��Ă��܂��ƃQ�[���I�[�o�[�ł��I���ӂ��܂��傤�I");
   }

   function Button7(){
    if(game==0){
    		  restart();
     } else {
      alert("���̃{�^���̓Q�[�����I���������̂ݗL���ł��B");
     }
   }

   function Button8(){
     if(game==1){
       if(insurance==1){
         alert("���ɃC���V���A�����X���s���Ă��܂��I");
       } else {
         if(naibu3[0]==1 || naibu3[0]>=10){
           plus=ok/2;
           if(window.confirm("�q�����̔��z�ł���$"+plus+"��ǉ����ăC���V���A�����X���s���܂����H")){
             alert("�C���V���A�����X���s���܂����I");
             insurance=1;
           }
         } else {
           alert("�C���V���A�����X�͑���̂P���ڂ�A,10,J,Q,K��������Joker�̎��̂ݗL���ł��B");
         }
       }
     }
   }

   function Button9(){
     if(game==1){
       if(kazu<3){
         plus=ok/2;
         if(window.confirm("$"+plus+"���x�����A�T�����_�[���s���܂����H\n�i���肪�u���b�N�W���b�N�̎��͎��s���܂��j")){
           id="12";
           for(i=1;i<kazu2;i++){
             hyouji=temochi2[i];
             document.getElementById(id).src=img[hyouji].src;
             id++;
           }
           if(bj2==1){
             alert("�T�����_�[�Ɏ��s���܂����c�B");
             Button3();
           } else {
             alert("$"+plus+"���x�����A�������~��܂����B");
             money=money-plus;
             gameset();
           }
         }
       } else {
         alert("��x�ł��q�b�g����ƃT�����_�[���邱�Ƃ͏o���܂���B");
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

// �N�b�L�[�ۑ��@setCookie(�N�b�L�[��, �N�b�L�[�̒l, �N�b�L�[�̗L������); //
function setCookie(c_name,value,expiredays){
    // path�̎w��
    var path = location.pathname;
    // path���t�H���_���Ɏw�肷��ꍇ��IE�΍�
    var paths = new Array();
    paths = path.split("/");
    if(paths[paths.length-1] != ""){
        paths[paths.length-1] = "";
        path = paths.join("/");
    }
    // �L�������̓��t
    var extime = new Date().getTime();
    var cltime = new Date(extime + (60*60*24*1000*expiredays));
    var exdate = cltime.toUTCString();
    // �N�b�L�[�ɕۑ����镶����𐶐�
    var s="";
    s += c_name +"="+ escape(value);// �l�̓G���R�[�h���Ă���
    s += "; path="+ path;
    if(expiredays){
        s += "; expires=" +exdate+"; ";
    }else{
        s += "; ";
    }
    // �N�b�L�[�ɕۑ�
    document.cookie=s;
}

// �N�b�L�[�̒l���擾 getCookie(�N�b�L�[��); //
function getCookie(c_name){
    var st="";
    var ed="";
    if(document.cookie.length>0){
        // �N�b�L�[�̒l�����o��
        st=document.cookie.indexOf(c_name + "=");
        if(st!=-1){
            st=st+c_name.length+1;
            ed=document.cookie.indexOf(";",st);
            if(ed==-1) ed=document.cookie.length;
            // �l���f�R�[�h���ĕԂ�
            return unescape(document.cookie.substring(st,ed));
        }
    }
    return "";
}


   function disp(){
	for(kettei=0;kettei <1;){
	ok = parseInt(window.prompt("�q��������͂��Ă��������B�莝���̂����F"+money, ok2));
               if(ok>money){
	alert("����������܂���B");
	} else if (ok<=money){
	 kettei=1;
	 game=1;
	 ok2=ok;
	} else {
	 alert("���͂�����������܂���B�Q�[�����I�����܂��B");
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
      naibu[i]="����";
     }
     for(i=0;i<10;i++){
      naibu2[i]="����";
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
     alert("�I�[�v���I");
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
      document.getElementById("Bonus").value="�{�[�i�X���[���𖳌��ɂ���";
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
      document.getElementById("Bonus").value="�{�[�i�X���[����L���ɂ���";
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
      alert("�{�[�i�X���[���Ƃ́c\n���̃Q�[���̃I���W�i�����܂ޓ���ȃ��[���𓱓��ł��܂��B\n�{�[�i�X���[����L���ɂ��ėL���ɂ��������[�����N���b�N����ƃ{�[�i�X���[�����K�p����܂��B\n�������A�Q�[�����ɗL���ɂ����ꍇ�́A���̃Q�[������K�p����܂��B");
      alert("�{�[�i�X���[���̓��e�c\n�m�[�o�X�g�F�o�X�g���Ă��܂����ۂɂP�x�����q�b�g����蒼���܂��B\n�W���b�N�t�B�[�o�[�F�u���b�N�W���b�N�{�[�i�X���Q�D�T�{�ɂȂ�܂��B\n�O���[�g�X�v���b�g�F��D�ɓ������̃g�����v���Q���ȏ゠�������ɕ����߂��z���P�D�T�{�ɂȂ�܂��B\n�W���[�J�[�F�W���[�J�[���������܂��B �W���[�J�[�͂P�P�Ƃ��Čv�Z����܂����A�P�P�𑫂������ʂ��Q�P�𒴂��Ă��܂����ꍇ�A�Q�P����̍����Ƃ��čČv�Z����܂��B�i��F�i�@�p�̎��ɃW���[�J�[�������ƂQ�P�|�Q�O�̂P�ƂȂ�j\n�n�C�h�J�[�h�F���݂��P���ڂ��������Ȃ���Ԃŏ������܂��B");
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


   // ��������
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

  //���C������
  highscore=localStorage.getItem("AgaricusBlackjackHighscore");