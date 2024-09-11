
//Validar Repetir Clave
$(document).ready(function () {
    $(".passtextbox, .repasstextbox").keyup(ValidarClave);
});

function ValidarClave(){
    var password = $(".passtextbox").val();
    var confirmPassword = $(".repasstextbox").val();

    if (password != confirmPassword) {
        $(".mensajepass").html("Las Contraseñas no coinciden");
        $('#RegistrarButton').prop('disabled', true);
    }else {
        $(".mensajepass").empty();
        $('#RegistrarButton').prop('disabled', false);
    }
}

// Permite ingresar exclusivamente numeros
function SoloNumeros(e) {
    tecla = document.all ? e.keyCode : e.which;
    //Tecla de retroceso para borrar, siempre la permite
    if (tecla === 8) {
        return true;
    }
    // Patron de entrada, en este caso solo acepta numeros
    patron = /[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}


//Validar 3
function validar3(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }
    // Patron de entrada, en este caso solo acepta numeros y el caracter :

    patron = /[0-9kK]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);

}


//Expresion para input solo letras
 function soloLetras(e) {
        key = e.keyCode || e.which;
        tecla = String.fromCharCode(key).toLowerCase();
        letras = " áéíóúabcdefghijklmnñopqrstuvwxyz-";
        especiales = "8-37-39-46";

        tecla_especial = false
        for (var i in especiales) {
            if (key == especiales[i]) {
                tecla_especial = true;
                break;
            }
        }

        if (letras.indexOf(tecla) == -1 && !tecla_especial) {
            return false;
      }
 }

