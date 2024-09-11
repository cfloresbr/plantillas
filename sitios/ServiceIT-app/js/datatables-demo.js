function headerDataTable() {
    var select = $("#Tabla_length select");
    var label = $("#Tabla_length label");
    var labelText = "Mostrar";

    var newHtml = $('<div class="dataTables_length" id="Tabla_length">')
        .append(labelText)
        .append(select);

    $("#Tabla_length").replaceWith(newHtml);


    $(".dataTables_length").addClass("px-3");
    $(".dataTables_length").addClass("mb-3");
    $(".dataTables_length").addClass("mb-sm-0");


    var lengthDiv = document.getElementById('tabla-dinamica_length');
    var labelElement = lengthDiv.querySelector('label'); var selectElement = lengthDiv.querySelector('select');
    labelElement.innerHTML = 'Mostrar: ';

    labelElement.appendChild(selectElement);

    var parentContainer = $('.dataTables_wrapper');

    // Crear el nuevo contenedor div
    var newDiv = $('<div class="contenedor-btnDataTable row"></div>');

    // Agregar el nuevo contenedor div al contenedor padre
    parentContainer.prepend(newDiv);

    newDiv.prepend('<div class="col-12 col-md-12 col-lg-12 col-xl-6 filtros mb-3"></div>');
    newDiv.prepend('<div class="col-12 col-md-12 col-lg-12 col-xl-6 botones mb-3"></div>');

    // Mover el código HTML existente al nuevo contenedor div
    // Agregar el botón como el primer elemento dentro del contenedor
    var container = $('.contenedor-btnDataTable');
    $('.filter-dataTable').appendTo($('.filtros'));

    $('.dt-buttons').appendTo('.botones');
    $(".dt-buttons").addClass("d-flex  justify-content-center justify-content-md-start");
    $('.btn-group .btn').removeClass('btn-secondary');
    $(".filter-dataTable").removeClass('d-none');
    $(".filter-dataTable").addClass('my-box');
    $(".filter-dataTable").addClass('d-flex flex-column flex-sm-row justify-content-center justify-content-sm-end');

    var elemento = document.querySelector('select[name="tabla-dinamica_length"]');
    elemento.classList.add('w-70');
    elemento.classList.add('border-no-redondeado')
    var inputElement = document.querySelector("#tabla-dinamica_filter input[type='search']");
    inputElement.classList.add("border-no-redondeado");
    inputElement.classList.add("tabla-buscador")

    var selectElement = document.querySelector("select[name='tabla-dinamica_length']");
    var options = selectElement.options;



    for (var i = 0; i < options.length; i++) {
        var option = options[i];

        if (option.value !== "-1") {
            var value = parseInt(option.value);
            var text = value + " filas";

            option.text = text;
        }
    }
}