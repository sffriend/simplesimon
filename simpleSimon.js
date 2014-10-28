// Simple Simon
	//Global Variables
	var colors = ["red", "blue", "green", "yellow"],
		colorSeq = [],
		level = 0,
		topLevel = 0,
		clickCount = 0,
		black = document.getElementById("black"),
		levelElem = document.getElementById("level"),
		topLevelElem = document.getElementById("topLevel");
	
	//Starts Game & Resets All Stats But Top Level
	function start() {
		colorSeq.length = 0;
		level = 0;
		levelElem.innerHTML = level;
		levelUp();
	}
	
	//Moves Player to Next Level and Shows Newest Sequence
	function levelUp() {
		colorSeq.push(randomColor());
		level++;
		levelElem.innerHTML = level;
		showSequence();
	}

	//Generates Random Color
	function randomColor() {
		return colors[Math.floor((Math.random()*3))];
	}
	
	//Shows Newest Color Sequence
	function showSequence() {
		var i = 0;
		var timer = setInterval(function () {
		if (i < colorSeq.length){
				x = document.getElementById(colorSeq[i]);
				y = x.style.backgroundColor;
				x.style.backgroundColor="#000";
				setTimeout(function(){x.style.backgroundColor=y;},500);
		} else {
			clearInterval(timer);
		}
		i++;
		},1000)
	};
 	
 	//Checks the User's Input
	function checkInput(color) {
		clickCount++;
		if (color === colorSeq[clickCount-1]){
			if (clickCount === (colorSeq.length)){
			console.log("reached end")
				clickCount = 0;					
				levelUp();
				changeTopLevel();
			}				
		}
		else {
			clickCount = 0;
			alert("You have lost..Please Click Start to Try again");
		}
	}
	
	//Resets ALL game stats
	function reset() {
		colorSeq.length = 0;
		level = 0;
		topLevel = 0;
		levelElem.innerHTML = level;
		topLevelElem.innerHTML = topLevel;
		alert("Push Start to Begin.");
	}
	
	//Checks to see if player has reached a new top level
	function changeTopLevel() {
		if (level > topLevel) { 	//update top level if necessary
			topLevel = level;
		}
		topLevelElem.innerHTML = topLevel;
	}