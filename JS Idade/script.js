function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            genero = 'um homem'

            if(idade >=0 && idade < 10) {
                img.setAttribute('src', 'img/criancaMasc.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovemMasc.jpg')
            } else if (idade < 55) {
                img.setAttribute('src', 'img/adultoMas.jpg')
            } else {
                img.setAttribute('src', 'img/idosoMasc.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'uma mulher'

            if(idade >=0 && idade <10) {
                img.setAttribute('src', 'img/criancaFem.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovemFem.jpg')
            } else if (idade < 55) {
                img.setAttribute('src', 'img/adultoFem.jpg')
            } else {
                img.setAttribute('src', 'img/idosoFem.jpg')
            }
        }


        res.innerHTML = `Você é ${genero} de ${idade} anos` 
        res.appendChild(img)
    }
}