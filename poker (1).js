   var temochi=new Array("����","����","����","����","����","����","����","����","����","����");
   var temochi2=new Array("����","����","����","����","����","����","����","����","����","����");
   var naibu=new Array("����","����","����","����","����","����","����","����","����","����");
   var naibu2=new Array("����","����","����","����","����","����","����","����","����","����");
   var naibu3=new Array("����","����","����","����","����","����","����","����","����","����");
   var naibu4=new Array("����","����","����","����","����","����","����","����","����","����");
   var money=10;
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
   var ok=1;
   var down=0;
   var bj=0;
   var bjstr="";
   var bj2=0;
   var bj2str="";
   var kettei=0;
   var game=0;
   var ok2=1;
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
   var plus=0;
   var bgm=1;
   var insurance=0;
   var mark=new Array(0,0,0,0);
   var pokerhand=new Array(0,0,0,0,0,0,0,0,0,0);
   var handpower=new Array(0,0,0,0,0,0,0,0,0,0);
   var check=new Array(0,0,0,0,0);
   var mark2=new Array(0,0,0,0);
   var pokerhand2=new Array(0,0,0,0,0,0,0,0,0,0);
   var handpower2=new Array(0,0,0,0,0,0,0,0,0,0);
   var check2=new Array(0,0,0,0,0);
   var pea;
   var j;
   var sort=new Array;
   var sort2=new Array;
   var work;
   var card;
   var draw=0;
   var dflg;
   var max=new Array(0,0,0,0,0,0,0,0,0,0);
   var maxhand;
   var max2=new Array(0,0,0,0,0,0,0,0,0,0);
   var maxhand2;
   var myhand;
   var enhand;
   var horyu=new Array(0,0,0,0,0);
   var horyumax;
   var horyumin;
   var bidflg=0;
   var raise=0;
   var tokushu="";
   var tokushu2="";
   var checker=0;
   var shoujunyou=new Array;
   var txt = new Array();
         txt[1] = '<table border="1" width="320" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">�q������ݒ肵�A�Q�[�����X�^�[�g���܂��B</font></th></table>';
         txt[2] = '<table border="1" width="300" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">�q�������X�ɒǉ����܂��B<br>�Q�[�����P�x�����ǉ��ł��܂���B<br>�܂��A�Œ�ł��r�b�h���Ɠ��z��ǉ����Ȃ���΂Ȃ�܂���B</font></th></table>';
         txt[3] = '<table border="1" width="320" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">�I�������g�����v���������܂��B<br>�Q�[�����P�x�����������鎖�͏o���܂���B</font></th></table>'
         txt[4] = '<table border="1" width="300" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">��D���m�肵�A�������������܂��B<br>��苭����������������������܂��B</font></th></table>';
         txt[5] = '<table border="1" width="300" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">�q�����̔��z��������A�������~��܂��B</font></th></table>';
         txt[6] = '<table border="1" width="320" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">���ݐ������Ă���������鎖���o���܂��B<br>���̋����Ƃ́A���̖����\������g�����v�̒��ŁA�ł��傫�Ȑ��̂��Ƃł��B</font></th></table>';
         txt[7] = '<table border="1" width="220" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">��D�������ɕ��בւ��܂��B</font></th></table>';
         txt[8] = '<table border="1" width="300" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">���߂����蒼���܂��B<br>�莝���̂�����ݒ�̓��Z�b�g�����̂Œ��ӂ��܂��傤�B</font></th></table>';
         txt[9] = '<table border="1" width="360" cellspacing="0" cellpadding="5" bordercolor="#333333"><th bgcolor="#1E90FF"><font color = "#ffffff">�|�[�J�[�̃��[���Ȃǂ��m�F���鎖���o���܂��B</font></th></table>';

   //�|�[�J�[�Ŏg�p����֐�

   function popUp(i) {
     if(document.hint.elements[0].checked){
       if(i==1 && bidflg==1){
         ID.innerHTML = txt[2];
       } else {
         ID.innerHTML = txt[i];
       }
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

   function Rule(){
     alert("�`�|�[�J�[�Ƃ́`\n�|�[�J�[�Ƃ́A�T���̃g�����v�Ŗ������A����Ə�������Q�[���ł��B");
     alert("�`���ɂ��ā`\n�T���̃g�����v������̑g�ݍ��킹�ɂȂ��Ă��邱�Ƃ��A�u���v�Ƃ����܂��B\n���ɂ͂��ꂼ�ꋭ��������A��苭�������������܂��B\n���������������ꍇ�́A�����\������g�����v���r���A�����傫�������������܂��B");
     alert("�`���̎�ށ`\n�ォ��ア���ƂȂ��Ă��܂��B\n�m�[�y�A�F�����������Ă��Ȃ����\n�����y�A�F�������̃g�����v���Q��������\n�c�[�y�A�F�������̃g�����v���Q����������\n�X���[�J�[�h�F�������̃g�����v���R��������\n�X�g���[�g�F�A���������̃g�����v���T�������ԁi��F�Q�C�R�C�S�C�T�C�U�j\n�t���b�V���F�����G���̃g�����v���T��������\n�t���n�E�X�F�����y�A�ƃX���[�J�[�h���g�ݍ��킳�������\n�t�H�[�J�[�h�F�������̃g�����v���S��������\n�X�g���[�g�t���b�V���F�X�g���[�g�ƃt���b�V�����g�ݍ��킳�������");
     alert("�`�Q�[���̗���`\n�܂��r�b�h�������ēq���������߂܂��B�Œ�z�͏������̂P�O���ł��B\n�r�b�h������ƂT���̃g�����v���z���܂��B�h���[�������ƈ�x�����g�����v�̈����������o����̂ŁA����Ȃ��g�����v��I��Ńh���[�����܂��傤�B\n���̌�A�����M������΃��C�Y�������čX�ɓq�����𑝂₷�����\�ł��B\n�t�ɁA�����M���S��������΃t�H�[���h������Γq�����̔��z�����������ōς݂܂��B\n�V���[�E�_�E���������Α���Ə������܂��B������J��Ԃ��܂��B");
     alert("�`�p��̐����`\n�r�b�h�F�q������ݒ肵�܂��B�Œ�z�͏������̂P�O���ł�\n���C�Y�F�q������ǉ����܂��B�Œ�z�͓q���������Ɠ��z�ł�\n�h���[�F�I�������g�����v�����������܂�\n���F�g�����v�̓���̑g�ݍ��킹�̂��ƁB��ނ�����A���ɂ���ċ������Ⴂ�܂�\n�V���[�E�_�E���F��D���m�肵�A����Ə������܂�\n�t�H�[���h�F�q�����̔��z��������A�������~��܂�");
     alert("�`�|�[�J�[���m���`\n���̈�ł���X�g���[�g�ɂ����āA�`�͂j�ɂ��Q�ɂ��q�����܂����A�T�𒸓_�Ƃ���`�C�Q�C�R�C�S�C�T�̃X�g���[�g�́u�T�|�n�C�X�g���[�g�v�Ƃ����A�X�g���[�g�̒��ł͍ł��キ�Ȃ�܂��B\n�t�ɁA�P�O�C�i�C�p�C�j�C�`�̃X�g���[�g���u�`�|�n�C�X�g���[�g�v�Ƃ����A�X�g���[�g�̒��ōł������Ȃ�܂��B\n���́A�`�|�n�C�X�g���[�g�ƃt���b�V����g�ݍ��킹�����̂��u���C�����X�g���[�g�t���b�V���v�Ƃ����A�ŋ��̖��ƂȂ�܂��B\n���C�����X�g���[�g�t���b�V�������ƁA���̃Q�[���ł͓q�������P�O�{�ɂȂ�܂��B");
     alert("�`�Ō�Ɂ`\n�������S�Ė����Ȃ��Ă��܂��ƃQ�[���I�[�o�[�ł��I�C�����܂��傤�I�I");
   }

   function Shoujun(){
     for(i=0;i<5;i++){
       sort[i]=(naibu2[i]-1)%13+1;
       shoujunyou[i]=naibu2[i];
       if(sort[i]==1){
         sort[i]=14;
       }
     }
     for(i=0;i<5;i++){
       for(j=i+1;j<5;j++){
         if(sort[i]>sort[j]){
           work=sort[i];
           sort[i]=sort[j];
           sort[j]=work;
           work=shoujunyou[i];
           shoujunyou[i]=shoujunyou[j];
           shoujunyou[j]=work;
         }
       }
     }
     for(i=0;i<6;i++){
       document.tefuda.elements[i].checked=false;
     }
     id="1";
     for(i=0;i<5;i++){
       naibu2[i]=shoujunyou[i];
       hyouji=naibu2[i]-1;
       document.getElementById(id).src=img[hyouji].src;
       id++;
     }
   }

   function NewGame(){
	if(window.confirm("�͂��߂���v���C���܂����H\n�i�����̓��Z�b�g����܂��I�j")){
   		 window.location.reload();
              } 
   }

   function Show(){
     if(game==1){
       alert("���肪�h���[���s���Ă��܂��B");
       Drawcheck();
       for(j=0;j<5;j++){
         if(horyu[j]==0){
           if(naibu4[j]>=40){
             mark2[0]--;
           } else if(naibu4[j]>=27){
             mark2[1]--;
           } else if(naibu4[j]>=14){
             mark2[2]--;
           } else {
             mark2[3]--;
           }
           kazu2=j;
           id=String(kazu2+11);
           tejun=1;
           hit();
         }
       }
       alert("�V���[�E�_�E���I");
       id="11";
       enemyshoujun();
       for(i=1;i<6;i++){
         hyouji=temochi2[i-1];
         document.getElementById(id).src=img[hyouji].src;
         id++;
       }
       id="1";
       for(i=1;i<6;i++){
         hyouji=naibu2[i-1]-1;
         document.getElementById(id).src=img[hyouji].src;
         id++;
       }
       Handcheck();
       if(pokerhand[8]==1){
         hand="�X�g���[�g�t���b�V��";
         maxhand=max[8];
         myhand=8;
       } else if(pokerhand[7]==1){
         hand="�t�H�[�J�[�h";
         maxhand=max[7];
         myhand=7;
       } else if(pokerhand[6]==1){
         hand="�t���n�E�X";
         maxhand=max[6];
         myhand=6;
       } else if(pokerhand[5]==1){
         hand="�t���b�V��";
         maxhand=max[5];
         myhand=5;
       } else if(pokerhand[4]==1){
         hand="�X�g���[�g";
         maxhand=max[4];
         myhand=4;
       } else if(pokerhand[3]==1){
         hand="�X���[�J�[�h";
         maxhand=max[3];
         myhand=3;
       } else if(pokerhand[2]==1){
         hand="�c�[�y�A";
         maxhand=max[2];
         myhand=2;
       } else if(pokerhand[1]==1){
         hand="�����y�A";
         maxhand=max[1];
         myhand=1;
       } else {
         hand="�m�[�y�A";
         maxhand=max[0];
         myhand=0;
       }
       var hand2;
       Handcheck2();
       if(pokerhand2[8]==1){
         hand2="�X�g���[�g�t���b�V��";
         maxhand2=max2[8];
         enhand=8;
       } else if(pokerhand2[7]==1){
         hand2="�t�H�[�J�[�h";
         maxhand2=max2[7];
         enhand=7;
       } else if(pokerhand2[6]==1){
         hand2="�t���n�E�X";
         maxhand2=max2[6];
         enhand=6;
       } else if(pokerhand2[5]==1){
         hand2="�t���b�V��";
         maxhand2=max2[5];
         enhand=5;
       } else if(pokerhand2[4]==1){
         hand2="�X�g���[�g";
         maxhand2=max2[4];
         enhand=4;
       } else if(pokerhand2[3]==1){
         hand2="�X���[�J�[�h";
         maxhand2=max2[3];
         enhand=3;
       } else if(pokerhand2[2]==1){
         hand2="�c�[�y�A";
         maxhand2=max2[2];
         enhand=2;
       } else if(pokerhand2[1]==1){
         hand2="�����y�A";
         maxhand2=max2[1];
         enhand=1;
       } else {
         hand2="�m�[�y�A";
         maxhand2=max2[0];
         enhand=0;
       }
       if(tokushu!="" && tokushu2!=""){
         alert("����̖��F"+tokushu2+"("+maxhand2+")\n�����̖��F"+tokushu+"("+maxhand+")");
       } else if(tokushu!=""){
         alert("����̖��F"+hand2+"("+maxhand2+")\n�����̖��F"+tokushu+"("+maxhand+")");
       } else if(tokushu2!=""){
         alert("����̖��F"+tokushu2+"("+maxhand2+")\n�����̖��F"+hand+"("+maxhand+")");
       } else {
         alert("����̖��F"+hand2+"("+maxhand2+")\n�����̖��F"+hand+"("+maxhand+")");
       }
       if(myhand>enhand){
         alert("���Ȃ��̏����ł��I");
         win();
       } else if(myhand<enhand){
         alert("���Ȃ��̕����ł��c�B");
         lose();
       } else if(maxhand>maxhand2){
         alert("���Ȃ��̏����ł��I");
         win();
       } else if(maxhand<maxhand2){
         alert("���Ȃ��̕����ł��c�B");
         lose();
       } else {
         alert("���������ł��B");
       }
       gameset();
     } else {
       alert("�r�b�h�����Ă��������I");
     }
   }

   function enemyshoujun(){
    var enemysort=new Array(0,0,0,0,0);
    for(i = 0; i < 5; i++){
      enemysort[i] = naibu3[i];
      if(enemysort[i] == 1){
       enemysort[i] = 14;
      }
    }
    for(i = 0; i < 5; i++){
     for(j = i + 1; j < 5; j++){
      if(enemysort[i] > enemysort[j]){
       work = naibu3[i];
       naibu3[i] = naibu3[j];
       naibu3[j] = work;
       work = temochi2[i];
       temochi2[i] = temochi2[j];
       temochi2[j] = work;
       work = enemysort[i];
       enemysort[i] = enemysort[j];
       enemysort[j] = work;
      }
     }
    }
   }

   function Down(){
     if(game==1){
       plus=ok/2;
       if(window.confirm("$"+plus+"���x�����A�t�H�[���h���s���܂����H")){
         id="11";
         for(i=1;i<6;i++){
           hyouji=temochi2[i-1];
           document.getElementById(id).src=img[hyouji].src;
           id++;
         }
         alert("$"+plus+"���x�����A�������~��܂����B");
         money=money-plus;
         gameset();
       }
     } else {
       alert("�r�b�h�����Ă��������I");
     }
   }

   function Pid(){
     if(bidflg==0){
       if(game==0){
         disp();
         if(kettei==1){
          tejun=1;
          id="11";
          hit();
          hit();
          hit();
          hit();
          hit();
          tejun=0;
          id="1";
          Button1();
          Button1();
          Button1();
          Button1();
          Button1();
          document.getElementById("Bid").value="���C�Y(B)";
          checker=1;
          Check();
          bidflg=1;
          if(document.sooto.elements[0].checked){
            Shoujun();
          }
         }
       } else {
         alert("���Ƀr�b�h���Ă��܂��I");
       }
     } else {
       if(raise==0){
         disp2();
       } else {
         alert("���Ƀ��C�Y���Ă��܂��I");
       }
     }
   }

   function Draw(){
     if(game==1){
       if(draw==0){
         dflg=0;
         for(j=0;j<5;j++){
           if(document.tefuda.elements[j].checked) {
             dflg=1;
             if(naibu2[j]>=40){
               mark[0]--;
             } else if(naibu2[j]>=27){
               mark[1]--;
             } else if(naibu2[j]>=14){
               mark[2]--;
             } else {
               mark[3]--;
             }
             kazu=j;
             id=String(kazu+1);
             tejun=0;
             Button1();
             document.tefuda.elements[j].checked=false;
           }
         }
         document.tefuda.elements[5].checked=false;
         checker=1;
         Check();
         if(dflg==0){
           alert("�����I������Ă��܂���B");
         } else {
          // alert("�h���[���s���܂����B\n���݂̎�D�����āA���C�Y�A�V���[�E�_�E���A�t�H�[���h�̂ǂꂩ��I�����Ă��������B");
           draw=1;
           if(document.sooto.elements[0].checked){
             Shoujun();
           }
         }
       } else {
         alert("����ȏ�h���[���邱�Ƃ͏o���܂���I");
       }
     } else {
        alert("�r�b�h�����Ă��������I");
     }
   }

   function Card(num){
     if(game==1){
       if(draw==0){
        card=num-1;
        id=String(num);
        hyouji=naibu2[num-1]-1;
        chbox();
       }
     }
   }

   function chbox(){
        if(document.tefuda.elements[card].checked) {
           document.getElementById(id).src=img[hyouji].src;
           document.tefuda.elements[card].checked=false;
           document.tefuda.elements[5].checked=false;
        } else {
           document.getElementById(id).src=img[54].src;
           document.tefuda.elements[card].checked=true;
        }
   }

   function Check(){
     if(game==1){
       Handcheck();
       var hand;
       if(pokerhand[8]==1){
         hand="�X�g���[�g�t���b�V��";
         maxhand=max[8];
       } else if(pokerhand[7]==1){
         hand="�t�H�[�J�[�h";
         maxhand=max[7];
       } else if(pokerhand[6]==1){
         hand="�t���n�E�X";
         maxhand=max[6];
       } else if(pokerhand[5]==1){
         hand="�t���b�V��";
         maxhand=max[5];
       } else if(pokerhand[4]==1){
         hand="�X�g���[�g";
         maxhand=max[4];
       } else if(pokerhand[3]==1){
         hand="�X���[�J�[�h";
         maxhand=max[3];
       } else if(pokerhand[2]==1){
         hand="�c�[�y�A";
         maxhand=max[2];
       } else if(pokerhand[1]==1){
         hand="�����y�A";
         maxhand=max[1];
       } else {
         hand="�m�[�y�A";
         maxhand=max[0];
       }
       if(checker==0){
         if(hand=="�m�[�y�A"){
           alert("�������Ă�����͂���܂���B\n�����́A"+maxhand+"�ł��B");
         } else {
           alert("���ݐ������Ă�����́A\n�y"+hand+"�z\n�ł��B\n"+hand+"�̋����́A"+maxhand+"�ł��B");
         }
       } else {
         document.getElementById("def").value=hand;
         checker=0;
       }
     } else {
        alert("�r�b�h�����Ă��������I");
     }
   }
     
   function Handcheck(){
     for(i=0;i<10;i++){
       max[i]=0;
      }
     //�����y�A�A�c�[�y�A�A�X���[�J�[�h�A�t�H�[�J�[�h�A�A�t���n�E�X�A�m�[�y�A���`�F�b�N
     Checkreset();
     //�f�[�^�̐���
     for(i=0;i<5;i++){
       sort[i]=(naibu2[i]-1)%13+1;
       if(sort[i]==1){
         sort[i]=14;
       }
     }
     for(i=0;i<5;i++){
       for(j=i+1;j<5;j++){
         if(sort[i]>sort[j]){
           work=sort[i];
           sort[i]=sort[j];
           sort[j]=work;
         }
       }
     }
     for(i=0;i<5;i++){
       pea=0;
       if(check[i]==0){
         for(j=i+1;j<5;j++){
           if((naibu2[i]-1)%13+1==(naibu2[j]-1)%13+1){
             pea=pea+1;
             check[j]=1;
           }
         }
         switch(pea){
           case 0:
             max[0]=sort[4];
             break;
           case 1:
             pokerhand[1]=pokerhand[1]+1;
             handpower[1]=(naibu2[i]-1)%13+1;
             if(handpower[1]==1){
               handpower[1]=14;
             }
             if(handpower[1]>max[1]){
               max[1]=handpower[1];
             }
             break;
           case 2:
             pokerhand[3]=pokerhand[3]+1;
             handpower[3]=(naibu2[i]-1)%13+1;
             if(handpower[3]==1){
               handpower[3]=14;
             }
             max[3]=handpower[3];
             break;
           case 3:
             pokerhand[7]=pokerhand[7]+1;
             handpower[7]=(naibu2[i]-1)%13+1;
             if(handpower[7]==1){
               handpower[7]=14;
             }
             max[7]=handpower[7];
             break;
         }
       }
     }
     if(pokerhand[1]>=2){
       pokerhand[2]++;
       max[2]=max[1];
     }
     if(pokerhand[1]==1 && pokerhand[3]==1){
       pokerhand[6]++;
       max[6]=max[3];
     }
     //�X�g���[�g�̔���
     //�`�X�g���[�g���H
     if(sort[0]==10 && sort[1]==11 && sort[2]==12 && sort[3]==13 && sort[4]==14){
       pokerhand[4]=pokerhand[4]+1;
       max[4] = 14;
     //�T�X�g���[�g���H
     } else if(sort[0]==2 && sort[1]==3 && sort[2]==4 && sort[3]==5 && sort[4]==14){
       pokerhand[4]=pokerhand[4]+1;
       max[4]=5;
     } else if(sort[0]+1==sort[1] && sort[0]+2==sort[2] && sort[0]+3==sort[3] && sort[0]+4==sort[4]){
       pokerhand[4]=pokerhand[4]+1;
       max[4]=sort[4];
     }
     //�t���b�V�����H
     for(i=0;i<4;i++){
       if(mark[i]==5){
         pokerhand[5]=pokerhand[5]+1;
         max[5]=sort[4];
       }
     }
     //�X�g���[�g�t���b�V�����H
     if(pokerhand[4]==1 && pokerhand[5]==1){
       pokerhand[8]=pokerhand[8]+1;
       max[4]=sort[4];
       if(max[4]==14){
         tokushu="���C�����X�g���[�g�t���b�V��";
       }
     }
     for(i=0;i<5;i++){
       check[i]=0;
     }
   }

   function Checkreset(){
     for(i=0;i<10;i++){
       pokerhand[i]=0;
       handpower[i]=0;
     }
   }

   function Drawcheck(){
     //�f�[�^�̐���
     for(i=0;i<5;i++){
       sort2[i]=(naibu4[i]-1)%13+1;
       if(sort2[i]==1){
         sort2[i]=14;
       }
     }
     for(i=0;i<5;i++){
       for(j=i+1;j<5;j++){
         if(sort2[i]>sort2[j]){
           work=sort2[i];
           sort2[i]=sort2[j];
           sort2[j]=work;
         }
       }
     }
     for(i=0;i<5;i++){
       horyu[i]=0;
     }
     for(i=0;i<5;i++){
       pea=0;
       if(horyu[i]==0){
         for(j=i+1;j<5;j++){
           if((naibu4[i]-1)%13+1==(naibu4[j]-1)%13+1){
             pea=pea+1;
             horyu[i]=1;
             horyu[j]=1;
           }
         }
       }
     }
     if(sort2[0]+1==sort2[1] && sort2[0]+2==sort2[2] && sort2[0]+3==sort2[3]){
       horyu[0]=1;
       horyu[1]=1;
       horyu[2]=1;
       horyu[3]=1;
     } else if(sort2[1]+1==sort2[2] && sort2[1]+2==sort2[3] && sort2[1]+3==sort2[4]){
       horyu[1]=1;
       horyu[2]=1;
       horyu[3]=1;
       horyu[4]=1;
     }
     for(i=0;i<4;i++){
       if(mark2[i]==4){
         horyumin=i*13+1;
         horyumax=i*13+13;
         for(j=0;j<5;j++){
           if(naibu2[j]>=horyumin && naibu2[j]<=horyumax){
             horyu[j]=1;
           }
         }
       }
     }
   }

   function Handcheck2(){
     for(i=0;i<10;i++){
       max2[i]=0;
      }
     //�����y�A�A�c�[�y�A�A�X���[�J�[�h�A�t�H�[�J�[�h�A�A�t���n�E�X�A�m�[�y�A���`�F�b�N
     Checkreset2();
     //�f�[�^�̐���
     for(i=0;i<5;i++){
       sort2[i]=(naibu4[i]-1)%13+1;
       if(sort2[i]==1){
         sort2[i]=14;
       }
     }
     for(i=0;i<5;i++){
       for(j=i+1;j<5;j++){
         if(sort2[i]>sort2[j]){
           work=sort2[i];
           sort2[i]=sort2[j];
           sort2[j]=work;
         }
       }
     }
     for(i=0;i<5;i++){
       pea=0;
       if(check2[i]==0){
         for(j=i+1;j<5;j++){
           if((naibu4[i]-1)%13+1==(naibu4[j]-1)%13+1){
             pea=pea+1;
             check2[j]=1;
           }
         }
         switch(pea){
           case 0:
             max2[0]=sort2[4];
             break;
           case 1:
             pokerhand2[1]=pokerhand2[1]+1;
             handpower2[1]=(naibu4[i]-1)%13+1;
             if(handpower2[1]==1){
               handpower2[1]=14;
             }
             if(handpower2[1]>max2[1]){
               max2[1]=handpower2[1];
             }
             break;
           case 2:
             pokerhand2[3]=pokerhand2[3]+1;
             handpower2[3]=(naibu4[i]-1)%13+1;
             if(handpower2[3]==1){
               handpower2[3]=14;
             }
             max2[3]=handpower2[3];
             break;
           case 3:
             pokerhand2[7]=pokerhand2[7]+1;
             handpower2[7]=(naibu4[i]-1)%13+1;
             if(handpower2[7]==1){
               handpower2[7]=14;
             }
             max2[7]=handpower2[7];
             break;
         }
       }
     }
     if(pokerhand2[1]>=2){
       pokerhand2[2]++;
       max2[2]=max2[1];
     }
     if(pokerhand2[1]==1 && pokerhand2[3]==1){
       pokerhand2[6]++;
       max2[6]=max2[3];
     }
     //�X�g���[�g�̔���
     //�`�X�g���[�g���H
     if(sort2[0]==10 && sort2[1]==11 && sort2[2]==12 && sort2[3]==13 && sort2[4]==14){
       pokerhand2[4]=pokerhand2[4]+1;
       max2[4] = 14;
     //�T�X�g���[�g���H
     } else if(sort2[0]==2 && sort2[1]==3 && sort2[2]==4 && sort2[3]==5 && sort2[4]==14){
       pokerhand2[4]=pokerhand2[4]+1;
       max2[4]=5;
     } else if(sort2[0]+1==sort2[1] && sort2[0]+2==sort2[2] && sort2[0]+3==sort2[3] && sort2[0]+4==sort2[4]){
       pokerhand2[4]=pokerhand2[4]+1;
       max2[4]=sort2[4];
     }
     //�t���b�V�����H
     for(i=0;i<4;i++){
       if(mark2[i]==5){
         pokerhand2[5]=pokerhand2[5]+1;
         max2[5]=sort2[4];
       }
     }
     //�X�g���[�g�t���b�V�����H
     if(pokerhand2[4]==1 && pokerhand2[5]==1){
       pokerhand2[8]=pokerhand2[8]+1;
       max2[4]=sort2[4];
       if(max2[4]==14){
         tokushu2="���C�����X�g���[�g�t���b�V��";
       }
     }
     for(i=0;i<5;i++){
       check2[i]=0;
     }
   }

   function Checkreset2(){
     for(i=0;i<10;i++){
       pokerhand2[i]=0;
       handpower2[i]=0;
     }
   }
     

   //�u���b�N�W���b�N�̊֐�
   function Button1(){
    if(game==1){
    if(kazu!=6){
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
      if(naibu2[kazu]>=40){
        mark[0]++;
      } else if(naibu2[kazu]>=27){
        mark[1]++;
      } else if(naibu2[kazu]>=14){
        mark[2]++;
      } else {
        mark[3]++;
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
     id++;
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
     kazu=kazu+1;
     bj=0;
     bjstr="";
    } else {
     alert("����ȏ�q�b�g�o���܂���B");
    }
    }
   }


   function restart(){
		  reset();
   }


   function gameset(){
     if(money>highscore){
       highscore=money;
       localStorage.setItem("AgaricusPokerHighscore", highscore);
       document.getElementById("score").value=highscore;
     }
     if(money>=1){
        kettei=0;
        restart();
      } else {
       alert("�M���͔j�Y���Ă��܂��A�n������ɂȂ����B\n�f�`�l�d�@�n�u�d�q");
       if(window.confirm("�n�����甇���オ��܂����H")){
                   money=10;
                   restart();
       } else {
         location.href = "Poker2_C.html";
       }
      }
    }

   function kaburi(){
    flg=1;
    if(tejun==0){
     for(i=0;i<5;i++){
      if(i!=kazu){
       if(naibu2[i]==naibu2[kazu]){
        flg=0;
       }
      }
     }
     for(i=0;i<5;i++){
       if(naibu4[i]==naibu2[kazu]){
        flg=0;
       }
     }
    } else {
     for(i=0;i<5;i++){
      if(i!=kazu2){
       if(naibu4[i]==naibu4[kazu2]){
        flg=0;
       }
      }
     }
     for(i=0;i<5;i++){
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
     if(naibu4[kazu2]>=40){
       mark2[0]++;
     } else if(naibu4[kazu2]>=27){
       mark2[1]++;
     } else if(naibu4[kazu2]>=14){
       mark2[2]++;
     } else {
       mark2[3]++;
     }
     document.getElementById(id).src=img[54].src;
     id++;
     kazu2=kazu2+1;
     flg=0;
   }

   function win(){
    if(tokushu=="���C�����X�g���[�g�t���b�V��"){
      money=money+(ok+plus)*10;
    } else {
      money=money+ok+plus;
    }
   }

   function lose(){
    money=money-ok-plus;
   }


   function disp(){
	for(kettei=0;kettei <1;){
        var needmin = parseInt(money*0.1);
        if(ok2<needmin){
          ok2 = needmin;
        }
        if(needmin==0){
          needmin=1;
        }
	ok = parseInt(window.prompt("�q��������͂��Ă��������B�Œ���z��$"+needmin+"�ł��B\n�莝���̂����F"+money, ok2));
               if(ok<needmin){
                 alert("�Œ���z��$"+needmin+"�ł��B");
               } else {
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
   }

   function disp2(){
	plus = parseInt(window.prompt("�ǉ�������z����͂��Ă��������B�Œ���z��$"+ok+"�ł��B\n�莝���̂����F"+(money-ok),ok));
               if(plus<ok){
                 alert("�Œ���z��$"+ok+"�ł��B");
                 plus=0;
               } else {
               if(plus+ok>money){
	alert("����������܂���B");
                 plus=0;
	} else if (plus+ok<=money){
                alert("�q����$"+ok+"�ɉ����A$"+plus+"��ǉ����܂����B");
                raise=1;
	} else {
	 alert("���͂�����������܂���B");
                 plus=0;
	}
              }
   }

    function reset(){
     for(i=0;i<10;i++){
      temochi[i]="����";
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
     game=0;
     insurance=0;
     plus=0;
     raise=0;
     tokushu="";
     tokushu2="";
     for(id="1";id!="6";id++){
       document.getElementById(id).src=img[54].src;
     }
     for(id="11";id!="16";id++){
       document.getElementById(id).src=img[54].src;
     }
      document.getElementById('abc').value=money;
      document.getElementById('def').value="�����ɖ����\������܂�";
      for(i=0;i<6;i++){
        document.tefuda.elements[i].checked=false;
      }
      mark[0]=0;
      mark[1]=0;
      mark[2]=0;
      mark[3]=0;
      mark2[0]=0;
      mark2[1]=0;
      mark2[2]=0;
      mark2[3]=0;
      document.getElementById("Bid").value="�r�b�h(B)";
      bidflg=0;
      pea=0;
      draw=0;
      dflg=0;
      for(i=0;i<10;i++){
        max[i]=0;
      }
      for(i=0;i<10;i++){
        max2[i]=0;
      }
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


    function AllChecked() {
      if(game==1){
        id="1";
        if(document.tefuda.elements[5].checked){
          for(i=0;i<5;i++){
            document.getElementById(id).src=img[54].src;
            document.tefuda.elements[i].checked=true;
            id++;
          }
        } else {
          for(i=0;i<5;i++){
            hyouji=naibu2[i]-1;
            document.getElementById(id).src=img[hyouji].src;
            document.tefuda.elements[i].checked=false;
            id++;
          }
        }
      } else {
          document.tefuda.elements[5].checked=false;
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
  for(id="1";id!="6";id++){
    document.getElementById(id).src=img[54].src;
  }
  for(id="11";id!="16";id++){
    document.getElementById(id).src=img[54].src;
  }
  highscore=localStorage.getItem("AgaricusPokerHighscore");