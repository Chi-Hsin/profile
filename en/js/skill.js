$(function(){
	$("a.skill_name").each(function(){
		var text= $(this).text();
		$(this).css("display","inline-block").css("color","blue")
		.attr("href","#"+text);
	})
	$("h1:not(h1:first)").hover(function(){ //排除第一個標題的情況
		var skill_name = $(this).text();
		function note_word() //提醒文字
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
		$(this).append(note_word());
		},function(){$(this).find("span").remove()} //滑鼠移開後移除
	)
})