//////////////////////////
// DEFINA VARIAVEIS ABAIXO
//////////////////////////

var allData = ".inicial, .financeiro, .contratacao, .conexao, .outras";

//////////////////////////
// SCRIPTS
//////////////////////////
$(document).ready(function(){
	// INITIAL STATES
	$(allData).hide();
	$(".inicial").show();

	//DOCUMENT INTERACTION
	$(document).ready(function(){
	    $(".tab1").click(function(){
	        $(allData).hide();
					$(".contratacao").show();
	    });
		
			$(".tab2").click(function(){
	        $(allData).hide();
					$(".financeiro").show();
	    });
		
			$(".tab3").click(function(){
	        $(allData).hide();
					$(".conexao").show();
	    });
		
			$(".tab4").click(function(){
	        $(allData).hide();
					$(".outras").show();
	    });
	});
});