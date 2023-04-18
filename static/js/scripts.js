// declaraçao das variáveis
var mosquito = document.getElementById('mosquito')
var vidas = 3
var segundos = document.getElementById('segundos')
var tempo_fim = 30

// execulta as funçoes
var tempo_jogo = setInterval(tempoJogo, 1000)
var menosvidas = setInterval(menosVidas, 2000);
var mover = setInterval(mosquitoMover, 2000);
setTimeout(function () { window.location.href = '../parciaisHtml/ganhou_partida.html' }, 30000)
mosquito.onclick = clicked

function mosquitoMover() {
    var posicao_mosquito_x = parseInt(Math.random() * 100)
    var posicao_mosquito_y = parseInt(Math.random() * 100)

    mosquito.style.right = posicao_mosquito_x + '%'
    mosquito.style.bottom = posicao_mosquito_y + '%'
}



function menosVidas() {
    vidas--
    if (vidas === 0) {
        window.location.href = '../parciaisHtml/fim_partida.html'
    }

    vidas_cheias = document.querySelector('.vidaCheia')
    vidas_cheias.setAttribute('src', '../static/imagens/coracao_vazio.png')
    vidas_cheias.setAttribute('class', 'vidaVazia')

}


function clicked() {
    window.clearInterval(menosvidas)
    window.clearInterval(mover)
    mosquitoMover();
    menosvidas = setInterval(menosVidas, 2000);
    mover = setInterval(mosquitoMover, 2000);
}


function tempoJogo() {


    tempo_fim -= 1
    console.log(tempo_fim)
    segundos.innerText = tempo_fim

    if (tempo_fim === 0) {
        console.log('ganhou')
        clearInterval(tempo_jogo)
    }
}


