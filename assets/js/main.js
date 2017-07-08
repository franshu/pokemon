/*recorrer la data*/
$(document).ready(function() {
	/* ajax que pide data de pokemones */
	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon/',
		type: 'GET',
		dataType: 'json',
		data: {"limit":'811'},
	})

/*hace la funcion para imprimir name and img*/
.done(function(p) {
	console.log("p");
	p.results.forEach(function(elemento,imagen){
	var pik = imagen+1;
	$(".poke").append("<div class='col-md-3 pokemon'><img src='http://pokeapi.co/media/img/" + pik +".png'>" + elemento.name + "</div>");
	})
})	
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
})

/*	primera idea
var dibujarGifs = function(data){
		//var gif = "";
		//var url = "";
		data.forEach(function(element){
			var pokename = element.name;
			$("#pokemon").append("<div class='cajapoke'><span class='pokename'>"+ pokename + "</span></div>");
		})
	}	

/* estructura que muestra en el html los datos solicitados 
var armarTemplate = function(gif,url){
		var t= "<div class='pokemon'><img src'" + gif + "'/><a href='" + url + "'>Ver más</a></div>"
		return t;
	}
*/

/* ajax que pide img de pokemones 
$.ajax({
	url: 'https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon',
	type: 'GET',
	dataType: 'json',
	data: {"0": '811'},
})
.done(function() {
	console.log("success");
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});



/* ajax que da especies de pokemones 
$.ajax({
	url: 'http://pokeapi.co/api/v2/pokemon-species/1/',
	type: 'GET',
	dataType: 'json',
	data: {"0": '811'},
})
.done(function() {
	console.log("success");
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});


/* limpia el contenedor 
$("#buscar-gif").click(function(event){
		console.log("Entro");
		$("#elementos").empty();
		var gif = $("#gif-text").val();
		ajaxGif(gif);
	})
});
*/











