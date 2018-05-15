$(function(){
	$("a.skill_name").each(function(){
		var text= $(this).text();
		$(this).css("display","inline-block").css("color","blue")
		.attr("href","#"+text);
	})
})