/*En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene
un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere
que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan
de la clase Cl_profesor.
Haga un programa que lea los datos de un profesor fijo y reporte su ingreso total. */
import Cl_pContratado from "./Cl_pContratado.js";
import Cl_Fijo from "./Cl_pFijo.js";
import Cl_Uni from "./Cl_Uni.js";


let fijo1 = new Cl_Fijo("Carlos", 25, 100);
let fijo2 = new Cl_Fijo("Carolina", 40, 90);
let Universidad = new Cl_Uni();
Universidad.procesar(fijo1);
Universidad.procesar(fijo2);

let salida = document.getElementById("Salida");
salida.innerHTML = `
<br> Nombre del profesor: ${fijo1.nombre} 
<br> Monto del bono: $${fijo1.bono}
<br> Monto del sueldo: $${fijo1.sueldoBase}
<br> Ingreso Total del profesor Carlos: $${fijo1.sueldo()}
<br> `

salida.innerHTML += `
<br> Nombre del profesor: ${fijo2.nombre} 
<br> Monto del bono: $${fijo2.bono}
<br> Monto del sueldo: $${fijo2.sueldoBase}
<br> Ingreso Total del profesor Carolina: $${fijo2.sueldo()}`
