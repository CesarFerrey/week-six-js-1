//variawbles de tipo String
var nombre= "Cesar";
var apellido= "Ferreyra";

console.log("Mi nombre es "+nombre+" y mi apellido es "+apellido );
//variable de tipo number
var edad=27;
console.log("tengo "+edad+" años");
//variable de tipo bollean
var tienepareja=false;
console.log(tienepareja);
//array de numbers
var numeros=[1,2,3,4,5,6,7,8,9,10];
//array de Strings
var colegas=["Esteban","Ivan","Dai","Jose","Isa"];
console.log(colegas);
//no es conveniente pero se puede realizar array de numbers y string
var num_string=[1,"hola",2,"chau"]
console.log(num_string);
//objetos
var usuario={
    nombre:"Cesar",
    apelldio:"Ferreyra",
    edad:27,
    pareja:false,
    numero:[1,2,3,4,5,6,7,8,9,10],
    colegas:["Esteban","Ivan","Dai","Jose","Isa"],
}
console.log(usuario);
//Array de objetos
Mascotas=[
    {
        nombre:"minina",
        dueño:"Jose",
        tipo:"gato",
    },
    {
        nombre:"charly",
        dueño:"Cesar",
        tipo:"perro",
    },
    {
        nombre:"Lolita",
        dueño:"Diana",
        tipo:"Perro",
    }
]
console.log(Mascotas);
//objetos con array de objetos
var usuario_mascotas={
    usuario:"Cesar",
    num_favorito:[1,5],
    mascotas:[{
        name: "Charly",
        type: "Dog",
        años: 4,
    },
    {
        name: "Loli",
        type: "Dog",
        años: 10,  
    }


]
}
console.log(usuario_mascotas);
