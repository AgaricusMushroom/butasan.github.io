var insert = null;
var flg = false;
var focusflg = false;

function paste(){
	if(document.sqlform.question.value==""){
		document.sqlform.question.value = (clipboardData.getData('text') || '');
		return;
	}
	if(document.sqlform.answer.value==""){
		document.sqlform.answer.value = (clipboardData.getData('text') || '');
		return;
	}
	if(document.sqlform.miss1.value==""){
		document.sqlform.miss1.value = (clipboardData.getData('text') || '');
		return;
	}
	if(document.sqlform.miss2.value==""){
		document.sqlform.miss2.value = (clipboardData.getData('text') || '');
		return;
	}
	if(document.sqlform.miss3.value==""){
		document.sqlform.miss3.value = (clipboardData.getData('text') || '');
		return;
	}
	if(document.sqlform.explanation.value==""){
		document.sqlform.explanation.value = (clipboardData.getData('text') || '');
		return;
	}
}

function create(){
	focusflg = false;
	var table = null;
	var id = document.sqlform.id.value;
	var question = document.sqlform.question.value;
	var classification = "error";
	var radioList = document.getElementsByName("table");
	for(var i=0; i<radioList.length; i++){
		if (radioList[i].checked) {
			table = radioList[i].value;
			break;
		}
	}
	var radioList = document.getElementsByName("classification");
	for(var i=0; i<radioList.length; i++){
		if (radioList[i].checked) {
			classification = radioList[i].value;
			break;
		}
	}
	var answer = document.sqlform.answer.value;
	var miss1 = document.sqlform.miss1.value;
	var miss2 = document.sqlform.miss2.value;
	var miss3 = document.sqlform.miss3.value;
	var explanation = document.sqlform.explanation.value;
	var list = document.getElementsByName("sqltype");
	var where = document.forms.sqlform.where.value;
	if(where == "classification"){
		var id2 = document.forms.sqlform.classificationvalue.value;
	} else {
		var id2 = document.sqlform.id2.value;
	}
	if(list[0].checked==true){
		if(table==null || classification=="error" || question=="" || answer=="" || miss1=="" || miss2=="" || miss3=="" || id =="" || isFinite(parseInt(id)) == false){
			var error = "";
			if(table == null){
				error+= "・テーブルが選択されていません。\n";
				if(focusflg == false){
					focusflg = true;
					document.sqlform[0].focus();
				}
			}
			if(id == ""){
				error+= "・ＩＤが入力されていません。\n";
				if(focusflg == false){
					focusflg = true;
					document.sqlform.id.focus();
				}
			}
			if(id != "" && isFinite(parseInt(id)) == false){
				error+= "・ＩＤとして使用出来るのは数字のみです。\n";
				if(focusflg == false){
					focusflg = true;
					document.sqlform.id.focus();
				}
			}
			if(question == ""){
				error+= "・問題文が入力されていません。\n";
				if(focusflg == false){
					focusflg = true;
					document.sqlform.question.focus();
				}
			}
			if(classification == "error"){
				error+= "・分類が選択されていません。\n";
				if(focusflg == false){
					focusflg = true;
					document.sqlform[5].focus();
				}
			}
			if(answer == ""){
				error+= "・答えが入力されていません。\n";
				if(focusflg == false){
					focusflg = true;
					document.sqlform.answer.focus();
				}
			}
			if(miss1 == ""){
				error+= "・ハズレ１が入力されていません。\n";
				if(focusflg == false){
					focusflg = true;
					document.sqlform.miss1.focus();
				}
			}
			if(miss2 == ""){
				error+= "・ハズレ２が入力されていません。\n";
				if(focusflg == false){
					focusflg = true;
					document.sqlform.miss2.focus();
				}
			}
			if(miss3 == ""){
				error+= "・ハズレ３が入力されていません。\n";
				if(focusflg == false){
					focusflg = true;
					document.sqlform.miss3.focus();
				}
			}
			document.sqlform.sql.value = "【Error】\n入力が不正です。\n\n"+error;
			return;
		} else {
			if(insert == null){
				insert = "("+parseInt(id)+",'"+question+"','"+classification+"','"+answer+"','"+miss1+"','"+miss2+"','"+miss3+"','"+explanation+"')";
				insert = insert.replace( /\n/g , "\\r\\n" );
			} else {
				var insert2 = parseInt(id)+",'"+question+"','"+classification+"','"+answer+"','"+miss1+"','"+miss2+"','"+miss3+"','"+explanation;
				insert2 = insert2.replace( /\n/g , "\\r\\n" );
				insert = insert+"\n,("+insert2+"')";
			}
			var disp = "INSERT INTO "+table+ " VALUES\n"+insert+";";
			document.sqlform.sql.value = disp;
			id++;
			document.sqlform.id.value = id;
			document.sqlform.question.value = "";
			document.sqlform.answer.value = "";
			document.sqlform.miss1.value = "";
			document.sqlform.miss2.value = "";
			document.sqlform.miss3.value = "";
			document.sqlform.explanation.value = "";
			window.scrollTo(0,0);
			document.sqlform.question.focus();
			return;
		}
	} else if(list[1].checked==true){
		if(table == null || id2 =="" || (where == "id" && isFinite(parseInt(id2)) == false ) || ( id == "" && classification=="error" && question=="" && answer=="" && miss1=="" && miss2=="" && miss3=="" && explanation=="")){
			var error = "";
			if(table == null){
				error+= "・テーブルが選択されていません。\n";
				if(focusflg == false){
					focusflg = true;
					document.sqlform[0].focus();
				}
			}
			if(id2 == ""){
				error+= "・変更するレコードが入力されていません。\n";
				if(focusflg == false){
					focusflg = true;
					document.sqlform.id2.focus();
				}
			}
			if(id2 != "" && (where == "id" && isFinite(parseInt(id2)) == false )){
				error+= "・ＩＤとして使用出来るのは数字のみです。\n";
				if(focusflg == false){
					focusflg = true;
					document.sqlform.id2.focus();
				}
			}
			if(id == "" && classification=="error" && question=="" && answer=="" && miss1=="" && miss2=="" && miss3=="" && explanation==""){
				error+= "・修正箇所が入力されていません。\n";
				if(focusflg == false){
					focusflg = true;
					document.sqlform.id.focus();
				}
			}
			document.sqlform.sql.value = "【Error】\n入力が不正です。\n\n"+error;
			return;
		} else {
			if(id != "" && isFinite(parseInt(id)) == false){
				document.sqlform.sql.value = "【Error】\n入力が不正です。\n\n・ＩＤとして使用出来るのは数字のみです。";
				document.sqlform.id.focus();
				return;
			}
			update = "";
			if(id != ""){
				if(update != "") update+=",";
				update += "id="+parseInt(id)+"";
			}
			if(question != ""){
				if(update != "") update+=",";
				update += "question='"+question+"'";
			}
			if(classification != "error"){
				if(update != "") update+=",";
				update += "classification='"+classification+"'";
			}
			if(answer != ""){
				if(update != "") update+=",";
				update += "answer='"+answer+"'";
			}
			if(miss1 != ""){
				if(update != "") update+=",";
				update += "miss1='"+miss1+"'";
			}
			if(miss2 != ""){
				if(update != "") update+=",";
				update += "miss2='"+miss2+"'";
			}
			if(miss3 != ""){
				if(update != "") update+=",";
				update += "miss3='"+miss3+"'";
			}
			if(explanation != ""){
				if(update != "") update+=",";
				update += "explanation='"+explanation+"'";
			}
			var disp = "UPDATE "+table+ " SET "+update+" WHERE "+where+"='"+id2+"';";
			if(where == "id")var disp = "UPDATE "+table+ " SET "+update+" WHERE "+where+"="+parseInt(id2)+";";
			disp = disp.replace( /\n/g , "\\r\\n" );
			document.sqlform.sql.value = disp;
			document.sqlform.id.value = "";
			document.sqlform.question.value = "";
			document.sqlform.answer.value = "";
			document.sqlform.miss1.value = "";
			document.sqlform.miss2.value = "";
			document.sqlform.miss3.value = "";
			document.sqlform.explanation.value = "";
			window.scrollTo(0,0);
			return;
		}
	} else if(list[2].checked==true){
		if( table == null || id2 =="" || (where == "id" && isFinite(parseInt(id2)) == false )){
			var error = "";
			if(table == null){
				error+= "・テーブルが選択されていません。\n";
				if(focusflg == false){
					focusflg = true;
					document.sqlform[0].focus();
				}
			}
			if(id2 == ""){
				error+= "・変更するレコードが入力されていません。\n";
				if(focusflg == false){
					focusflg = true;
					document.sqlform.id2.focus();
				}
			}
			if(id2 != "" && (where == "id" && isFinite(parseInt(id2)) == false )){
				error+= "・ＩＤとして使用出来るのは数字のみです。\n";
				if(focusflg == false){
					focusflg = true;
					document.sqlform.id2.focus();
				}
			}
			document.sqlform.sql.value = "【Error】\n入力が不正です。\n\n"+error;
			return;
		} else {
			id2 = id2.replace( /\n/g , "\\r\\n" );
			document.sqlform.sql.value = "DELETE FROM "+table+ " WHERE "+where+"='"+id2+"';";
			if(where == "id")document.sqlform.sql.value = "DELETE FROM "+table+ " WHERE "+where+"="+parseInt(id2)+";";
			window.scrollTo(0,0);
			return;
		}
	}
	document.sqlform.sql.value = "【Error】\nＳＱＬ文が選択されていません。";
	window.scrollTo(0,0);
}

function TextAreaSelect(){
	if(flg == false){
		document.sqlform.sql.select();	//テキストエリアを全選択する
		flg = true;
	}
}

function onSql(){
	document.sqlform.sql.focus();
	document.sqlform.sql.select();
}

function deleteLog(){
	insert=null;
	document.sqlform.sql.value = "";
}

function init(){
	var list = document.getElementsByName("sqltype");
	list[0].checked=true;
	var list = document.getElementsByName("table");
	list[0].checked=true;
	var list = document.getElementsByName("classification");
	list[0].checked=true;
	document.sqlform.where.selectedIndex=0;
}

function resetFlg(){
	flg = false;
}

function selectChange(){
	if(document.forms.sqlform.where.value == "classification"){
		document.getElementById("classificationvalue").style.display = "inline";
		document.getElementById("id2").style.display = "none";
	} else {
		document.getElementById("classificationvalue").style.display = "none";
		document.getElementById("id2").style.display = "inline";
	}
}

function radioReset(){
	var list = document.getElementsByName("classification");
	list[3].checked=false;
}

function keyDown(){
	if(event.keyCode == 13 && event.shiftKey == false){
		nextForm();
		return false;
	}
}

currentFNo = 0;
function nextForm() {
	var focus_id = document.activeElement.id;
	if(focus_id=="ip" || focus_id=="fe" || focus_id=="ap"){
		currentFNo = 3;
	} else if(focus_id=="question"){
		var list = document.getElementsByName("classification");
		if(list[0].checked){
			currentFNo = 5;
		} else if(list[1].checked){
			currentFNo = 6;
		} else if(list[2].checked){
			currentFNo = 7;
		} else {
			currentFNo = 8;
		}
	} else if(focus_id=="tc" || focus_id=="st" || focus_id=="mn" || focus_id=="res"){
		currentFNo = 9;
	} else if(focus_id=="explanation"){
		create();
		return false;
	} else if(focus_id=="done" || focus_id=="remove" || focus_id=="done" || focus_id=="insert" || focus_id=="update" || focus_id=="delete" || focus_id=="id2" || focus_id=="classificationvalue" || focus_id=="sql"){
		return;
	} else if(focus_id=="select_where"){
		currentFNo = 21;
		if(document.forms.sqlform.where.value == "classification")currentFNo = 22;
	} else {
		if(focus_id=="id")currentFNo=3;
		if(focus_id=="question")currentFNo=4;
		if(focus_id=="answer")currentFNo=9;
		if(focus_id=="miss1")currentFNo=10;
		if(focus_id=="miss2")currentFNo=11;
		if(focus_id=="miss3")currentFNo=12;
		currentFNo++;
	}
	currentFNo %= document.sqlform.elements.length;
	document.sqlform[currentFNo].focus();
}
window.document.onkeydown = keyDown;

window.onload = init;