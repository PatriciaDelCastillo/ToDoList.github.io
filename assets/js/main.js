 //Agregar la clase al "li" de completado al hacer click en la lista
 /* $("li").click(function () {
   $(this).toggleClass("completado")
 }) */
 
 
 $("span").click(function (event) {
   $(this).parent().fadeOut(500, function () {
     $(this).remove();
   });
   event.stopPropagation();
 })

 // Añadir el efecto de tachado a los items completados
 $('ul').on("click","li",function () {
   $(this).toggleClass('completado')
 });
 // Borrar los items completados
 
 // Agregar el contenido del input a la lista
 $("input[type=text]").keypress(function (event) {
   //filtrar para que sólo se active cuando aprietan Enter
   if (event.key === "Enter") {
     $("ul").append("<li><span><i class='fas fa-trash' aria-hidden='true '></i></span>" + $(this).val() + "</li>");
     //se borra el contenido del input
     $(this).val("");
     event.stopPropagation();
   }
 }); 
 // Borrar los items completados
 $('ul').on("click","span",function (event) {
   $(this).parent().fadeOut(500, function () {
     $(this).remove();
   });
   event.stopPropagation();
 });

 $("*.fas fa-trash").click(function () {
   $("input").slideToggle();
   });
