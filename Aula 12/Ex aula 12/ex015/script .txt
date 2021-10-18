function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fun_ano = window.document.getElementById('txt_ano')
    var res = window.document.getElementById('resultato')
    if (fun_ano.value.length == 0 || fun_ano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fun_sex = document.getElementsByName('radi_sex')
        var idade = ano - fun_ano.value
        var genero
        
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fun_sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Menino
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 21) {
                //Garoto
                img.setAttribute('src', 'imagens/garoto.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto.png')
            } else {
                //Velho
                img.setAttribute('src', 'imagens/velho.png')
            }
        } else if (fun_sex[1].checked) {
            genero = "Mulher"
            if (idade >=0 && idade < 10) {
                //Menina
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 21) {
                //Garota
                img.setAttribute('src', 'imagens/garota.png')
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src', 'imagens/adulta.png')
            } else {
                //Velha
                img.setAttribute('src', 'imagens/velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}