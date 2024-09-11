$(document).ready(function () {

    $(document).on('focus', ':input', function () {
        $(this).attr('autocomplete', 'off');
    });

    if ($("#mensaje").html() !== "") {
        $(".contenedorError").css("display", "block");
    }
    else {
        $(".contenedorError").css("display", "none");
    }

});


function formatoRUT(valor) {
    tecla = (document.all) ? valor.keyCode : valor.which;
    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }
    // Patron de entrada, en este caso solo acepta numeros y el caracter :

    patron = /[0-9kK]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

