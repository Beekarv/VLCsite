$(function() {
    $("#selTrigger").click(function(){
		$('.options').toggle();
	});

    $(".selOption").click(function(){
		$('.options').hide();
	});

    $(".op1").click(function(){
		$('#selTrigger').text('Madureira');
	});

	$(".op2").click(function(){
		$('#selTrigger').text('Nova Iguaçu');
	});
});