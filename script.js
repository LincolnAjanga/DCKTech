//Change header color
$(document).ready(function(){
	$("button#fa").click(function(){
		$(".header").css("color", "blue");

	});
	$("button#fe").click(function(){
		$(".header").css("color", "red");
	});
	$("button#fi").click(function(){
		$(".header").css("color", "yellow");
	});
	$("button#fo").click(function(){
		$(".header").css("color", "green");
	});
});

//change jumbotron color

$(document).ready(function(){
	$("button#fa").click(function(){
		$(".jumbotron").css("background-color","blue");
	});
	$("button#fe").click(function(){
		$(".jumbotron").css("background-color","red");
	});
	$("button#fi").click(function(){
		$(".jumbotron").css("background-color","yellow");
	});
	$("button#fo").click(function(){
		$(".jumbotron").css("background-color","green");
	});
});