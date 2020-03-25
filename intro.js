//console.log(aqui va algo q se pone en la pantalla, una variable);
{
//tipos de datos
//numerico
var edad =19.0;
//string - cadena d texto
var nombre= "jose \"el papu\"";
// para poner en pantalla: document.write(edad+" "+nombre);
//array - arreglo
//object- objeto
//boolean- boleano
true
false
//undefined esto es una variable indefinida
//null
var numero= null; //pa debolver a nulo
//NaN indica un error
 }
 { 
 //arreglos
 var clientes = ["jorge","luis","susan"];
 document.write("tienes"+clientes.length+"clientes");//para contar los elementos
 clientes.push("este va a ir al final del arreglo");//agregar al final
 clientes.pop();//este elimina el ultimo elemento del arreglo
 var clientes2=["sesar","julia"];
 var clientes3=clientes.concat(clientes2);//esto une el cliente con cliente2
 document.write(clientes.join("-"));//esto se mete entre elementos
 var orden= clientes.sort();//esto ordena los elementos alfabeticamente
 }
 //if(clientes=== valor)tres espacion es mismo tipo d valor int, float etc