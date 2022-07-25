/*

	遊戲JavaScript文件
	
*/

//骰子的數字

var dice = Math.floor(Math.random() * 6) + 1;

console.log(dice);

var currentPlayer = 2;

//DOM - Document Object Model

//將隨機數字帶入score
//document.querySelector('#player1-current-score').textContent = dice;

document.querySelector('#player' + currentPlayer + '-current-score').textContent = dice;