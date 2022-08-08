/*

	遊戲JavaScript文件
	
*/

//骰子的數字

//var dice = Math.floor(Math.random() * 6) + 1;

//console.log(dice);

var currentPlayer = 1;
var player1TotalScore = 0;
var player2TotalScore = 0;

var counter = 0;

var isPlayingGame = true;
//DOM - Document Object Model

//將隨機數字帶入score
//document.querySelector('#player1-current-score').textContent = dice;

//document.querySelector('#player' + currentPlayer + '-current-score').textContent = dice;

//document.querySelector('#player' + currentPlayer + '-current-score').innerHTML ='<h1>'+ dice +'<h1>';

//隱藏骰子
document.querySelector('.dice').style = 'display: none';

//隱藏獎盃
document.querySelector('.winner1').style = 'display: none';

document.querySelector('.winner2').style = 'display: none';

//Event監聽
document.querySelector('.roll').addEventListener('click',function(){

	if(isPlayingGame) {
		var dice = Math.floor(Math.random() * 6) + 1;
		console.log(dice);
	
		document.querySelector('.dice').style = 'display: block';
		document.querySelector('.dice').src = 'dice'+ dice +'.png';
	
		if(currentPlayer === 1){
			//顯示使用者1的分數
			document.getElementById('player'+ currentPlayer +'-current-score').textContent = dice;
	
			//總分
			player1TotalScore += dice;
			document.getElementById('player'+ currentPlayer +'-total-score').textContent = player1TotalScore;
			//顯示目前使用者特效
			document.querySelector('.panel-' + currentPlayer).classList.remove('active');
			currentPlayer = 2;
			document.querySelector('.panel-' + currentPlayer).classList.add('active');

			document.getElementById('player'+ currentPlayer +'-current-score').textContent = 0;
		}else{
			//顯示使用者2的分數
			document.getElementById('player'+ currentPlayer +'-current-score').textContent = dice;
	
			player2TotalScore += dice;
			document.getElementById('player'+ currentPlayer +'-total-score').textContent = player2TotalScore;
			//顯示目前使用者特效
			document.querySelector('.panel-' + currentPlayer).classList.remove('active');
			currentPlayer = 1;
			document.querySelector('.panel-' + currentPlayer).classList.add('active');
			document.getElementById('player'+ currentPlayer +'-current-score').textContent = 0;
		}
		
		counter += 1;
	
		if (counter === 7){
	
			if (player1TotalScore > player2TotalScore) {
	
				document.querySelector('.winner1').style = 'display: block';
				document.getElementById('player1-current-score').style = 'margin-top: 0px';
				isPlayingGame = false;
	
			} else if (player1TotalScore < player2TotalScore) {
	
				document.querySelector('.winner2').style = 'display: block';
				document.getElementById('player2-current-score').style = 'margin-top: 0px';
				isPlayingGame = false;
			} else {
	
				document.querySelector('.roll').textContent = '平手';
				isPlayingGame = false;
			}
		}
	} else {

		//init
		init();

		isPlayingGame = true;
	}
});


function init() {
	currentPlayer = 1;
	player1TotalScore = 0;
	player2TotalScore = 0;

	counter = 1;
	

	//隱藏骰子
	document.querySelector('.dice').style = 'display: none';

	//隱藏獎盃
	document.querySelector('.winner1').style = 'display: none';
	document.querySelector('.winner2').style = 'display: none';

	document.getElementById('player1-current-score').textContent = 0;
	document.getElementById('player2-current-score').textContent = 0;
	document.getElementById('player1-total-score').textContent = 0;
	document.getElementById('player2-total-score').textContent = 0;

	//顯示目前使用者特效
	document.querySelector('.panel-1').classList.add('active');

	document.querySelector('.panel-2').classList.remove('active');

	document.querySelector('.roll').textContent= '搖骰子';
	document.getElementById('player1-current-score').style = 'margin-top: 55px';
	document.getElementById('player2-current-score').style = 'margin-top: 55px';

}

document.querySelector('.newGame').addEventListener('click', function(){

	init();

	isPlayingGame = true;

});