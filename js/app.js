var lastDifference;
var selection;

$(document).ready(function(){
	selection = numberSelector();
	console.log("number selected: " + selection)
	
	$("#guessButton").click(function(){
		var guess = $("#userGuess").val();
		if (parseInt(guess) % 1 != 0) {
			$("#userGuess").val('');
			alert("enter an integer")
		} else {
			console.log("guess: " + guess)
			$("#userGuess").val('');
			compare(selection, guess);
		}
	});

	$(".new").click(function() {
		newGame();
	})

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});
  	
  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
});

function numberSelector() {
	var options = new Array();
	for (var i = 1; i< 101; i++) {
		options.push(i);
	}
	var selection = options[Math.floor(Math.random() * options.length)];
	return selection;
}

function compare(s, g) {
	var currentDiff = Math.abs(s - g);
	var result;
	console.log("currentDiff: " + currentDiff)

	if (typeof lastDifference === "undefined") {
		console.log(true);
		lastDifference = currentDiff;
		console.log("updated lastDifference: " + lastDifference)
	}
	if (currentDiff > 50) {
		if (lastDifference < currentDiff) {
			result = "icecold and getting colder!"
		} else if (lastDifference > currentDiff) {
			result = "icecold but getting warmer!"
		} else {
			result = "ice cold!";
		}
	} else if (currentDiff > 30) {
		if (lastDifference < currentDiff) {
			result = "cold and getting colder!"
		} else if (lastDifference > currentDiff) {
			result = "cold but getting warmer!"
		} else {
			result = "you are cold!";
		}
	} else if (currentDiff > 20) {
		if (lastDifference < currentDiff) {
			result = "warm but getting colder!"
		} else if (lastDifference > currentDiff) {
			result = "warm and getting warmer!"
		} else {
			result = "warm";
		}
	} else if (currentDiff > 10) {
		if (lastDifference < currentDiff) {
			result = "hot but getting colder!"
		} else if (lastDifference > currentDiff) {
			result = "hot and getting hotter!"
		} else {
			result = "hot";
		}
	} else if (currentDiff > 0) {
		if (lastDifference < currentDiff) {
			result = "very hot but getting colder!"
		} else if (lastDifference > currentDiff) {
			result = "verrrry hot and getting warmer!"
		} else {
			result = "very hot!";
		}
	} else {
		result = "DING DING DING, you gussed it :)"
	}
	$("#guessList").append($("<li/>").text(g + ': ' + result));
	$("#count").text((parseInt($("#count").text()) + 1));
}

function newGame() {
	$("#guessList li").remove();
	$("#count").text(0);
	selection = numberSelector();
}

//for the first diff, set the last diff to the currentDiff
//if currentDiff is > 50 iceCold
//if currentDiff