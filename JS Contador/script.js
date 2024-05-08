function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var intervalo = document.getElementById('intervalo')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || intervalo.value.length <= 0) {
        window.alert('Faltam dados a serem preenchidos!')
    } else {
        
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var inter = Number(intervalo.value)

        if(i < f) {
            for(let c = i; c <= f; c += inter)
            res.innerHTML += ` ${c} \u{1f603}`
        } else {
            for(let c = i; c >= f; c -= inter)
                res.innerHTML += ` ${c} \u{1f449}`
        }
    }
}