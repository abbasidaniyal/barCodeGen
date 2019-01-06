
let save = function(id){
    var svg = document.querySelector( "svg" );
    var svgData = new XMLSerializer().serializeToString( svg );

    var canvas = document.createElement( "canvas" );
    var ctx = canvas.getContext( "2d" );

    var img = document.createElement( "img" );
    img.setAttribute( "src", "data:image/svg+xml;base64," + btoa( svgData ) );

    img.onload = function() {
        ctx.drawImage( img, 0, 0 );
        var data= canvas.toDataURL( "image/png" )
        console.log( data );
       
        path = "/";

        //save data as png 

};
}

let barCodeGen = function(id, type) {
    
    JsBarcode("#barcode", id, {
        format: type,
        lineColor: "#000000",
        width: 2,
        height: 80,
        displayValue: false
    });
}

let go = function(){

    let referenceId= document.getElementById("code").value;

    let format = "CODE128"

    barCodeGen(referenceId, format);
    save(referenceId);
}

