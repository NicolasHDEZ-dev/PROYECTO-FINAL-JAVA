const ingreso = prompt("Hola, por favor ingresa tu nombre")

const bienvenida = alert("Bienvenido " + ingreso)

const juego = alert("A continuacion voy a mostrarte los hobbies de los miembros de una familia, quiero que selecciones al miembro con el cual te sientas mas identificado")

const miembros = [
    {nombre: "Nicolas",
    hobby: " le gusta jugar al futbol y escuchar musica",
    edad: 19,
    profesion: "Programador",
    sexo: "Hombre"
    },
    {nombre: "Sebastian",
    hobby: " le gusta andar en moto y arreglar artefactos",
    edad: 45,
    profesion: "Empresario",
    sexo:"Hombre"  
    },
    {nombre: "Valeria",
    hobby: " le gusta mirar series y peliculas, cocinar y estar con sus mascotas",
    edad: 43,
    profesion: "Medica",
    sexo:"Mujer"  
    },
    {nombre: "Micaela",
    hobby: " le gusta bailar,ver programas de moda y salir de fiesta",
    edad: 24,
    profesion: "Recepcionista",
    sexo:"Mujer"   
    },
]

const todoslosmiembros = miembros.map((miembro) => " a " + miembro.nombre +  miembro.hobby)

const eleccion = prompt(todoslosmiembros);

switch(eleccion){
    case ("Nicolas" && "nicolas"):
            alert("Se ve que te gustan los deportes y la musica!");
            break;
        case ("Micaela" && "micaela"):
            alert("Se ve que te gusta la moda y bailar!");
            break;
        case ("Sebastian" && "sebastian"):
            alert("Se te dan bien las manos y te gustan las motos!");
            break;
        case ("Valeria" && "valeria"):
            alert("Te gusta la comida y estar tranquilo/a!");
            break;
        default:
            alert("No contamos con ese miembro");
            break;
}

const años = parseInt(prompt(ingreso + " ahora "+  "quiero que ingreses tu edad para poder decirte con quien podrias llevarte bien!"))

if (años >= 19 && años <= 24){
    alert("Creo que te llevarias bien con Nicolas y Micaela!")
}else if(años > 15 && años < 19){
alert("Creo que te llevarias bien con Nicolas!")
}
else if (años >= 25 && años <= 45) {
    alert ("Creo que te llevarias bien con Sebastian y Valeria!")
} else if (años >= 46){
    alert("Creo que tu relacion con alguno seria un poco inmadura de su parte, eres muy mayor!")
} else if (años <= 14){
    alert("Creo que todos podrian enseñarte algo, son mucho mas mayores que tu!")
} else {
    alert("No ingresaste tu edad, ahora no vas a saber con quien te llevarias.")
}

const discusion = alert("A continuacion se dio una discusion de quienes ganarian en un partido de volley, los equipos se divieron entre hombres y mujeres")

const hombres =miembros.filter(miembro => miembro.sexo.includes("Hombre"))

const mujeres =miembros.filter(miembro => miembro.sexo.includes("Mujer"))

const equipodehombres = hombres.map((hombre) => hombre.nombre)

const equipodemujeres = mujeres.map((mujer) => mujer.nombre)

const decision = prompt("Que equipo crees que ganaria? El equipo de hombres o de mujeres?")

if(decision.includes("Hombres" && "hombres"))
    alert("El equipo que seleccionaste es el equipo de " + equipodehombres)(
 alert ("Este equipo perdio, debido a que Micaela es muy buena jugando Volley"))

if(decision.includes("Mujeres" && "mujeres"))
    alert("El equipo que seleccionaste es el equipo de " + equipodemujeres)(
 alert ("Este equipo gano, debido a que Micaela es muy buena jugando Volley"))

const despedida = alert("¡Muchas gracias por interactuar con esta familia!")