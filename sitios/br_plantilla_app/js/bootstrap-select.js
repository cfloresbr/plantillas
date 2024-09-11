function generarSelect(data, selectName, selectId, contenedorId, textLabel) {
    var label = "<label for=" + selectName +" class='form-label'>" + textLabel +"</label>";
    var lista_1 = "<select name='" + selectName + "' id='" + selectId + "' class='selectpicker' multiple data-live-search='true'>";
    var lista_3 = "</select>";
    var lista_2 = "";

    $.each(data, function (i, items) {
        lista_2 += "<option value='" + items.value + "'>" + items.text + "</option>";
    });

    var lista_final = label + lista_1 + lista_2 + lista_3;

    $('#' + contenedorId).html(lista_final);
    $('#' + selectId).selectpicker();
}