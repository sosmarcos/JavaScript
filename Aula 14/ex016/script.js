function contar() {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var impresor = window.document.getElementById('resposta')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO')
    }
    else {
        inicio = parseInt(inicio.value)
        fim = parseInt(fim.value)
        passo = parseInt(passo.value)
        if (passo <= 0) {
            passo = 1
        }
        impresor.innerText = ''        
        if (inicio < fim) {
            for (var número = inicio; número <= fim; número += passo) {
            // contagem progresiva
                if (número == inicio) {
                    impresor.innerText += `${número}`
                }
                else {
                    impresor.innerText += `\u{1f449} ${número}`
                }
            }
        }
        else {
            for (let número = inicio; número >= fim; número -= passo ) {
                // contagem regresiva
                if (número == inicio) {
                    impresor.innerText += `${número}`
                }
                else {
                    impresor.innerText += `\u{1f449} ${número}`
                }
            }
        }
        impresor.innerText += `\u{1f3c1}`
    }
}
