//Change header color
$(document).ready(function(){
	$("button#fa").click(function(){
		$(".header").css("color", "royalblue");

	});
	$("button#fe").click(function(){
		$(".header").css("color", "maroon");
	});
	$("button#fi").click(function(){
		$(".header").css("color", "indigo");
	});
	$("button#fo").click(function(){
		$(".header").css("color", "green");
	});
});

//change jumbotron color

$(document).ready(function(){
	$("button#fa").click(function(){
		$(".jumbotron").css("background-color","royalblue");
	});
	$("button#fe").click(function(){
		$(".jumbotron").css("background-color","maroon");
	});
	$("button#fi").click(function(){
		$(".jumbotron").css("background-color","indigo");
	});
	$("button#fo").click(function(){
		$(".jumbotron").css("background-color","green");
	});
});