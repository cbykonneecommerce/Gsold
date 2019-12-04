$(".depto-computadores").hover(()=>{
    
    $(".depto-computadores#computadores").show()
}, 
()=>{
    $(".depto-computadores#computadores").hide()
})

$(".depto-personalizados").hover(()=>{
    
    $(".depto-personalizados#personalizados").show()
}, 
()=>{
    $(".depto-personalizados#personalizados").hide()
})

$(".depto-notebooks").hover(()=>{
    
    $(".depto-notebooks#notebooks").show()
}, 
()=>{
    $(".depto-notebooks#notebooks").hide()
})

$(".depto-monitores").hover(()=>{
    
    $(".depto-monitores#monitores").show()
}, 
()=>{
    $(".depto-monitores#monitores").hide()
})
$(".depto-acessorios").hover(()=>{
    
    $(".depto-acessorios#acessorios").show()
}, 
()=>{
    $(".depto-acessorios#acessorios").hide()
})
$(".depto-games").hover(()=>{
    
    $(".depto-games#games").show()
}, 
()=>{
    $(".depto-games#games").hide()
})
$(".depto-novos").hover(()=>{
    
    $(".depto-novos#novos").show()
}, 
()=>{
    $(".depto-novos#novos").hide()
})

$(".depto-telefonia").hover(()=>{
    
    $(".depto-telefonia#telefonia").show()
}, 
()=>{
    $(".depto-telefonia#telefonia").hide()
})

$(".depto-marcas").hover(()=>{
    
    $(".depto-marcas#marcas").show()
}, 
()=>{
    $(".depto-marcas#marcas").hide()
})










//  Controle para menu mobile 


$(".dropdown-btn#rouparia").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#rouparia i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#rouparia").slideDown()
}, () => {
    $(".dropdown-container#rouparia").hide()
    $(".dropdown-btn#rouparia i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#tableware").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#tableware i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#tableware").slideDown()
}, () => {
    $(".dropdown-container#tableware").hide()
    $(".dropdown-btn#tableware i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#decor").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#decor i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#decor").slideDown()
}, () => {
    $(".dropdown-container#decor").hide()
    $(".dropdown-btn#decor i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#moveis").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#moveis i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#moveis").slideDown()
}, () => {
    $(".dropdown-container#moveis").hide()
    $(".dropdown-btn#moveis i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#presentes").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#presentes i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#presentes").slideDown()
}, () => {
    $(".dropdown-container#presentes").hide()
    $(".dropdown-btn#presentes i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#aromas").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#aromas i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#aromas").slideDown()
}, () => {
    $(".dropdown-container#aromas").hide()
    $(".dropdown-btn#aromas i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#baby").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#baby i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#baby").slideDown()
}, () => {
    $(".dropdown-container#baby").hide()
    $(".dropdown-btn#baby i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#custom").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#moveis i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#custom").slideDown()
}, () => {
    $(".dropdown-container#custom").hide()
    $(".dropdown-btn#custom i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#marcas").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#marcas i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#marcas").slideDown()
}, () => {
    $(".dropdown-container#marcas").hide()
    $(".dropdown-btn#marcas i").attr('class', 'fa fa-angle-down');
})













//dropdowns do menu



$(".deptonav#computadores .row .main ul li").hover(()=>{

    let index = $( "deptonav#computadores .row .main ul li" ).index( this );

    $(".deptonav#computadores .row submenu")[index].show()
}, 
()=>{
    //$(".depto-computadores#computadores").hide()
})

$(".depto-computadores .row .main ul li").hover(()=>{

    let index = $( ".depto-computadores .row .main ul li" ).index( this );
console.log(index)
    
}, 
()=>{
    //$(".depto-computadores#computadores").hide()
})


var ul = $('.depto-computadores .row .main ul'); // cache query
ul.on("mouseover","li", function(event){ //delegate events to li child
   var myindex = $(this).index();
   console.log(myindex);

   var submenu = $('.depto-computadores .row .submenu');
   $('.depto-computadores .row .submenu').each(function( index ) {
    $(submenu[index]).hide();
  });
   $(submenu[myindex]).show();
})