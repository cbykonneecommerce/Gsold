
$(document).ready(function() {
    const mq = window.matchMedia("(max-width: 1600px)");
    if (mq.matches) {
        console.log("entrei")
        $(".deptonav#novos").css("margin-left", "65%");
        //$(".deptonav#marcas").css("margin-left", "72%");
       // $(".deptonav#marcas .menu-triangle").css("margin-left", "16em");
        $(".deptonav#telefonia").css("margin-left", "61%");
        $(".deptonav#telefonia .menu-triangle").css("margin-left", "16em")
    } else {
        $(".deptonav#telefonia").css("margin-left", "67%");
        $(".deptonav#telefonia .menu-triangle").css("margin-left", "16em")
        $(".deptonav#marcas").css("margin-left", "78%");
        $(".deptonav#marcas .menu-triangle").css("margin-left", "16em")
    }
    
    
    const deptonav = (deptoname) => {
    
    
        var ul = $(`${deptoname} .row .main ul`); // cache query
        ul.on("mouseover", "li", function (event) { //delegate events to li child
            var myindex = $(this).index();
            console.log(myindex);
    
    
            var submenu = $(`${deptoname} .row .submenu`);
            $(`${deptoname} .row .submenu`).each(function (index) {
                $(submenu[index]).hide();
            });
            $(submenu[myindex]).show();

            if (deptoname === ".depto-marcas" || deptoname == ".depto-telefonia" || deptoname == ".depto-novos") {
    
                if (mq.matches) {
                    $(".deptonav#marcas").css("margin-left", "56%");
                    $(".deptonav#marcas .menu-triangle").css("margin-left", "31em")
                    $(".deptonav#telefonia").css("margin-left", "46%");
                    $(".deptonav#telefonia .menu-triangle").css("margin-left", "30em")
                  //  $(".deptonav#novos").css("margin-left", "53%");
                   
                } else {
                    $(".deptonav#telefonia").css("margin-left", "57%");
                    $(".deptonav#marcas").css("margin-left", "67%");
                }
        
        
        
            }
        })
    
        
    }
    
    
    
    
    
    
    
    
    
    
    $(".depto-computadores").hover(() => {
    
        $(".depto-computadores#computadores").show();
        deptonav(".depto-computadores");
    },
        () => {
            $(".depto-computadores#computadores").hide()
            $(".depto-monitores#computadores .row .submenu").hide();
        })
    
    $(".depto-personalizados").hover(() => {
    
        $(".depto-personalizados#personalizados").show();
        deptonav(".depto-personalizados");
    },
        () => {
            $(".depto-personalizados#personalizados").hide()
            $(".depto-monitores#personalizados .row .submenu").hide();
        })
    
    $(".depto-notebooks").hover(() => {
    
        $(".depto-notebooks#notebooks").show();
        deptonav(".depto-notebooks");
    },
        () => {
            $(".depto-notebooks#notebooks").hide()
            $(".depto-monitores#notebooks .row .submenu").hide();
        })
    
    $(".depto-monitores").hover(() => {
    
        $(".depto-monitores#monitores").show();
        deptonav(".depto-monitores");
    },
        () => {
            $(".depto-monitores#monitores").hide()
            $(".depto-monitores#monitores .row .submenu").hide();
        })
    $(".depto-acessorios").hover(() => {
    
        $(".depto-acessorios#acessorios").show();
        deptonav(".depto-acessorios");
    },
        () => {
            $(".depto-acessorios#acessorios").hide();
            $(".depto-monitores#acessorios .row .submenu").hide();
        })
    $(".depto-games").hover(() => {
    
        $(".depto-games#games").show();
        deptonav(".depto-games");
    },
        () => {
            $(".depto-games#games").hide()
            $(".depto-monitores#games .row .submenu").hide();
        })
    $(".depto-novos").hover(() => {
    
        if (mq.matches) {
            console.log("entrei")
            $(".deptonav#novos").css("margin-left", "65%");
          
        }
        $(".depto-novos#novos").show();
        deptonav(".depto-novos");
    },
        () => {
            $(".depto-novos#novos").hide()
            $(".depto-monitores#novos .row .submenu").hide();
        })
    
    $(".depto-telefonia").hover(() => {
    
        if (mq.matches) {
            console.log("entrei")
            $(".deptonav#telefonia").css("margin-left", "61%");
            $(".deptonav#telefonia .menu-triangle").css("margin-left", "16em")
        } else {
            $(".deptonav#telefonia").css("margin-left", "67%");
            $(".deptonav#telefonia .menu-triangle").css("margin-left", "16em")
        }
        $(".depto-telefonia#telefonia").show();
        deptonav(".depto-telefonia");
    },
        () => {
            $(".depto-telefonia#telefonia").hide()
        })
    
    $(".depto-marcas").hover(() => {
    
    
        if (mq.matches) {
            console.log("entrei")
           // $(".deptonav#marcas").css("margin-left", "72%");
           // $(".deptonav#marcas .menu-triangle").css("margin-left", "16em");
        } else {
            $(".deptonav#marcas").css("margin-left", "78%");
            $(".deptonav#marcas .menu-triangle").css("margin-left", "16em")
        }
        $(".depto-marcas#marcas").show();
        deptonav(".depto-marcas");
    
    },
        () => {
            $(".depto-marcas#marcas").hide()
        })
    
    
    
    
    
    
    
    
    
    
    //  Controle para menu mobile 
    
    
    $(".dropdown-btn#computadores").toggle(() => {
        $(".dropdown-container").hide();
        $(".dropdown-btn#computadores i").attr('class', 'fa fa-angle-up');
        $(".dropdown-container#computadores").slideDown()
    }, () => {
        $(".dropdown-container#computadores").hide()
        $(".dropdown-btn#computadores i").attr('class', 'fa fa-angle-down');
    })
    
    
    $(".dropdown-btn#personalizados").toggle(() => {
        $(".dropdown-container").hide();
        $(".dropdown-btn#personalizados i").attr('class', 'fa fa-angle-up');
        $(".dropdown-container#personalizados").slideDown()
    }, () => {
        $(".dropdown-container#personalizados").hide()
        $(".dropdown-btn#personalizados i").attr('class', 'fa fa-angle-down');
    })
    
    
    $(".dropdown-btn#notebooks").toggle(() => {
        $(".dropdown-container").hide();
        $(".dropdown-btn#notebooks i").attr('class', 'fa fa-angle-up');
        $(".dropdown-container#notebooks").slideDown()
    }, () => {
        $(".dropdown-container#notebooks").hide()
        $(".dropdown-btn#notebooks i").attr('class', 'fa fa-angle-down');
    })
    
    
    $(".dropdown-btn#monitores").toggle(() => {
        $(".dropdown-container").hide();
        $(".dropdown-btn#monitores i").attr('class', 'fa fa-angle-up');
        $(".dropdown-container#monitores").slideDown()
    }, () => {
        $(".dropdown-container#monitores").hide()
        $(".dropdown-btn#monitores i").attr('class', 'fa fa-angle-down');
    })
    
    
    $(".dropdown-btn#acessorios").toggle(() => {
        $(".dropdown-container").hide();
        $(".dropdown-btn#acessorios i").attr('class', 'fa fa-angle-up');
        $(".dropdown-container#acessorios").slideDown()
    }, () => {
        $(".dropdown-container#acessorios").hide()
        $(".dropdown-btn#acessorios i").attr('class', 'fa fa-angle-down');
    })
    
    
    $(".dropdown-btn#games").toggle(() => {
        $(".dropdown-container").hide();
        $(".dropdown-btn#games i").attr('class', 'fa fa-angle-up');
        $(".dropdown-container#games").slideDown()
    }, () => {
        $(".dropdown-container#games").hide()
        $(".dropdown-btn#games i").attr('class', 'fa fa-angle-down');
    })
    
    
    $(".dropdown-btn#novos").toggle(() => {
        $(".dropdown-container").hide();
        $(".dropdown-btn#novos i").attr('class', 'fa fa-angle-up');
        $(".dropdown-container#novos").slideDown()
    }, () => {
        $(".dropdown-container#novos").hide()
        $(".dropdown-btn#novos i").attr('class', 'fa fa-angle-down');
    })
    
    
    $(".dropdown-btn#telefonia").toggle(() => {
        $(".dropdown-container").hide();
        $(".dropdown-btn#telefonia i").attr('class', 'fa fa-angle-up');
        $(".dropdown-container#telefonia").slideDown()
    }, () => {
        $(".dropdown-container#telefonia").hide()
        $(".dropdown-btn#telefonia i").attr('class', 'fa fa-angle-down');
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
    
    
    
    
    /*var ul = $('.depto-computadores .row .main ul'); // cache query
    ul.on("mouseover","li", function(event){ //delegate events to li child
       var myindex = $(this).index();
       console.log(myindex);
    
       var submenu = $('.depto-computadores .row .submenu');
       $('.depto-computadores .row .submenu').each(function( index ) {
        $(submenu[index]).hide();
      });
       $(submenu[myindex]).show();
    })*/
    
    
    
    
    
    
    
    
    
    
})










