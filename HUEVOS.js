const prompt = require('prompt-sync')();
// ayuda para ejecutar la compra de los huevos
var aux = 0;
var aux1 = 0;
var aux2=0;

//establacer la cantidad de huevos disponibles
var huevos = parseInt(prompt("¿Cuantos huevos tiene la caja?: "));
//establecer el precio del huevo
var precio = parseInt(prompt("Digite el precio de un huevo: "));
// acomulador para las facturas
var cadena="";
var contador=0;

//ACTIVACION DE SERVICIOS DE LA  TIENDA
console.log("\nBIENVENIDO :D");
console.log("\nVendemos huevos con un precio de: " + precio+" por unidad")
console.log("\n¿Desea comprar huevos?");
console.log("\nDigite si para comprar // Digite no si no desea comprar")

//proceso de respuesta
while (aux === 0) {
    var respuesta = prompt("RESPUESTA: ");

    switch (respuesta) {
        case "si":
            var aux4=0;
            while(aux4===0 && huevos!=0){
            var unidades = parseInt(prompt("Digite las unidades a comprar: "));
                if (unidades > huevos) {
                    aux1=0;
                    aux2=0;
                    while (aux1 === 0) {
                    console.log("lo sentimos no contamos con esa cantidad por favor compre entre las unidades disponibles:" + "\n huevos: " + huevos);
                    console.log("¿Desea comprarnos igualmente?");
                    aux1=1;
                    aux4=1;
                    //ciclo para acomodar las respuesta
                    while (aux2 === 0) {

                        var confirmacion = prompt("RESPUESTA: ");

                        switch (confirmacion) {
                            case "si":
                                aux4=0;
                                aux2=1;
                                break;

                            case "no":
                                console.log("Pase buena tarde :3 ");
                                aux = 1;
                                aux2=1;
                                aux1=1;
                                break;
                            default:
                                console.log("Dato no valido");
                        }
                    }

                }
            }
            else{
                    

                var factura = unidades * precio;
                cadena=cadena+unidades+" huevos"+" por: "+factura+" pesos"+"\n";
                
                huevos = huevos - unidades;
                contador++;
                console.log("\nSu factura es: " + factura + " pesos");
                console.log("\n¿Desea comprar mas huevos?");
                console.log("\nDigite si para comprar // Digite no para cancelar")
                var aux3=0;
                while(aux3===0){
                var continuacion= prompt("RESPUESTA: ");
                switch(continuacion){
                    case "si":
                        aux4=0;
                        aux3=1;
                        
                        
                        aux2=1;
                        break;
                        case "no":
                            aux3=1;
                            aux=1;
                            aux4=1;
                            console.log("Pase buen dia :D");
                            break;

                            default:
                                console.log("Dato no valido");
                                console.log("\nDigite si para comprar // Digite no para cancelar");
                                
                }
                
                }
                }
            }

            if (huevos <= 0) {
                console.log("Lo sentimos ya no tenemos huevos")
                aux = 1;
            }
            if(contador>=2){
                console.log("\nSus compras fueron: \n");
                console.log(cadena);
            }
            
            break;

        case "no":
            aux = 1;
            console.log("Pase buen dia :D")
            break;

        default:
            console.log("Dato no valido");
            console.log("\nDigite si para comprar // Digite no si no desea comprar")

    }
}
//por favor si ves una forma de optimizar el codigo hazme saber para mejorar como programador 
