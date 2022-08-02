/*

	遊戲JavaScript文件
	
*/

//骰子的數字

//var dice = Math.floor(Math.random() * 6) + 1;

//console.log(dice);

var currentPlayer = 1;
var player1TotalScore = 0;
var player2TotalScore = 0;
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

	var dice = Math.floor(Math.random() * 6) + 1;
	console.log(dice);

	document.querySelector('.dice').style = 'display: block';
	document.querySelector('.dice').src = 'dice'+ dice +'.png';

	if(currentPlayer === 1){

		document.getElementById('player'+ currentPlayer +'-current-score').textContent = dice;

		player1TotalScore += dice;
		document.getElementById('player'+ currentPlayer +'-total-score').textContent = player1TotalScore;
		currentPlayer = 2;

	}else{
		document.getElementById('player'+ currentPlayer +'-current-score').textContent = dice;

		player2TotalScore += dice;
		document.getElementById('player'+ currentPlayer +'-total-score').textContent = player2TotalScore;
		currentPlayer = 1;
	}
	
});

