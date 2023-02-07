var textArea = document.querySelector(".textArea")
var mensagem = document.querySelector(".mensagem")

function btnEncriptar () {

    var textoEncriptado = encriptar(textArea.value)
    mensagem.value = textoEncriptado
    textArea.value = ""


}


function encriptar(stringEncriptada) {

let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]]

stringEncriptada = stringEncriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length ; i++ ) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada

}


function btnDesencriptar () {
    var textoDesencriptado = desencriptar(textArea.value)
    mensagem.value = textoDesencriptado
    textArea.value = ""
}


function desencriptar(stringDesencriptada) {

let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]]

stringDesencriptada = stringDesencriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}


function copiarTexto () {
    var textoCopiado = document.querySelector(".mensagem")
    textoCopiado.select()
    textoCopiado.setSelectionRange(0,99999)
    document.execCommand("Copy")
    mensagem.value = ""
}

