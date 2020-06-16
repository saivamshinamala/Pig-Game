var score,
    scoreFinal0 = 0,
    scoreFinal1 = 0;
score = [0, 0];

init();

var text = "=> Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to \"hold\": \n1. If the player rolls a 1, they score nothing and it becomes the next player's turn.\n2. If the player rolls any other number, it is added to their turn total and the player's turn continues.\n3. If a player chooses to \"hold\", their turn total is added to their score, and it becomes the next player's turn.\n=> The first player to score 100 or more points wins.";


function onloadFunction() {
    document.getElementById('prop0').style.display = 'inline-block';
    document.getElementById('prop1').style.display = 'none';
    document.getElementById('score0').textContent = '0';
    document.getElementById('score1').textContent = '0';
    document.querySelector('.box0').textContent = '0';
    document.querySelector('.box1').textContent = '0';
    document.querySelector('.imgSize').style.display = 'none';
    alert(text);
}

function showRules(){
    alert(text);
}


document.querySelector('.button-primary').addEventListener('click',function(){
	
	window.location.reload(true);

	});


function init()
{

	score=[0,0];
	scoreFinal0=0;
	scoreFinal1=0;	
}

document.querySelector('.bttnDice').addEventListener('click', function () {

    var num = Math.floor(Math.random() * 6) + 1;
    var image = document.querySelector('.imgSize');

    document.querySelector('.imgSize').style.display = 'inline-block';
    image.src = 'dice-' + num + '.png';
    if (document.getElementById('prop0').style.display === 'inline-block') {
        if (num === 1) {
            document.querySelector('.box0').textContent = '0';
            document.getElementById('prop0').style.display = 'none';
            document.getElementById('prop1').style.display = 'inline-block';
        } else {
            var val = document.querySelector('.box0').textContent;
            val = Number(val);
            val = val + num;
            document.querySelector('.box0').textContent = val;
        }
    } else {
        if (num === 1) {
            document.querySelector('.box1').textContent = '0';
            document.getElementById('prop1').style.display = 'none';
            document.getElementById('prop0').style.display = 'inline-block';
        } else {
            var val = document.querySelector('.box1').textContent;
            val = Number(val);
            val = val + num;
            document.querySelector('.box1').textContent = val;
        }
    }
});


document.querySelector('.bttnHold').addEventListener('click', function () {

    var num0 = document.querySelector('.box0').textContent;
    var num1 = document.querySelector('.box1').textContent;
    num0 = Number(num0);
    num1 = Number(num1);
  

    if (document.getElementById('prop0').style.display === 'inline-block') {
        score[0] += num0;
        document.getElementById('score0').textContent = score[0];
        document.getElementById('prop0').style.display = 'none';
        document.getElementById('prop1').style.display = 'inline-block';
        var num0 = document.querySelector('.box0').textContent = 0;
        scoreFinal0 = document.getElementById('score0').textContent;

    } else {
        score[1] += num1;
        document.getElementById('score1').textContent = score[1];
        document.getElementById('prop0').style.display = 'inline-block';
        document.getElementById('prop1').style.display = 'none';
        var num1 = document.querySelector('.box1').textContent = 0;
        scoreFinal1 = document.getElementById('score1').textContent;
    }


    checkWinner();
});



function checkWinner() {

    var scoreF0 = 0,scoreF1 = 0;

    scoreF0 = document.querySelector('#score0').textContent;
    scoreF0 = Number(scoreF0);
    scoreF1 = document.querySelector('#score1').textContent;
    scoreF1 = Number(scoreF1);

    if (scoreF0 >= 100) {
        document.querySelector('#p0').textContent = 'WINNER';
        document.querySelector('.bttnDice').disabled = true;
        document.querySelector('.bttnHold').disabled = true;
    }
    if (scoreF1 >= 100) {
        document.querySelector('#p1').textContent = 'WINNER';
        document.querySelector('.bttnDice').disabled = true;
        document.querySelector('.bttnHold').disabled = true;
    }

}