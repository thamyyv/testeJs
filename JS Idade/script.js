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

            if(idade >=0 && idade <10) {
                img.setAttribute('src', '/img/criancaMasc.jpg')
            } else if (idade < 22) {

            } else if (idade < 57) {

            } else {

            }

        } else if (fsex[1].checket) {
            genero = 'uma mulher'

            if(idade >=0 && idade <10) {
               
            } else if (idade < 22) {

            } else if (idade < 57) {
 
            } else {

            }
        }


        res.innerHTML = `Você é ${genero} de ${idade} anos` 
        res.appendChild(img)
    }
}