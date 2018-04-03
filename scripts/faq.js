function querySearch() {
	var input, filter, ul, li, a, i;
	input = document.getElementById('searchBox');
	filter = input.value.toUpperCase();
	ul = document.getElementById('myUL');
	li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}

$(function() {
    var categories = ".con, .fin, .out";
	var sections = ".startText, .network, .finance, .other";
	
	//INITIAL BEHAVIOR
	$(sections).hide();
	$(".startText").show();

	//CHANGERS
	$(".fin").click(function(){
		$(sections).hide();
		$(".finance").show();
		$(categories).removeClass("active");
		$(this).addClass("active");
	});

	$(".con").click(function(){
		$(sections).hide();
		$(".network").show();
		$(categories).removeClass("active");
		$(this).addClass("active");
	});

	$(".out").click(function(){
		$(sections).hide();
		$(".other").show();
		$(categories).removeClass("active");
		$(this).addClass("active");
	});
});