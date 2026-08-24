function abrirPagina(id){


let paginas = document.querySelectorAll("main section");


paginas.forEach(function(pagina){

pagina.classList.add("escondido");

});


document.getElementById(id)
.classList.remove("escondido");


}



function aumentarFonte(){

document.body.classList.toggle("textoGrande");

}



function contraste(){

document.body.classList.toggle("altoContraste");

}