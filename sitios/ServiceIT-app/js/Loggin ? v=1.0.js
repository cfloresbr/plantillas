


$("#formLogin").submit(function () {
    var rut = $("#rut").val();
    var pass = $('#password').val();
    if (rut === "" || pass === "") {
        $("#myModalCamposRequeridos").modal({ show: true });
        return false;
    } else {
        $("#myModalPost").modal({ backdrop: 'static', keyboard: false, show: true });
        return true;
    }
});

$('.rut').Rut({
    format_on: 'keyup',
    on_success: function () {
        $("#mensaje").html('');
        $(".contenedorError").css("display", "none");
    },
    on_error: function () {
        $("#mensaje").html('El RUT ingresado no es correcto');
        $(".contenedorError").css("display", "block");
        $('#rut').val("");
    }
});