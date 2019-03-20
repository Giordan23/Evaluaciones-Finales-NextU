$(document).ready(function(){
  $("#guardar").on("click",function(){
    var id = $("#idEstudiante").val()
    var nombre = $("#nombreEstudiante").val()
    var apellido = $("#apeEstudiante").val()

    var estudiante = {
      id:id,
      nombre :nombre,
      apellido : apellido
    }
    localStorage.setItem(id,JSON.stringify(estudiante))
    limpiarCampos()
    var texto = ""
    for (var i = 0; i < localStorage.length; i++) {
      clave = localStorage.key(i)
      estudiante = $.parseJSON(localStorage.getItem(clave))
      texto += estudiante.id + " - " + estudiante.nombre +" - "+ estudiante.apellido + "<br>"
    }
    $("#p1").html(texto)

  })
  function limpiarCampos(){
    $("#idEstudiante").val("")
    $("#nombreEstudiante").val("")
    $("#apeEstudiante").val("")
  }

})
