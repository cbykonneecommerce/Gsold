
$(document).ready(function() {
    const mq = window.matchMedia("(max-width: 1600px)");
    if (mq.matches) {
        console.log("entrei")
        $(".deptonav#novos").css("margin-left", "65%");
        $(".deptonav#marcas").css("margin-left", "72%");
        $(".deptonav#marcas .menu-triangle").css("margin-left", "16em");
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
                    $(".deptonav#novos").css("margin-left", "53%");
                    $(".deptonav#novos .menu-triangle").css("margin-left", "14em")
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
            $(".deptonav#marcas").css("margin-left", "72%");
            $(".deptonav#marcas .menu-triangle").css("margin-left", "16em");
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










