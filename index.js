import "JsBarcode.all.min.js
"


let barCodeGen = function(id, type) {
    
    JsBarcode("#barcode", id, {
        format: type,
        lineColor: "#000000",
        width: 1,
        height: 40,
        displayValue: false
    });
}

let go = function(){

    let referenceId= document.getElementById("code").value;

    let format = "CODE128"

    barCodeGen(referenceId, format);

    saveSvgAsPng(document.getElementById("barcode"), `${referenceId}.png`);

}
