let sku = 0;
let explainme = "";
function BatchBuy_OnSkuDataReceived(e) {
    var id = e.skuData.id;
    selectedToBuy = [];
    if (id > 0) {
        console.log(e.skuData);
        sku = e.skuData.id;
        explainme = e.skuData.name.split(' - ').pop();
    }
    console.log(e.skuData);
}


$(document).ready(function () {



    //if (skuJson.skus.length == 1) {
    console.log("KAWABUNGA")
    sku = skuJson.skus[0].sku;
    explainme = skuJson.skus[0].dimensions["Categoria"];




    var batchBuyListener = new Vtex.JSEvents.Listener('batchBuyListener', BatchBuy_OnSkuDataReceived);
    skuEventDispatcher.addListener(skuDataReceivedEventName, batchBuyListener);
    console.log(sku)
    $(".product-info .shipping-box .freight-btn").val("CALCULAR");


    $(".go-to-cart-button").click(function (e) {

        if (sku == 0) {
            e.preventDefault();
            alert("Selecione um SKU");
        }
    })


    const mq = window.matchMedia("(max-width: 600px)");

    if (mq.matches) {
        $(document).scroll(function () {
            var y = $(this).scrollTop();
            if (y > 200) {
                $('#comprar-flutuante').fadeIn();
            } else {
                $('#comprar-flutuante').fadeOut();
            }
        });
    }



    let value = $(".qtd-field").val();


    let contentSKU = "";
    switch (explainme) {
        case "Novo":
            contentSKU = "<b>Novos:</b> São produtos que estão na caixa original e que nunca foram usados.<br>";
            break;
        case "Ouro":
            contentSKU = `<img class="medalhas" src="/arquivos/medalha-ouro.png" style="width:2em"><b>Ouro:</b>São produtos que estão em excelente estado, porém não acompanha caixa original.<br>
            `;
            break;
        case "Prata":
            contentSKU = `<img class="medalhas" src="/arquivos/medalha-prata.png" style="width:2em"><b>Prata:</b> São produtos que podem conter mínimos riscos e também não acompanha a caixa original. <br>
            `;
            break;
        case "Bronze":
            contentSKU = `<img class="medalhas" src="/arquivos/medalha-bronze.png" style="width:2em"><b>Bronze:</b> São produtos que podem contar alguns riscos, porém que a estética não afeta o funcionamento do equipamento.`;
            break;

    }

    $(".infos p").html(contentSKU);
    $(".go-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=1&seller=1&redirect=true&sc=1`);
    $(".add-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=1&seller=1&redirect=false&sc=1`);


    setInterval(() => {
        $(".go-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=1&seller=1&redirect=true&sc=1`);
        $(".add-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=1&seller=1&redirect=false&sc=1`);
        switch (explainme) {
            case "Novo":
                contentSKU = "<b>Novos:</b> São produtos que estão na caixa original e que nunca foram usados.<br>";
                break;
            case "Ouro":
                contentSKU = `<img class="medalhas" src="/arquivos/medalha-ouro.png" style="width:2em"><b>Ouro:</b>Produtos que estão em excelente estado, que podem conter riscos imperceptíveis.<br>
            `;
                break;
            case "Prata":
                contentSKU = `<img class="medalhas" src="/arquivos/medalha-prata.png" style="width:2em"><b>Prata:</b> Produtos com riscos e/ou pequenas marcas de uso. <br>
            `;
                break;
            case "Bronze":
                contentSKU = `<img class="medalhas" src="/arquivos/medalha-bronze.png" style="width:2em"><b>Bronze:</b> Produtos com riscos e avarias (amassados/manchas/trincados) <br>`;
                break;

        }
    }, 1000)

    /* $(".sku-selector-container .topic .skuList span input").on("input propertychange", () => {
         $(".go-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=1&seller=1&redirect=true&sc=1`);
      $(".add-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=1&seller=1&redirect=false&sc=1`);
 
  })
 
  $(".sku-selector-container .topic .skuList select").on("input propertychange", () => {
     $(".go-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=1&seller=1&redirect=true&sc=1`);
  $(".add-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=1&seller=1&redirect=false&sc=1`);
 
 
 
 })*/

    $(".btn-mais").click(() => {

        $(".qtd-field").val(value++)
    })
    $(".btn-menos").click(() => {
        if ($(".qtd-field").val() > 1) {
            $(".qtd-field").val(value--)
        }

    })


    $(".qtd-field").on("input propertychange", () => {
        let qty = $(".qtd-field").val();
        $(".go-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=${qty}&seller=1&redirect=true&sc=1`);
        $(".add-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=${qty}&seller=1&redirect=false&sc=1`);


    })

    $(".btn-menos").click(() => {
        let qty = $(".qtd-field").val();
        $(".go-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=${qty}&seller=1&redirect=true&sc=1`);
        $(".add-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=${qty}&seller=1&redirect=false&sc=1`);
    })
    $(".btn-mais").click(() => {
        let qty = $(".qtd-field").val();
        $(".go-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=${qty}&seller=1&redirect=true&sc=1`);
        $(".add-to-cart-button").attr("href", `/checkout/cart/add?sku=${sku}&qty=${qty}&seller=1&redirect=false&sc=1`);

    })

    $("#description").show();
    $("#btn-description").click(() => {
        $("#description").show();
        $("#specification").hide();
        $("#reviews").hide();
    })
    $("#btn-specification").click(() => {
        $("#specification").show();
        $("#description").hide();
        $("#reviews").hide();
    })
    $("#btn-reviews").click(() => {
        $("#reviews").show();
        $("#description").hide();
        $("#specification").hide();
    })




    $(".add-to-cart-button").click((e) => {
        e.preventDefault();
        var url = $(".add-to-cart-button").attr('href');

        $.ajax({
            url: url,
            type: "GET",
            crossDomain: !0,
            dataType: "html",
            success: function () {
                alert("Produto adicionado ao carrinho!");

                vtexjs.checkout.getOrderForm()
                    .done(function (orderForm) {
                        console.log(orderForm);
                        $(".mini-cart-qty-admake").text(orderForm.items.length)
                    });
            }
        })
    })




});




/*function BatchBuy_OnSkuDataReceived(e) {
    var id = e.skuData.id;
    selectedToBuy = [];
    if (id > 0) {
        console.log(e.skuData);
    }
}

$(document).ready(function () {
    var batchBuyListener = new Vtex.JSEvents.Listener('batchBuyListener', BatchBuy_OnSkuDataReceived);
    skuEventDispatcher.addListener(skuDataReceivedEventName, batchBuyListener);
});*/




