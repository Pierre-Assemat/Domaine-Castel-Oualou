function changeClass(str1,str2,str3) // Pour les boutons du text : 1_pres, 1_prod...
{
	$("#"+str1+"_button").click(function(){
        $("#"+str3+"_text").hide();
        $("#"+str2+"_text").hide();
        $("#"+str1+"_text").fadeIn(400);
        if($("#"+str1+"_button").attr("class")==="button")
        	$("#"+str1+"_button").toggleClass("select_button button");
        if($("#"+str2+"_button").attr("class")==="select_button")
        	$("#"+str2+"_button").toggleClass("select_button button");
        if($("#"+str3+"_button").attr("class")==="select_button")
        	$("#"+str3+"_button").toggleClass("select_button button");
    });
}
