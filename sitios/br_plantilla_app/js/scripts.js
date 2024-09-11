//NavBar
window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        //MB: Descomenta el if si se requiere que el estado del navbar se mantenga entre cargas        
        if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
             document.body.classList.toggle('sb-sidenav-toggled');
        }

        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
            //Revisar submenus desplegados
            revisarMenusDesplegados();
        });
    }

});

//Revisamos si estan desplegados los submenus y si es así los cerramos.
function revisarMenusDesplegados()
{
    // ✅ Get only elements where data-id = box1
    const elements3 = document.querySelectorAll(`[data-bs-toggle="collapse"]`);
    for(var i=0;i<elements3.length;i++)
    {
        if(elements3[i]["ariaExpanded"]=="true")
        {
            triggerEvent( elements3[i], 'click' );
        }
    }
}
function triggerEvent( elem, event ) {
  var clickEvent = new Event( event ); // Create the event.
  elem.dispatchEvent( clickEvent );    // Dispatch the event.
}

$(document).ready(function () {
    // Mostrar el spinner al cargar la página
    $('#spinner').addClass('show');
});

    // Ocultar el spinner cuando la página haya terminado de cargar
$(window).on('load', function () {
    setTimeout(function () {
        $('#spinner').removeClass('show');
    }, 500); // Ajusta el tiempo según tus necesidades*/
});