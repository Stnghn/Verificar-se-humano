 //Math.floor retorna somente o menor numero inteiro entre os outros quebrados.
//O math.random é multiplicado por 3, ou seja, feito 3 vezes e somado 1 unidade
var n1 = Math.floor(Math.random() * 3 + 1)
var n2 = Math.floor(Math.random() * 3 + 1)

var input1 = document.getElementById('n1')
var input2 = document.getElementById('n2')

input1.innerHTML = `${n1}`
input2.innerHTML = `${n2}`

var result = document.getElementById('result')

var respfinal = document.getElementById('certoerrado')

//document.getElementById('mostrarimg').style.visibility = "hidden"

document.getElementById('icon-aviso').style.visibility = "hidden"
document.getElementById('icon-clap').style.visibility = "hidden"

document.getElementById('btcadastro').disabled = true

function clicou(){  

    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var data = document.getElementById('nascimento').value
    var cpf= document.getElementById('cpf').value
    var senha = document.getElementById('senha').value

    //document.getElementById('mostrarimg').style.visibility = "visible"
    
    var resposta = Number(document.getElementById('resposta').value)

    if (resposta == "" || nome == "" || email == "" || data == "" || cpf == "" || senha == "") {
        respfinal.innerHTML = `Há um ou mais campos vazios.`
        document.getElementById('icon-aviso').style.visibility = "visible"
    } else if (resposta === 2) {
        if (n1 == 1 && n2 == 1) {
            var acenderbt = true
            respfinal.innerHTML = `Resposta correta!`
            respfinal.style.color = "#79fcbffa" 
            document.getElementById('icon-clap').style.visibility = "visible"
            document.getElementById('icon-aviso').style.visibility = "hidden"
        } else {
            respfinal.innerHTML = `Resposta errada. Tente novamente`
            respfinal.style.color = "#ffc400"
            document.getElementById('icon-aviso').style.visibility = "visible"
            document.getElementById('icon-clap').style.visibility = "hidden" 
        }
    } else if (resposta === 3) {
        if (n1 == 1 && n2 == 2 || n1 == 2 && n2 == 1) {
            var acenderbt = true
            respfinal.innerHTML = `Resposta correta!`
            respfinal.style.color = "#79fcbffa"
            document.getElementById('icon-clap').style.visibility = "visible"
            document.getElementById('icon-aviso').style.visibility = "hidden"
        } else {
            respfinal.innerHTML = `Resposta errada. Tente novamente`
            respfinal.style.color = "#ffc400"
            document.getElementById('icon-aviso').style.visibility = "visible"
            document.getElementById('icon-clap').style.visibility = "hidden"
        }
    } else if (resposta === 4) {
        if (n1 == 1 && n2 == 3 || n1 == 2 && n2 == 2 || n1 == 3 && n2 == 1) {
            var acenderbt = true
            respfinal.innerHTML = `Resposta correta!`
            respfinal.style.color = "#79fcbffa"
            document.getElementById('icon-clap').style.visibility = "visible"
            document.getElementById('icon-aviso').style.visibility = "hidden"
        } else {
            respfinal.innerHTML = `Resposta errada. Tente novamente`
            respfinal.style.color = "#ffc400"
            document.getElementById('icon-aviso').style.visibility = "visible"
            document.getElementById('icon-clap').style.visibility = "hidden"
        }
    } else if (resposta === 5) {
        if (n1 == 2 && n2 == 3 || n1 == 3 && n2 == 2) {
            var acenderbt = true
            respfinal.innerHTML = `Resposta correta!`
            respfinal.style.color = "#79fcbffa"
            document.getElementById('icon-clap').style.visibility = "visible"
            document.getElementById('icon-aviso').style.visibility = "hidden"
        } else {
            respfinal.innerHTML = `Resposta errada. Tente novamente`
            respfinal.style.color = "#ffc400"
            document.getElementById('icon-aviso').style.visibility = "visible"
            document.getElementById('icon-clap').style.visibility = "hidden"
        }
    } else if (resposta === 6) {
        if (n1 == 3 && n2 == 3) {
            var acenderbt = true
            respfinal.innerHTML = `Resposta correta!`
            respfinal.style.color = "#79fcbffa"
            document.getElementById('icon-clap').style.visibility = "visible"
            document.getElementById('icon-aviso').style.visibility = "hidden"
        } else {
            respfinal.innerHTML = `Resposta errada. Tente novamente`
            respfinal.style.color = "#ffc400"
            document.getElementById('icon-aviso').style.visibility = "visible"
            document.getElementById('icon-clap').style.visibility = "hidden"
        }
    } else {
        respfinal.innerHTML = `Resposta errada. Tente novamente`
        respfinal.style.color = "#ffc400"
        document.getElementById('icon-aviso').style.visibility = "visible"
        document.getElementById('icon-clap').style.visibility = "hidden"
    }
    
   if (acenderbt == true) {
    document.getElementById('btcadastro').disabled = false
   } else {
    document.getElementById('btcadastro').disabled = true
   }
}




   



