


function Print1(){

      window.addEventListener("click", function(event){
            event.preventDefault();
                  var texto1 = document.getElementById("records");
                  var quiz1  = document.getElementById("recordsq");
                  var lista1 = "<ol>"+"<li>Funcdamentos de la programación</li>"+
                                      "<li>Funciones</li>"+
                                      "<li>Arreglos</li>"+
                                      "<li>Objetos</li>"+ "</ol>";

                  texto1.innerHTML="<br><b>Sprint 01: Introducción a Javascript</b> <br>" + lista1;
      })
}

function Print2(){

      window.addEventListener("click", function(event){
            event.preventDefault();
                  var texto2 = document.getElementById("records");
                  var quiz2  = document.getElementById("recordsq");
                  var lista2 = "<ol>"+"<li>Ciclo de vida del desarrollo web y arquitectura básica Ciente/Servidor / Confiiguración del abiente de trabajo e introdución al Git</li>"+
                                      "<li>HTML y Javascript en el nvegador</li>"+
                                      "<li>Manejo de comandos básicos de git en l terminal</li>"+
                                      "<li>Pruebas Unitarias</li>"+
                                      "<li>Git/ Resolución de conflictos/ Branching Model</li>"+
                                      "<li>DOM"+"</ol>";

                  texto2.innerHTML="<br><b>Sprint 02: Introducción al desarrollo web y construcción de páginas</b> <br>" + lista2;
      })
}

function Print3(){

      window.addEventListener("click", function(event){
            event.preventDefault();
                  var texto3 = document.getElementById("records");
                  texto3.innerHTML="<br>No hay lecciones todavía." ;

      })
}
