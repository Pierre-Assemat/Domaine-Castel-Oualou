
$("#3_pres_text").hide();
$("#2_pres_text").hide();

$("#3_prod_text").hide();
$("#2_prod_text").hide();

$(".bouteille_info").hide();

$(function(){ // Permet l'attente du chargement de la page HTLM et CSS
	var id;
	var vitesse = 500;
	// PRESENTATION
	changeClass("1_pres","2_pres","3_pres");
	changeClass("2_pres","1_pres","3_pres");
	changeClass("3_pres","1_pres","2_pres");
   
    // PRODUIT
    changeClass("1_prod","2_prod","3_prod");
	changeClass("2_prod","1_prod","3_prod");
	changeClass("3_prod","1_prod","2_prod");
	
	// Gere le scrolling du MENU 
	$("#menu a").on("click", function(event){
		$("html,body").animate({
	        scrollTop: $(this.hash).offset().top},650, function(){  // .hash recupere l'id de l'encre en question
   		});
   		return false;
     });

	// Animation INFO BOUTEILLE 
	$(".bouteille").on("click", function(event){
		id = $(this).attr("id");
		$(".section_bouteille").hide(vitesse,function(){
			if($("#section_bouteille_slc").length === 0) { 
				$("#pres_bouteille").append("<div id=\"section_bouteille_slc\">"+$("#"+id).parent().html()+"</div>");
				$("#section_bouteille_slc > img").animate({height:"310px",width:"95px",padding:"1vh 1vh 2vh 2vh"});	
				$("#section_bouteille_slc > div").fadeIn(vitesse);
			}
			$("#section_bouteille_slc").fadeIn("slow");
		});
	})

	$("body").on("click",".return",function(){
		$("#section_bouteille_slc > div").fadeOut(vitesse,function(){
			$("#section_bouteille_slc").hide(vitesse);
			$(".section_bouteille").fadeIn(vitesse);
			$("#section_bouteille_slc").remove();
		});
	});
		

});

