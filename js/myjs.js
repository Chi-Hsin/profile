$(function(){
	$("a.skill_name").each(function(){
		var text= $(this).text();
		$(this).css("display","inline-block").css("color","blue")
		.attr("href","#"+text);
	})
	$("h1").hover(function(){
		var skill_name = $(this).text();
		function aaa()
		{
			var obj = document.createElement("span");
			obj.style.background = "rgb(51,122,183)";
			obj.style.color = "#fff";
			obj.style.width = "300px";
			obj.style.height = "25px";
			obj.style.fontSize = "15px";
			obj.style.marginLeft = "10px";
			obj.style.textAlign = "center";
			obj.textContent = "點擊查看擁有"+skill_name+"的卡片";
			return obj;
		}
		$(this).append(aaa());
		},function(){$(this).find("span").remove()}
	)
})