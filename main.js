const comprar = document.querySelectorAll(".agregaralcarrito")

comprar.forEach((botones)=> botones.addEventListener('click', ()=>{
    botones.innerText= "EN EL CARRITO"
}))



const titulo = document.getElementById("titulo")

titulo.addEventListener("mouseenter", ()=>{
    titulo.innerText="Los numero 1 en sneakers"
})

titulo.addEventListener("mouseleave", ()=>{
    titulo.innerText="Tu distribuidor de zapatillas!"
})

const mail = document.getElementById("mail")
const clave = document.getElementById("clave")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const btnSubmit = document.getElementById("btnSubmit")

form.addEventListener('submit', e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML=""
    if(!regexemail.test(mail.value)){
        warnings += `El email no es valido <br>`
        entrar =  true
    }
    if(clave.value.length<5 ){
        warnings += `La clave no es valida <br>`
        entrar = true
    }
    entrar ? parrafo.innerHTML = warnings : parrafo.innerHTML = "Enviado";
})

function guardar(valor){
    let user = {email: mail.value, clave: clave.value};
    valor === "localStorage" && localStorage.setItem("item", JSON.stringify(user));
    {return user}
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    guardar("localStorage")
})

const stockNike = ["Nike Uptempo", "Nike Airmax 1"]
const stockJordan = ["Jordan 1 Fragment", "Jordan 1 Black Toe", "Jordan 11 Concord", "Jordan 4 Bred"]
const stockTotal = [...stockNike, ...stockJordan]
