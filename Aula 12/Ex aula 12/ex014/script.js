function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
    if (hora >= 0 && hora < 12) {
        //Bom Dia
        img.src = "imagens/manha_circulo.png"
        document.body.style.background = '#f3cb45'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde
        img.src = "imagens/tarde_circulo.png"
        document.body.style.background = '#ca2b03'
    } else {
        //Boa Noite
        img.src = "imagens/noite_circulo.png"
        document.body.style.background = '#3a2d49'
    }
}


