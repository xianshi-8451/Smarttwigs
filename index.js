const p1Button = document.querySelector('#p1button');
const p2Button = document.querySelector('#p2button');
const player1score = document.querySelector('#player1score')
const player2score = document.querySelector('#player2score')
const terminate = document.querySelector('#terminate')
const Server1 = document.querySelector('#server1');
const Server2 = document.querySelector('#server2');
const scoresranking = document.querySelector('#scores')

var scores = []; 

let p1Score = 0;
let p2Score = 0;
let winningscore = 11;
let gameOver = false;
let isp1Sever = false;
let isp2Sever = false;

server1.addEventListener('click', function(){
	isp1Server = true;
	isp2Server = false;
	document.getElementById("server2").checked = false;
}) 

server2.addEventListener('click', function(){
	isp2Server = true;
	isp1Server = false;
	document.getElementById("server1").checked = false;
}) 

p1Button.addEventListener('click', function(){
	if(!gameOver){
	p1Score += 1;

	if(p1Score == 10 && p2Score == 10 || (p1Score >= 10 && p2Score >= 10 && Math.abs(p2Score-p1Score) ==1)){
		winningscore = Math.max(p2Score, p1Score, winningscore) + 1;
	if(Math.abs(p2Score-p1Score) ==1 ){
		winningscore = Math.max(p2Score, p1Score) + 1;
		if((p1Score - p2Score) ==2){
		gameOver = true;
		player1score.classList.add('winner');
		player2score.classList.add('loser');
		scores.push([document.getElementById("p1name").value, p1Score]);
		scores.push([document.getElementById("p2name").value, p2Score]);
		scores.sort(function(a, b) {
    	return b[1] - a[1];
	});
	}
		}
	}
	if(p1Score == winningscore){
		gameOver = true;
		player1score.classList.add('winner');
		player2score.classList.add('loser');
		scores.push([document.getElementById("p1name").value, p1Score]);
		scores.push([document.getElementById("p2name").value, p2Score]);
		scores.sort(function(a, b) {
    	return b[1] - a[1];
		});
	}
	player1score.textContent=p1Score;
}
})

p2Button.addEventListener('click', function(){
	if(!gameOver){
	p2Score += 1;

	if(p1Score == 10 && p2Score == 10 ||(p1Score >= 10 && p2Score >=10 && Math.abs(p2Score-p1Score) ==1)){
		winningscore = Math.max(p2Score, p1Score, winningscore) + 1;
		if(Math.abs(p2Score-p1Score) ==1 ){
		winningscore = Math.max(p2Score, p1Score) + 1;
		if((p2Score - p1Score) ==2){
		gameOver = true;
		player2score.classList.add('winner');
		player1score.classList.add('loser');
		scores.push([document.getElementById("p1name").value, p1Score]);
		scores.push([document.getElementById("p2name").value, p2Score]);
		scores.sort(function(a, b) {
    	return b[1] - a[1];
		});
		}
		}
	}
	if(p2Score == winningscore){
		gameOver = true;
		player2score.classList.add('winner');
		player1score.classList.add('loser');
		scores.push([document.getElementById("p1name").value, p1Score]);
		scores.push([document.getElementById("p2name").value, p2Score]);
		scores.sort(function(a, b) {
    	return b[1] - a[1];
		});
	}
	player2score.textContent=p2Score;
}
})


terminate.addEventListener('click', function(){
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
	player1score.textContent = 0;
	player2score.textContent = 0;
	player1score.classList.remove('winner');
	player1score.classList.remove('loser');
	player2score.classList.remove('winner');
	player2score.classList.remove('loser');
	document.getElementById("p1button").innerHTML = "Player One";
	document.getElementById("p2button").innerHTML = "Player Two";
	document.getElementById("server1").checked = false;
	document.getElementById("server2").checked = false;
	document.getElementById("scorelist").innerHTML = "";
})

scoresranking.addEventListener('click', function(){
	scores.forEach(function(item) {
  	var li = document.createElement("li");
  	var text = document.createTextNode(item);
  	li.appendChild(text);
  	document.getElementById("scorelist").appendChild(li);
});
})
function getp1Value(){
	var x = document.getElementById("p1name").value;
	document.getElementById("p1button").innerHTML = x;
}
console.log(scores);



function getp2Value(){
	var x = document.getElementById("p2name").value;
	document.getElementById("p2button").innerHTML = x;
}