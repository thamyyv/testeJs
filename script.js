var num = document.getElementById('num');
var lista = document.getElementById('lista');
var res = document.getElementById('res');
let valores = [];

function isNumero(n) {
    if(Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, lista) {
    if(lista.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        var n = Number(num.value);
        valores.push(n);
        var item =  document.createElement('option');
        item.text = `O valor ${n} foi adicionado`;
        lista.appendChild(item);
        res.innerHTML = ''
    } else {
        window.alert('Preencha com um número válido');
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        var tot =valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos < menor])
                menor = valores[pos]
        }
        
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML +=`<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML +=`<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML +=`<p>O menor valor informado foi ${menor} .</p>`
        res.innerHTML +=`<p>A soma dos valores foi ${soma} .</p>`
        res.innerHTML +=`<p>A media dos valores foi ${media} .</p>`
    }
}