function eliminarEstudiante(codigoEstudiante){
  localStorage.removeItem(codigoEstudiante)
  listarEstudiante()
}
function editarEstudiante(codigoEstudiante){
  for (var i = 0; i < localStorage.length; i++) {
   clave = localStorage.key(i)
   if (clave==codigoEstudiante) {
     estudiante = $.parseJSON(localStorage.getItem(clave))
     $("#codigoEstudiante").val(estudiante.codigo)
     $("#nombresEstudiante").val(estudiante.nombres)
     $("#apesEstudiante").val(estudiante.apellidos)
     $("#notaEstudiante").val(estudiante.nota)
     $("#obsEstudiante").val(estudiante.observaciones)

   }
  }
}
function listarEstudiante(){
  var tabla = ""
  tabla += '<table border=1px>'
  tabla += '<tr>'
  tabla += '<th>CODIGO</td>'
  tabla += '<th>APELLIDOS</td>'
  tabla += '<th>NOMBRES</td>'
  tabla += '<th>NOTA</td>'
  tabla += '<th>OBSERVACIONES</td>'
  tabla += '<th>EDITAR</td>'
  tabla += '<th>ELIMINAR</td>'
  tabla += '</tr>'

  for (var i = 0; i < localStorage.length; i++) {
    clave = localStorage.key(i)
    estudiante = $.parseJSON(localStorage.getItem(clave))
    tabla += '<tr>'
    tabla += '<td>'+estudiante.codigo+'</td>'
    tabla += '<td>'+estudiante.apellidos+'</td>'
    tabla += '<td>'+estudiante.nombres+'</td>'
    tabla += '<td>'+estudiante.nota+'</td>'
    tabla += '<td>'+estudiante.observaciones+'</td>'
    tabla += '<td><button onclick="editarEstudiante(\''+estudiante.codigo+'\');">EDITAR</button></td>'
    tabla += '<td><button onclick="eliminarEstudiante(\''+estudiante.codigo+'\');">ELIMINAR</button></td>'

    tabla += '</tr>'
  }
  tabla += '</table>'

  $("#p1").html(tabla)
}

$(document).ready(function(){

  $("#guardar").on("click",function(){
    var codigo = $("#codigoEstudiante").val()
    var nombres = $("#nombresEstudiante").val()
    var apellidos = $("#apesEstudiante").val()
    var nota = $("#notaEstudiante").val()
    var observaciones = $("#obsEstudiante").val()

    var estudiante = {
      codigo : codigo,
      nombres :nombres,
      apellidos : apellidos,
      nota : nota,
      observaciones : observaciones
    }
    localStorage.setItem(codigo,JSON.stringify(estudiante))
    limpiarCampos()
    listarEstudiante();
  })
  function limpiarCampos(){
    $("#codigoEstudiante").val("")
    $("#nombresEstudiante").val("")
    $("#apesEstudiante").val("")
    $("#notaEstudiante").val("")
    $("#obsEstudiante").val("")

  }

})
