/*recorrer la data*/
$(document).ready(function() {
	var dibujarGifs = function(data){
		//var gif = "";
		//var url = "";
		data.forEach(function(element){
			gif = element.images.downsized_large.url;
			url = element.bitly_gif_url;
			$("#pokemon").append(armarTemplate(gif, url));
		})
	}	

/* estructura que muestra en el html los datos solicitados */
var armarTemplate = function(gif,url){
		var t= "<div class='pokemon'><img src'" + gif + "'/><a href='" + url + "'>Ver más</a></div>"
		return t;
	}
/* ajax que pide data de pokemones */
$.ajax({
	url: 'http://pokeapi.co/media/img/',
	type: 'GET',
	dataType: 'json',
	data: {"limit": '811'},
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