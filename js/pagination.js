$(document).ready(function() {
    $(".pages li.previous", "body").html("<img src='/arquivos/seta-esquerda.png'/>")
    $(".pages li.next", "body").html("<img src='/arquivos/seta-direita.png'/>")
    
});

//codigo de manipulação de filtros
if ( ! $( ".ribbon-side" ).length ) {
    $( ".navigation-tabs" ).prepend("<div class='ribbon-side'></div><div id='filter-bar'></div");
}

