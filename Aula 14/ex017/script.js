function multiplicador() {
    let entrada = window.document.getElementById('número')
    let saida = window.document.getElementById('resposta')
    if (entrada.value.length == 0) {
        window.alert('ERRO')
    }
    else {
        número = Number(entrada.value)
        saida.innerHTML = `<h3>Tabuada do ${número}</h3>`
        for (var c = 1; c < 11; c ++) {
            saida.innerHTML += `<p>${número}x${c}= ${número * c}</p>`
        }
    }
}
