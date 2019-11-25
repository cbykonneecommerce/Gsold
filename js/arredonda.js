function getCookie(name) { //build the cookie1
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

function isFloat(n) {
    return n === +n && n !== (n | 0);
}

var arrApp = {
    init: function() {
        arrApp.clickButton();
        arrApp.styleProduct();
    },

    roundArredondar: function(orderForm) {

        var nomeDaLoja = window.vtexid.getAuthData().scopeName

        var value = orderForm.value;

        var str = value.toString().replace(",", "").slice(-2);

        var cemPerce = '100'

        var total = cemPerce - str;

        var itemArr = orderForm.items.find(function(item){
            return (item.name.match("DoaÃ§Ã£o Arredondar") != null)
        });

        //console.log('itemArr',itemArr);

        if(itemArr){
        
            //console.log("total", orderForm.value);

            var condArr = (orderForm.value / 100) - parseInt(orderForm.value / 100);

            if(condArr) {
                orderForm.items.map(function(item, idx) {
                    if (item.name.match("DoaÃ§Ã£o Arredondar") != null) {
                        vtexjs.checkout.removeItems([{ "index": idx, "quantity": 0 }])
                    }
                })
            }
            $('a.arredondar.arrGo, #arrPhrase, #arrPhraseShippin, .tooltip').remove();
        }else{
            //console.log('tem resto e sem arredondar');

            var nomeDoProduto = "DoaÃ§Ã£o%20Arredondar%20" + ('000' + total).slice(-3);

            //console.log('nome do produto', nomeDoProduto);

            var url = 'https://' + nomeDaLoja + '.myvtex.com/api/catalog_system/pub/products/search/' + nomeDoProduto;

            $.ajax({
                url: url,
                async:false,
                method: 'GET',
                success: function(data) {
                    if (data.length == 0) {
                        //console.log("tem resto e sem arredondar - Vazio")
                        $('a.arredondar.arrGo, #arrPhrase, #arrPhraseShippin, .tooltip').remove();  
                        return false;
                    }
                    var buttonAr = document.getElementById('cart-to-orderform');
                    var buttonShipping = document.getElementById('orderform-minicart-to-cart');
                    var totalAr = data[0].items[0].itemId;
                    //console.log('totalAr  ' + totalAr)

                    $('.arrGo, #arrPhrase, #arrPhraseShippin, .tooltip').remove();

                    if(!itemArr){
                        var phrase = "Arredonde esta compra";
                        //console.log('Arredonde esta compra');

                        buttonAr.insertAdjacentHTML('beforebegin', '<p id="arrPhrase" style="display:inline-block; margin-right: 10px; margin-left: 20px; margin-bottom: 25px;">' + phrase + '</p><a data-ar="' + totalAr + '"data-toggle="tooltip" data-placement="top" title="Doe seus centavos para o Movimento Arredondar, e ajude projetos voltados para a causa da mulher pelo Brasil!" class="arredondar arrGo" style="padding: 11px;background-color: #9f00ae;border: none;color: white;border-radius: 5px;box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);margin-right: 10px;" href="#">Arredondar</a>');
                        buttonShipping.insertAdjacentHTML('beforebegin', '<p id="arrPhraseShippin" style="display:inline-block; margin-right: 10px;">' + phrase + '</p><a data-ar="' + totalAr + '"data-toggle="tooltip" data-placement="top" title="Doe seus centavos para o Movimento Arredondar, e ajude projetos voltados para a causa da mulher pelo Brasil!" class="arredondar arrGo" style="padding: 11px;background-color: #9f00ae;border: none;color: white;border-radius: 5px;box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);margin-right: 10px;" href="#">Arredondar</a>');
                        $('.arredondar').tooltip({ boundary: 'window' });
                    }
                        
                }
            });
        }
    },

    clickButton: function() {
      	console.log('clickButton');
        $("body").on("click", ".arrGo", function(e) {
            e.preventDefault();

            //console.log('clickButton');

            if (typeof(getCookie('VTEXSC')) == "undefined") {
                var salesChannel = 1
            } else {
                var salesChannel = getCookie('VTEXSC').split("=")[1];
            }
            var totalAr = $(this).data('ar');
            vtexjs.checkout.getOrderForm()
                .then(function(orderForm) {
                    orderForm.items.map(function(item, idx) {
                            if (item.name.match("arredondar") != null) {
                                //vtexjs.checkout.removeItems([{ "index": idx, "quantity": 0 }])
                            } else {
                                var item = {
                                    id: totalAr,
                                    quantity: 1,
                                    seller: "arredondar"
                                };
                                return vtexjs.checkout.addToCart([item], null, orderForm.salesChannel)
                            }
                        })
                        //console.log('go arredondar');
                }).done(function(orderForm) {
                    $('a.arredondar.arrGo, #arrPhrase, #arrPhraseShippin, .tooltip').remove();
                });
        })

        $('.arredondar').tooltip('hide');
    },

    styleProduct: function() {
      	console.log('styleProduct');
        $('body').append('<style>.cart-items tbody td.product-image img {background-color: white;}</style>');
    }
}

$(document).ready(function() {
    if(window.location.pathname === "/checkout/orderPlaced/"){
        
    }else{
        arrApp.init();
    }
});

$(window).on('orderFormUpdated.vtex', function(evt, orderForm) {
    $('.postal-code-for-sla span.postal-code-value').each(function(){
        var cep = $(this).text() || '';
        if(!cep){
            return
        }
        var url  = 'https://viacep.com.br/ws/' + cep + '/json';
    
        //console.log(url);	
    
        $.getJSON(url, function(data){
            if("error" in data){
                return
            }
    
            var arrBlock = ['AC','AL','AP','BA','CE','DF','MA','PA','PB','PR','RN','RS'];
    
            if(arrBlock.indexOf(data.uf) !== -1){
                //console.log('regiao NAO valida para Arredondar');
                $('a.arredondar.arrGo, #arrPhrase, #arrPhraseShippin, .tooltip').remove();

                orderForm.items.map(function(item, idx) {
                    if (item.name.match("DoaÃ§Ã£o Arredondar") != null) {
                        vtexjs.checkout.removeItems([{ "index": idx, "quantity": 0 }])
                    }
                })
            }else{
                //console.log('regiao valida para Arredondar');
                arrApp.roundArredondar(orderForm);
            }
        });
    });  
})

