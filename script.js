function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        res.innerHTML = `Idade calculada ${idade}`
        var  gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked ){
            gênero = 'Masculino'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'fotomenino.png')                
            } else if (idade < 21) {
                img.setAttribute('src', 'fotojovem.png')
            } else if ( idade < 60) {
                img.setAttribute('src', 'fotohomem.png')
            } else {
                img.setAttribute('src', 'fotoidoso.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Feminino'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'fotomenina.png')
            } else if( idade > 10 && idade < 21){
                img.setAttribute('src', 'fotojoven.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'fotomulher.png')
            } else {
                img.setAttribute('src', 'fotoidosa.png')                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}