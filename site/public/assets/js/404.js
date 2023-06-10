var temaPagina = ['Chopper', 'Tesouro', 'Zoro']


var num = parseInt(Math.random() * 3)

var tema = temaPagina[num]

if (tema == "Chopper") {
    var texto = `Eita!! parece que você não prestou atenção no caminho e acabou destruindo o algodão doce do Chopper, tome mais cuidado por onde você anda (Ò﹏Ó)!!!`

    criarConteudo(tema, texto)
}


if (tema == "Tesouro") {
    var texto = `Meu Deus!! você navegou tanto que acabou chegando em laugh tale e acabou achando o One Piece  e por conta disso você se tornou o novo rei dos piratas !!!! ヽ(°〇°)ﾉ`

    criarConteudo(tema, texto)
}

if (tema == "Zoro") {
    var texto = `Puts!! você decidiu seguir um caminho junto do Zoro e vocês acabaram se perdendo por que ele tem um pessimo senso de direção ヽ(ー_ー )ノ`

    criarConteudo(tema, texto)
}

function criarConteudo(tema, texto) {

    corpoPagina.innerHTML = `
        <div class="caixaPrincipal404 modeloPrincipal${tema}">
        <div class="caixaCentral modeloCentral${tema}">
            <div class="caixa404 modelo404${tema}"">
                <span class="posicao1 posicoes">4</span>
                <span class="posicao2 posicoes">0</span>
                <span class="posicao3 posicoes">4</span>
            </div>

            <div class="caixaTexto modeloTexto${tema}"><h3>${texto}</h3></div>
            <div class="caixaBotao modeloBotao${tema}"><a href="index.html">Retornar ao site</a></div>
        </div>
        </div>
        `;
}