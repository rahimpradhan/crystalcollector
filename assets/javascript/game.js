
 	var wins = 0;
 	var losses = 0;
 	var randomResult;
 	var previousResult = 0;
 	var totalScore;

		$(document).ready(function() {
	var resetGame = function() {
	$(".crystals").empty();

	var images = [
	'assets/images/crystal1.jpg',
	'assets/images/crystal2.jpg',
	'assets/images/crystal3.jpg',
	'assets/images/crystal4.jpg'
	];
	
	randomResult = Math.floor(Math.random() * 102) + 19;
	console.log(randomResult);
	$("#result").html("Random Result: " + randomResult);
 	


 	for (var i = 0; i < 4; i++) {
 		
 			var random = Math.floor(Math.random() * 12);
 			console.log(random);
 		
 		var crystal = $("<div>");
 			crystal.attr({"class": 'crystal', "data-random": random});
 		crystal.css({
 			"background-image":"url('" + images[i] + "')",
 			"background-size":"cover", 
 		});
 		$(".crystals").append(crystal);

 	}
}
 	
	resetGame();

 	$(document).on("click" , ".crystal", function (){
 		
 		
 		var num = parseInt($(this).attr('data-random'));

 		previousResult  +=num;

 		
 		console.log(previousResult);


 		if(previousResult > randomResult){
 			
 			losses++;
 			
 			previousResult = 0;

 			$("#loss").html(losses);

 			resetGame();
 		}
 		else if(previousResult === randomResult){
 			
 			 wins++;

 			 previousResult = 0;
 			
 			$("#win").html(wins);

 			resetGame();
 		}


 	});
 });