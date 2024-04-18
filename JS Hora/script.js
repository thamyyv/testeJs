function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22


    msg.innerHTML= `Agora são ${hora} horas.`

    if (hora >= 5 && hora < 12) {
        img.src = 'img/pexels-vlada-karpovich-4448853.jpg'
        document.body.style.background = 'rgb(214, 214, 109)'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'img/pexels-tatiana-syrikova-3975680.jpg'
        document.body.style.background = 'rgb(107, 216, 118)'
    } else {
        img.src = 'img/pexels-james-wheeler-414612.jpg'
        document.body.style.background = 'rgb(41, 78, 199)'
    }
}
