var diff = 6;
var lives = 2;
var colors = generateRandomColors(diff);
var squares = document.querySelectorAll('.square');
var goal = colors[Math.floor(Math.random() * colors.length)];
var chosen = document.querySelector('#chosen');
var msg = document.querySelector('#msg');
var h1 = document.querySelector('h1');
var reset = document.querySelector('#reset');
var hard = document.querySelector('#hard');
var easy = document.querySelector('#easy');


chosen.textContent = "RGB" + goal.slice(3);

for(var i=0; i < squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === goal)
		{
			msg.textContent = 'Success!';
			correct(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else
		{
			this.style.backgroundColor = '#555555'; 
			lives--;
			if(lives == 0)
			{
				msg.textContent = 'You Lost!';
				correct(goal);
			}
			else
				msg.textContent = 'Lives left -' + lives;
		}
	})
}

function correct(color){
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
	reset.textContent = 'Play Again';
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr[i] = "rgb("+ Math.floor(Math.random() * 256) + ", "+ Math.floor(Math.random() * 256) +", " + Math.floor(Math.random() * 256) + ")";
	}
	return arr;
}

reset.addEventListener('click', resetting);
hard.addEventListener('click', function(){
		hard.classList.add('selected');
		easy.classList.remove('selected');	
		diff = 6;
		resetting();
})
easy.addEventListener('click', function(){
		hard.classList.remove('selected');
		easy.classList.add('selected');
		diff = 3;
		resetting();
})

function resetting(){
	colors = generateRandomColors(diff);
	goal = colors[Math.floor(Math.random() * colors.length)];
	chosen.textContent = "RGB" + goal.slice(3);
	for(var i = 0; i < squares.length; i++){
		if(i < colors.length)
			squares[i].style.backgroundColor = colors[i];
		else
			squares[i].style.backgroundColor = '#555555';
	}
	h1.style.backgroundColor = '#a83242';
	reset.textContent = 'New Colors';
	msg.textContent = '';
	lives = 2;
}