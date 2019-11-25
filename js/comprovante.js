function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};
$.ajax({
	url: '/api/checkout/pub/orders/order-group/'+getParameterByName("og"),
	success: function (data) {
		var items = data[0].items;
		var arredondarProducts = items.filter(function(p){
			var arredondarCategory = p.productCategoryIds.split("/")[1];
			return p.productCategories[arredondarCategory] === "Arredondar"
		});
      	if (arredondarProducts.length) {
          var entity = "AE";
var fields = JSON.stringify({
            Email: data[0].clientProfileData.email,
            valor: parseFloat(arredondarProducts[0].price / 100).toFixed(2)
          });
          $.ajax({
            url: '/api/dataentities/'+entity+'/documents',
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            type: 'POST',
            data: fields,
            success: function(response) {
            	console.log(response);
            }
          })
        }
	}
});
