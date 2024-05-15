function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let saudacao = document.getElementById('saudacao')
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `<p>Agora sao ${hora} horas.</p>`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/dia.jpeg'
        saudacao.innerHTML = '<h1>Bom dia!</h1>'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'img/tarde.jpg'
        saudacao.innerHTML = '<h1>Boa tarde!</h1>'
    } else {
        img.src = 'img/noite.jpg'
        saudacao.innerHTML = '<h1>Boa noite!</h1>'
    }
}