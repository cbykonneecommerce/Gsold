$(document).ready(function() {
    $(".pages li.previous", "body").html("<img src='/arquivos/seta-esquerda.png'/>")
    $(".pages li.next", "body").html("<img src='/arquivos/seta-direita.png'/>")


    //FILTRO MOBILE


    const mq = window.matchMedia("(max-width: 900px)");
    if (mq.matches) {
        $(".navigation-tabs").hide();
        $( "<div class='visible-xs filtro-btn-mobile'><h4>FILTROS</h4></div>" ).insertBefore( ".navigation-tabs" );
        $(".filtro-btn-mobile").click(()=>{
            $( ".navigation-tabs" ).toggle( "slow" )
        })
    } 
    
});

$(window).on('hashchange', function(e){
    $(".pages li.previous", "body").html("<img src='/arquivos/seta-esquerda.png'/>")
    $(".pages li.next", "body").html("<img src='/arquivos/seta-direita.png'/>")
   });
   $(".pages li.previous", "body").html("<img src='/arquivos/seta-esquerda.png'/>")
   $(".pages li.next", "body").html("<img src='/arquivos/seta-direita.png'/>")
//codigo de manipulação de filtros
if ( ! $( ".ribbon-side" ).length ) {
    $( ".navigation-tabs" ).prepend("<div class='ribbon-side'></div><div id='filter-bar'></div");
}

