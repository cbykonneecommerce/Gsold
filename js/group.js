$("fieldset").css({"margin-bottom": "1.5em", "margin-top": "1.5em"})
let selectorNameBrand = $("fieldset.refino-marca h5").text();
$(`<a  data-toggle="collapse" href="#${selectorNameBrand}" role="button" aria-expanded="false" aria-controls="collapseExample">${selectorNameBrand}<img src="/arquivos/arrowdown.png"/ style="float:right;margin-top: 6px;"></a>`).insertAfter("fieldset.refino-marca h5");
$("fieldset.refino-marca h5").remove();

$("fieldset.refino-marca div").addClass( "collapse" ).attr('id', `${selectorNameBrand}`);



let selectorNameCategory = $("fieldset.Estado h5").text();
$(`<a  data-toggle="collapse" href="#${selectorNameCategory}" role="button" aria-expanded="false" aria-controls="collapseExample">${selectorNameCategory}<img src="/arquivos/arrowdown.png"/ style="float:right;margin-top: 6px;"></a>`).insertAfter("fieldset.Estado h5");
$("fieldset.Estado h5").remove();

$("fieldset.Estado div").addClass( "collapse" ).attr('id', `${selectorNameCategory}`);


