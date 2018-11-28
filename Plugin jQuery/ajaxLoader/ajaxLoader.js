// on déclare notre code dans une fonction anonyme
// que l'on appelle aussitôt avec le paramètre jQuery
// alors récupéré dans la variable $ permettant ainsi
// d'utiliser $() plutôt que jQuery() (plus pratique...)
(function($) {

	// Déclaration du plugin
	$.fn.ajaxLoader = function() {

		// Déclaration des paramètres par défaut
		// puis fusion de ces dernier aves les
		// paramètres passés par l'utilisateur

		function loader(){
			$(".ctn-receiver > *").remove();
			$('.ctn-receiver').append("<div class='loaderWait'></div>");
			$('.loaderWait').css({
				"background-image":"url(ajaxLoader/loading.gif)",
				"background-repeat":"no-repeat",
				"background-position":"center",
				"height":"100px",
				"width":"100px",
			});
		}
		$(".ajaxLoader").click(function(e){
			const aHref = $(this).attr('href');
			const pageTitle = $(this).attr("data-title");
			e.preventDefault();
			loader();
				$(".ctn-receiver").load(aHref + ' .ctn-giver > *	 ', function( response, status, xhr ) {
					if ( status == "error" ) {
						alert('Lien inactif')
					}else{
						window.history.pushState({"main_content":$('.ctn-receiver').html()}, null , aHref);
						document.title = pageTitle;
					}
				});
		})
		window.onpopstate = function(e){
			$(".ctn-receiver").html(e.state.main_content);
		}

		// on renvoie la cible pour permettre le chainage de
		// notre plugin avec d'autres fonctions ou plugins jQuery
		return this;

	};

})(jQuery);
