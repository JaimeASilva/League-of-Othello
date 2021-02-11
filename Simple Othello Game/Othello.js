function Menu1(){
	document.getElementsByClassName("ret")[0].style.display = "none";
  document.getElementsByTagName('button')[4].style.display = "block";
	document.getElementsByTagName('button')[5].style.display = "block";
	document.getElementsByTagName('img')[0].style.marginLeft="0px";
	document.getElementsByTagName('img')[0].style.marginRight="auto";
	document.getElementsByClassName("logout")[0].style.display = "block";

}

function Instruction() {
	document.getElementsByClassName("Instruction")[0].style.display = "block";

}
function Classification() {
	document.getElementsByClassName("Classification")[0].style.display = "block";

}
function Chose() {
	document.getElementsByTagName('button')[4].style.display = "none";
	document.getElementsByTagName('button')[5].style.display = "none";
	document.getElementsByClassName("Chose1")[0].style.display = "block";
	document.getElementsByTagName('button')[2].style.display = "block";
	document.getElementsByClassName("logout")[0].style.display = "none";


	gameStyle=1;
 //fazer maneira para esperar receber o resultado do que se escolhe na cor etc

}
function CloseInstr() {
	document.getElementsByClassName("Instruction")[0].style.display = "none";
}
function CloseClas() {
	document.getElementsByClassName("Classification")[0].style.display = "none";
}
function play1() {

	document.getElementsByClassName("Chose1")[0].style.display = "none";
	document.getElementsByTagName('button')[0].style.display = "block";
	document.getElementsByTagName('button')[1].style.display = "block";
	document.getElementsByClassName("surrender")[0].style.display = "block";
	//document.getElementsById("alertbutton").style.display = "block";
	play();
}

function play2() {
	gameStyle=0;
	document.getElementsByTagName('button')[4].style.display = "none";
	document.getElementsByTagName('button')[5].style.display = "none";
	document.getElementsByClassName("Chose1")[0].style.display = "none";
	document.getElementsByTagName('button')[0].style.display = "block";
	document.getElementsByTagName('button')[1].style.display = "block";
	document.getElementsByTagName('button')[2].style.display = "block";
	document.getElementsByClassName("logout")[0].style.display = "none";
	document.getElementsByClassName("surrender")[0].style.display = "block";
	//document.getElementById("alertbutton").style.display = "block";
	play();
}
function Home() {
	document.getElementsByTagName('button')[0].style.display = "none";
	document.getElementsByTagName('button')[1].style.display = "none";
	document.getElementsByTagName('button')[2].style.display = "none";
	document.getElementsByTagName('button')[4].style.display = "block";
	document.getElementsByTagName('button')[5].style.display = "block";
	document.getElementsByClassName("Chose1")[0].style.display = "none";
	document.getElementsByClassName("surrender")[0].style.display = "none";
	document.getElementById("alertbutton").style.display = "block";
	boardBack.style.display = "none";
	helpBack.style.display = "none";
	pieceBack.style.display = "none";
	boardBack.innerHTML="";
	helpBack.innerHTML="";
	pieceBack.innerHTML="";
	document.getElementsByClassName("logout")[0].style.display = "block";
	game=1;

}
function Close() {
	document.getElementsByClassName("msg")[0].style.display = "none";
	document.getElementById("alertbutton").style.visibility= "hidden";
}

function Logout() {
	document.getElementsByTagName('button')[4].style.display = "none";
	document.getElementsByTagName('button')[5].style.display = "none";
	document.getElementsByTagName('img')[0].style.marginLeft="auto";
	document.getElementsByClassName("ret")[0].style.display = "block";
		document.getElementsByClassName("logout")[0].style.display = "none";
}

//////////////////////////////


//vars
var side = document.getElementsByName("color");
var level = document.getElementsByName("level");
var gameStyle =0;

var alertbox= document.getElementsByClassName("msg")[0];
var	alertbutton= document.getElementById("alertbutton");

var boardBack= document.createElement("DIV");
var pieceBack= document.createElement("DIV");
var helpBack= document.createElement("DIV");
var score= document.createElement("DIV");
var currentPlay= document.createElement("DIV");
var passButton = document.createElement("BUTTON");
passButton.setAttribute("id", "passButton");
document.body.appendChild(passButton);
passButton.innerHTML="Pass Move";
passButton.onclick=passMove;
passButton.style.display="none";

var game=1;

var aiTurn =0;

var player=1;

var pieces=[
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,2,1,0,0,0],
[0,0,0,1,2,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
]

level[0].checked=true;
function winner(){
    var b=0;
    var w=0;
    for(var i =0;i<8;i++){
        for(var j =0;j<8;j++){
            if(pieces[i][j]==1){
                b+=1;
            }
            else if(pieces[i][j]==2){
                w+=1;
            }
        }
    }

    if(b>w){return 1;}
    else if (w>b){return 2;}
    else {return 3;}

}

function gameOver(){
    game=0;
    alertbox.style.display="block";
		alertbutton.style.visibility="visible";
    if(winner()==1){

        alertbox.innerHTML="Black Wins!!!";
    }
    else if (winner()==2){

        alertbox.innerHTML="White Wins!!!";
    }
    else{
        alertbox.innerHTML="WOW well played both!!!";
    }

    return;

}

function invalid(){
    alertbox.style.display="block";
		alertbutton.style.visibility="visible";
    alertbox.innerHTML="Invalid placement!";
    return;
}



function surrender(player){
    alertbox.style.display="block";
		alertbutton.style.visibility="visible";
    if(player==1){alertbox.innerHTML="Black gave up, White wins!!!";}
    else{{alertbox.innerHTML="White gave up, Black wins!!!";}}
    return;
}
function get_level(){
	if(level[1].checked){return 1;}
	else if(level[2].checked){return 2;}
	else{return 0;}
}



side[0].checked=true;
function get_color(){

	if(side[1].checked){return 2;}
	else{return 1;}
}


function set_score(){
	score.setAttribute("id", "score");
	document.body.appendChild(score);
	score.innerHTML="Black: 2  White: 2 ";
}

function set_currentPlay(){
	currentPlay.setAttribute("id", "currentPlay");
	document.body.appendChild(currentPlay);
	currentPlay.innerHTML="Black's Turn";
}

function board_back(){
	//var boardBack= document.createElement("DIV");
	boardBack.style.display = "block";
	boardBack.setAttribute("id", "board_back");
	document.body.appendChild(boardBack);

}

function piece_back(){
	pieceBack.style.display = "block";
	//var boardBack= document.createElement("DIV");
	pieceBack.setAttribute("id", "piece_back");
	document.body.appendChild(pieceBack);

}

function help_back(){
	helpBack.style.display = "block";
	helpBack.setAttribute("id", "help_back");
	document.body.appendChild(helpBack);

}

function play(){
	pieces=[
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,2,1,0,0,0],
	[0,0,0,1,2,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	]

	boardBack.appendChild(alertbox);

	var gameLevel = get_level();
	var gameColor = get_color();

	board_back();
	creating_squares();
	piece_back();
	help_back();
	set_score();
	set_currentPlay();
	print_pieces();

	if(gameStyle !=0){
		vs_ai(gameLevel,gameColor);
	}

}

function vs_ai(gameLevel,gameColor){

	if(gameLevel==0){

		if(gameColor==1){
			moveHelp();
			if(aiTurn==1){
				currentPlay.innerHTML="White's Turn";
				setTimeout(function(){ai_move0(2)}, 1000);
				setTimeout(function(){currentPlay.innerHTML="Black's Turn"}, 1000);
				if(!canPlay(1) && !canPlay(2)){gameOver();return;}
				aiTurn=0;
				player=1;
				helpBack.innerHTML="";
				setTimeout(function(){moveHelp()}, 1000);

			}
		}
		else{
			currentPlay.innerHTML="Black's Turn";
			setTimeout(function(){ai_move0(1)}, 1000);
			setTimeout(function(){currentPlay.innerHTML="White's Turn"}, 1000);
			if(!canPlay(1) && !canPlay(2)){gameOver();return;}
			aiTurn=0;
			player=2;
			helpBack.innerHTML="";
			setTimeout(function(){moveHelp()}, 1000);

		}
	}
	else if(gameLevel==1){
		if(gameColor==1){
			if(aiTurn==1){
				currentPlay.innerHTML="White's Turn";
				setTimeout(function(){ai_move1(2)}, 1000);
				setTimeout(function(){currentPlay.innerHTML="Black's Turn"}, 1000);
				if(!canPlay(1) && !canPlay(2)){gameOver();return;}
				aiTurn=0;
				player=1;
			}
		}
		else{
			currentPlay.innerHTML="Black's Turn";
			setTimeout(function(){ai_move1(1)}, 1000);
			setTimeout(function(){currentPlay.innerHTML="White's Turn"}, 1000);
			if(!canPlay(1) && !canPlay(2)){gameOver();return;}
			aiTurn=0;
			player=2;
		}
	}
	else{
		if(gameColor==1){
			if(aiTurn==1){
				currentPlay.innerHTML="White's Turn";
				setTimeout(function(){ai_move2(2)}, 1000);
				setTimeout(function(){currentPlay.innerHTML="Black's Turn"}, 1000);
				if(!canPlay(1) && !canPlay(2)){gameOver();return;}
				aiTurn=0;
				player=1;

			}
		}
		else{
			currentPlay.innerHTML="Black's Turn";
			setTimeout(function(){ai_move2(1)}, 1000);
			setTimeout(function(){currentPlay.innerHTML="White's Turn"}, 1000);
			if(!canPlay(1) && !canPlay(2)){gameOver();return;}
			aiTurn=0;
			player=2;

		}
	}
}


function creating_squares() {
	for(var i=0;i<8;i++){
		for(var j=0;j<8;j++){
			var square = document.createElement("DIV");
			square.setAttribute("id", "green_square");
			square.setAttribute("onclick","place_piece("+i+","+j+")");
			square.style.left=(75*i)+"px";
			square.style.top=(75*j)+"px";
			boardBack.appendChild(square);
		}
	}
}


function passMove(player){
	if(player==1){
	 	player=2;
	 	currentPlay.innerHTML="White's Turn";

	 }
	else {
	 	player=1;
	 	currentPlay.innerHTML="Black's Turn";

	}

	passButton.style.display="none";

	if(gameStyle==1 && aiTurn==0){
		aiTurn=1;
		vs_ai(get_level(),get_color());
	}

	return;
}





function ai_move0(aiSide){
	var options=[];
	for(var i=0;i<8;i++){
		for(var j=0;j<8;j++){
			if(check_square(i,j,aiSide)){
				var flippablePieces = flippable_pieces(i,j,aiSide);
				options.push({x: i, y: j, in: flippablePieces.length});
			}
		}
	}
	if (options.length==0) {return};
	var currentMin = options[0];
	for(var i=1; i<options.length; i++){
		if(options[i].in<currentMin.in){
			currentMin = options[i];
		}
	}
	var optx = currentMin.x;
	var opty = currentMin.y;
	var flippablePieces = flippable_pieces(optx,opty,aiSide);
	change_pieces(flippablePieces);
	pieces[optx][opty]=aiSide;
	print_pieces();
	return;
}

function ai_move1(aiSide){
	var options=[];
	for(var i=0;i<8;i++){
		for(var j=0;j<8;j++){
			if(check_square(i,j,aiSide)){
				options.push({x: i, y: j});
			}
		}
	}
	var index = Math.floor(Math.random() * options.length);
	var optx = options[index].x;
	var opty = options[index].y;
	var flippablePieces = flippable_pieces(optx,opty,aiSide);
	change_pieces(flippablePieces);
	pieces[optx][opty]=aiSide;
	print_pieces();
	return;
}

function ai_move2(aiSide){

	var options=[];
	for(var i=0;i<8;i++){
		for(var j=0;j<8;j++){
			if(check_square(i,j,aiSide)){
				var flippablePieces = flippable_pieces(i,j,aiSide);
				options.push({x: i, y: j, in: flippablePieces.length});
			}
		}
	}
	if (options.length==0) {return};
	var currentMax = options[0];
	for(var i=1; i<options.length; i++){
		if(options[i].in>currentMax.in){
			currentMax = options[i];
		}
	}
	var optx = currentMax.x;
	var opty = currentMax.y;
	var flippablePieces = flippable_pieces(optx,opty,aiSide);
	change_pieces(flippablePieces);
	pieces[optx][opty]=aiSide;
	print_pieces();
	return;
}



function print_pieces(){
	pieceBack.innerHTML="";
	var black=0;
	var white=0;

	for(var i=0;i<8;i++){
		for(var j=0;j<8;j++){
			if(pieces[i][j]==0){}
			else{
				var current_piece = document.createElement("DIV");
				current_piece.setAttribute("id", "piece");
				current_piece.style.left=(75*i+6)+"px";
				current_piece.style.top=(75*j+6)+"px";

				if(pieces[i][j]==1){
					current_piece.style.backgroundColor="black";
					black+=1;
				}
				if(pieces[i][j]==2){
					current_piece.style.backgroundColor="white";
					white+=1;
				}

				pieceBack.appendChild(current_piece);
			}
		}
	}

	score.innerHTML="Black:"+ black+ " White:"+ white;

}


function moveHelp(){

	if(aiTurn==0){
		helpBack.innerHTML="";
		for(var i=0;i<8;i++){
			for(var j=0;j<8;j++){
				if(pieces[i][j]==0 && check_square(i,j,player)){
					var move_help = document.createElement("DIV");
					move_help.setAttribute("id", "move_help");
					move_help.style.left=(75*i+5)+"px";
					move_help.style.top=(75*j+5)+"px";
					move_help.setAttribute("onclick","place_piece("+i+","+j+")");

					if(player==1){
						move_help.style.border="3px solid black";
					}
					else if(player==2){
						move_help.style.border="3px solid white";
					}

					helpBack.appendChild(move_help);
				}
			}
		}
	}
}


function place_piece(x,y){

	if(game==1){

		if(pieces[x][y]!=0){return;}

		if(check_square(x,y,player)==true){
			var flippablePieces = flippable_pieces(x,y,player);
			change_pieces(flippablePieces);
			pieces[x][y]=player;
			print_pieces();
			if(player==1){player=2;}
			else {player=1;}
			if (player==1){currentPlay.innerHTML="Black's Turn";}
			else{{currentPlay.innerHTML="White's Turn";}}
			if(!canPlay(1) && !canPlay(2)){gameOver();return;}

			if(!canPlay(player)){
				passButton.style.display="block";

				return;

			}
			if(gameStyle==1){
				aiTurn=1;
				vs_ai(get_level(),get_color());
			}
		}
		else {
			invalid();
		}
	}
}


function canPlay(playId){
	for(var i=0;i<8;i++){
		for(var j=0;j<8;j++){
			if(check_square(i,j,playId)==true){
				return true;
			}
		}
	}
	return false;
}

function check_square(x,y,playId){
	var flippable = flippable_pieces(x,y,playId);
	if(pieces[x][y]!=0 || flippable.length==0){return false;}
	else{return true;}
}

function change_pieces(flippablePieces){
	if(flippablePieces.length==0){return;}
	for(var i=0;i<flippablePieces.length;i++){
		var thisPiece = flippablePieces[i];
		if(pieces[thisPiece.x][thisPiece.y]==1){pieces[thisPiece.x][thisPiece.y]=2;}
		else {pieces[thisPiece.x][thisPiece.y]=1;}

	}
}

function flippable_pieces(x,y,playId){
	var flippablePieces = [];

	//search left
	var maybe=[];
	var xx=x;
	while(xx>0){
		xx-=1;
		var thisPiece = pieces[xx][y];
		if(thisPiece==0){
			break;
		}
		else if(thisPiece==playId){
			flippablePieces=flippablePieces.concat(maybe);
			break;
		}
		else{
			var newPiece = {x:xx,y:y};
			maybe.push(newPiece);
		}
	}

	//search right
	var maybe=[];
	var xx=x;
	while(xx<7){
		xx+=1;
		var thisPiece = pieces[xx][y];
		if(thisPiece==0){
			break;
		}
		else if(thisPiece==playId){
			flippablePieces=flippablePieces.concat(maybe);
			break;
		}
		else{
			var newPiece = {x:xx,y:y};
			maybe.push(newPiece);
		}
	}

	//search up
	var maybe=[];
	var yy=y;
	while(yy>0){
		yy-=1;
		var thisPiece = pieces[x][yy];
		if(thisPiece==0){
			break;
		}
		else if(thisPiece==playId){
			flippablePieces=flippablePieces.concat(maybe);
			break;
		}
		else{
			var newPiece = {x:x,y:yy};
			maybe.push(newPiece);
		}
	}

	//search down
	var maybe=[];
	var yy=y;
	while(yy<7){
		yy+=1;
		var thisPiece = pieces[x][yy];
		if(thisPiece==0){
			break;
		}
		else if(thisPiece==playId){
			flippablePieces=flippablePieces.concat(maybe);
			break;
		}
		else{
			var newPiece = {x:x,y:yy};
			maybe.push(newPiece);
		}
	}

	//search left-down
	var maybe=[];
	var yy=y;
	var xx=x;
	while(yy<7 && xx>0 ){
		yy+=1;
		xx-=1;
		var thisPiece = pieces[xx][yy];
		if(thisPiece==0){
			break;
		}
		else if(thisPiece==playId){
			flippablePieces=flippablePieces.concat(maybe);
			break;
		}
		else{
			var newPiece = {x:xx,y:yy};
			maybe.push(newPiece);
		}
	}

	//search right-down
	var maybe=[];
	var yy=y;
	var xx=x;
	while(yy<7 && xx<7 ){
		yy+=1;
		xx+=1;
		var thisPiece = pieces[xx][yy];
		if(thisPiece==0){
			break;
		}
		else if(thisPiece==playId){
			flippablePieces=flippablePieces.concat(maybe);
			break;
		}
		else{
			var newPiece = {x:xx,y:yy};
			maybe.push(newPiece);
		}
	}

	//search left-up
	var maybe=[];
	var yy=y;
	var xx=x;
	while(yy>0 && xx>0 ){
		yy-=1;
		xx-=1;
		var thisPiece = pieces[xx][yy];
		if(thisPiece==0){
			break;
		}
		else if(thisPiece==playId){
			flippablePieces=flippablePieces.concat(maybe);
			break;
		}
		else{
			var newPiece = {x:xx,y:yy};
			maybe.push(newPiece);
		}
	}

	//search right-up
	var maybe=[];
	var yy=y;
	var xx=x;
	while(yy>0 && xx<7 ){
		yy-=1;
		xx+=1;
		var thisPiece = pieces[xx][yy];
		if(thisPiece==0){
			break;
		}
		else if(thisPiece==playId){
			flippablePieces=flippablePieces.concat(maybe);
			break;
		}
		else{
			var newPiece = {x:xx,y:yy};
			maybe.push(newPiece);
		}
	}

	return flippablePieces;

}
