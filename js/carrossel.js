

$(document).ready(function() {
 
    
$("#carouselmarcas").owlCarousel({
 
    autoPlay: 3000, //Set AutoPlay to 3 seconds

    items : 6,
    itemsDesktop : [1199,6],
    itemsDesktopSmall : [979,1],
    navigation: true,
    stopOnHover: true

});

    
$("#carouselpropostas").owlCarousel({
 
    autoPlay: 2000, //Set AutoPlay to 3 seconds

    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],
    navigation: true,
    stopOnHover: true

});

$("#carouselvitrines").owlCarousel({
 
    autoPlay: 2000, //Set AutoPlay to 3 seconds

    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],
    navigation: true,
    stopOnHover: true

});





$(".owl-prev").html("<img src='/arquivos/seta-esquerda.png' />");
$(".owl-next").html("<img src='/arquivos/seta-direita.png' />");
   
  });

  