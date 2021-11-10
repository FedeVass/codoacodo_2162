let comprar = document.getElementById("comprar");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");
let btnBorrar =document.getElementById("borrar");
let btnResumen= document.getElementById("resumen");
let respuesta = document.getElementById("respuesta");


//evento:
borrar.addEventListener("click",()=>respuesta.innerText="Total a pagar: $");
resumen.addEventListener("click",mostrar);

console.log(cantidad.value);

//funciones:
function mostrar(){
   respuesta.innerText = `Total a pagar: ${calcular()} $` ;
}



function calcular(){
    let cant= cantidad.value;
    let cat= categoria.value;
    let precio= 200;
    let descuento=0;

    switch(cat){
    case "Estudiante": 
    descuento=0.8;
    break;
    case "Trainee": 
    descuento=0.5;
    break;
    case "Junior": 
    descuento=0.15;
    break;
    default:
        descuento=0;
        break;
}
let preciofinal= (cant * precio*(1-descuento)).toFixed(2);
return preciofinal;

}

