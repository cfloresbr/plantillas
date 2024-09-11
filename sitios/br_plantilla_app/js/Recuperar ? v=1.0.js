$('.rut').Rut({
    format_on: 'keyup',
    on_success: function () {
        $("#myModalPost").modal({ backdrop: 'static', keyboard: false });
        //var url = '/Ajax/ObtenerCodigoxRUT';
        var url = '/Ajax/ObtenePreguntaxRUT';
        $.get(url,
            {
                'rut': $("#rut").val(),
            },
            function (res) {
                //if (res.responseText == "NOK") {
                //    $("#mensaje").html('RUT ingresado no se encuentra registrado.');
                //}
                //else {
                //    $("#mensaje").html('Se ha enviado un correo con un código de validación, favor ingresarlo.');
                //    $(".contenedorCodigo").removeClass("hidden").addClass("show");
                //}

                if (res.respuesta == "NOK") {
                    $("#mensaje").html('RUT ingresado no tiene preguntas de recuperación ingresadas, favor contáctese con la persona administradora.');
                    $(".contenedorError").css("display", "block");
                }
                else if (res.respuesta == "NOK2") {
                    $("#mensaje").html('RUT ingresado no se encuentra registrado.');
                    $(".contenedorError").css("display", "block");
                }
                else {
                    $("#mensaje").html('');
                    $("#txtPregunta").html(res.pregunta);
                    $("#codigoPregunta").val(res.codigoPregunta);
                    $(".contenedorPregunta").removeClass("hidden").addClass("show");
                    $(".contenedorError").css("display", "none");
                }

                $("#myModalPost").modal("toggle");

            }).fail(function () {
                $("#mensaje").html("Ha ocurrido un error, por favor intente nuevamente.");
                $(".contenedorError").css("display", "block");
                //$(".contenedorCodigo").removeClass("show").addClass("hidden");
                $(".contenedorPregunta").removeClass("show").addClass("hidden");
                $("#myModalPost").modal("toggle");
                $("#txtPregunta").html('');
                $("#codigoPregunta").val('');
            });
    },
    on_error: function () {
        $("#mensaje").html('El RUT ingresado no es correcto');
        $(".contenedorError").css("display", "block");
        //$(".contenedorCodigo").removeClass("show").addClass("hidden");
        $(".contenedorPregunta").removeClass("show").addClass("hidden");
        $('#rut').val("");
        $("#txtPregunta").html('');
        $("#codigoPregunta").val('');
    }
});


$("#formLogin").submit(function () {

    var validar = true;

    if ($("#rut").val().trim() === '') {
        validar = false;
    }

    //if ($("#codigoValidacion").val().trim() === '') {
    //    validar = false;
    //}

    if ($("#respuesta").val().trim() === '') {
        validar = false;
    }

    if (validar) {
        $("#formcrear").removeAttr("novalidate");
        $("#myModalPost").modal({ backdrop: 'static', keyboard: false, show: true });
        return true;
    } else {
        window.scrollTo(0, 0);
        $("#myModalCamposRequeridos").modal();
        return false;
    }



});