const inputNombre = document.getElementById("nombre")
const inputEmail = document.getElementById("email")
const inputTel = document.getElementById("telefono")
const inputMensaje = document.getElementById("mensaje")
const pattern =/[a-z0-9._%\-]+@[a-z]+\.[a-z]{3}$/
const patternNum = /^\d+$/

const btnDark = document.getElementById("claro-oscuro")


function validarEntrada() {
    let nombre = inputNombre.value
    if(nombre.length < 3) {
        inputNombre.classList.add("inputNoValido")
    } else {
        inputNombre.classList.remove("inputNoValido")
    }
}

function validarEmail() {
    let email = inputEmail.value
    if(!pattern.test(email)) {
        inputEmail.classList.add("inputNoValido")
    } else {
        inputEmail.classList.remove("inputNoValido")
    }
}

function validarTel() {
    let tel = inputTel.value
    if( patternNum.test(tel) && tel.length <= 12 && tel.length >= 6){
        inputTel.classList.remove("inputNoValido")
    } else {
        inputTel.classList.add("inputNoValido")
    }

}

btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    const links = document.getElementsByTagName("a")    
    for( let link of links) {
        link.classList.toggle("dark")
        link.style.backgroundColor = "transparent"
    }
})

