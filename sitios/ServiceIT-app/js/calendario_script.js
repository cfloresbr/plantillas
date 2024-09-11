  
  var calendar = null;
  var myModal = null;

  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'es',
        //Click en un evento del calendario
        eventClick: function(event) 
        {
            myModal = new bootstrap.Modal(document.getElementById('modalClickEvento'), {})       
            myModal.toggle();             
        },

        //Click en una fecha del calendario
        dateClick: function(date, jsEvent, view) 
        {
            //Le asignamos la fecha seleccionada a los input
            document.getElementById("fi_evento_simple_modal").value = date.dateStr;
            document.getElementById("ft_evento_simple_modal").value = date.dateStr;
            //mostramos el modal
            myModal = new bootstrap.Modal(document.getElementById('modalClickagregarEvento'), {})       
            myModal.toggle();  
        }      
        
    });
    calendar.render();
  });



//EVENTOS DEMO

//Agregar evento desde un modal
function action_agregar_evento_simple_modal()
{
    var id=document.getElementById("id_evento_simple_modal").value;
    var nombre=document.getElementById("nom_evento_simple_modal").value;
    var fi=document.getElementById("fi_evento_simple_modal").value;
    var ft=document.getElementById("ft_evento_simple_modal").value;
    var color=document.getElementById("color_evento_simple_modal").value;
    
    //agregamos el evento al calendario
    agregar_evento_simple_calendario(id,nombre,fi,ft,color);  

    //Cierra el modal    
    myModal.hide(); 
}

//agregar evento desde menu principal
function action_agregar_evento_simple()
{
    var id=document.getElementById("id_evento_simple").value;
    var nombre=document.getElementById("nom_evento_simple").value;
    var fi=document.getElementById("fi_evento_simple").value;
    var ft=document.getElementById("ft_evento_simple").value;
    var color=document.getElementById("color_evento_simple").value;
    //agregamos el evento al calendario
    agregar_evento_simple_calendario(id,nombre,fi,ft,color);
}

//agregar evento desde menu principal con hora
function action_agregar_evento_horario()
{
    var nombre=document.getElementById("nom_evento_hora").value;
    var fi=document.getElementById("fi_evento_hora").value;
    agregar_evento_horario(nombre,fi);
}


//FUNCIONES EJEMPLO
function agregar_evento_simple_calendario(id,titulo,fi,ft,colorEvento)
{
    var eventoSimple = {
                        events:[{id:id,title:titulo,start:fi,end:ft}], //evento
                        color:colorEvento, //color fondo
                        textColor: '#ffffff' //color texto
                        };

    //Agrega el evento al calendario
    calendar.addEventSource(eventoSimple);
}

function agregar_evento_horario(titulo,fecha_time)
{
    var dataEvento = [{title:titulo,start:fecha_time,allDay:false}];
    
    //Agrega el evento al calendario
    calendar.addEventSource(dataEvento);    
}

