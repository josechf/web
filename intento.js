
              //vomentando
              alert("beta");
              var nombre;
              nombre=prompt("ingrese su nombre", "nombre");
              alert("bienvenido");
             $(document).ready(function(){
                 $(window).scroll(function(){ 
                      if( $(this).scrolltop () > 0 ){
                         $('header').addClass('header2');
                         
                      }else{
                          $('header').removeClass('header2');
                      }
                 });
              });
              var buscador= $("#publicaciones").Datapublicaciones();//falta