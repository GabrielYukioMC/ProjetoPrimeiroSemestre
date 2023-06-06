function AbrirModalComentario() {
    var modal = document.getElementById('modalConteudo')
    modal.classList.remove('none')
}
var fechar = document.getElementById('fechar')
fechar.addEventListener('click', () => {
    modalConteudo.classList.add('none')
})

// ^ ----------------------- contador de caracter dos campos de textos -----------------------^
var campoTitulo = document.getElementById('tituloCriacao')
campoTitulo.addEventListener('input', () => {
    var qtdCaracterTitulo = campoTitulo.value.length;
    numCaracterTitulo.innerHTML = `${qtdCaracterTitulo}/20`
})


var textArea = document.getElementById('textoComentarioCriacao')
textArea.addEventListener('input', () => {
    var qtdCaracter = textArea.value.length;
    numCaracter.innerHTML = `${qtdCaracter}/1500`
})
// ^ ----------------------- contador de caracter dos campos de textos -----------------------^


// ^ ----------------------- Tipo de comentario (comentario,teoria,spoiler) -----------------------^
var modeloComentario = 'comentario'
tipoTema.innerHTML = `Tema: ${modeloComentario}`


var SpanComentario = document.getElementById('SpanComentario');
SpanComentario.addEventListener('click', () => {
    modeloComentario = 'comentario'
    tipoTema.innerHTML = `Tema: ${modeloComentario}`

})

var SpanTeoria = document.getElementById('SpanTeoria');
SpanTeoria.addEventListener('click', () => {
    modeloComentario = 'teoria'
    tipoTema.innerHTML = `Tema: ${modeloComentario}`

})

var SpanSpoiler = document.getElementById('SpanSpoiler');
SpanSpoiler.addEventListener('click', () => {
    modeloComentario = 'spoiler'
    tipoTema.innerHTML = `Tema: ${modeloComentario}`

})

// ^ ----------------------- Tipo de comentario (comentario,teoria,spoiler) -----------------------^

// ^ ----------------------- Validação de usuario cadastrado-----------------------^

var opcaoCriarComentario = [
    {
        titulo: `Escrever comentario`,
        texto: `Agora que você já responteu os formularios você pode escrever suas ideias, suas teorias, fazer comentarios sobre a obra e se quiser pode ate comentar sobre algum spoiler que você chegou a ver na internet`,
        funcao: `AbrirModalComentario()`,
        botao: `Comentar`,
    },
    {
        titulo: `Se cadastrar`,
        texto: `Caso você tenha o interece em fazer um comentario primeiro você precisa se cadastrar/logar no site`,
        funcao: `cadastrarUsuario()`,
        botao: `Cadastrar`,
    }
]


function escreverComentario(titulo, texto, funcao, botao) {
    CriarComentario.innerHTML = `<div class="caixaInformacao padaoInformacao">
    <div class="titulo padraotitulo">
        <h1>${titulo}</h1>
    </div>
    <div class="conteudoInformacao ">
        <p>${texto}</p>
        <br>
        <button onclick="${funcao}">${botao}</button>
    </div>
</div>`
}


if (sessionStorage.ID_USUARIO) {
    escreverComentario(opcaoCriarComentario[0].titulo, opcaoCriarComentario[0].texto, opcaoCriarComentario[0].funcao, opcaoCriarComentario[0].botao)
} else {
    escreverComentario(opcaoCriarComentario[1].titulo, opcaoCriarComentario[1].texto, opcaoCriarComentario[1].funcao, opcaoCriarComentario[1].botao)

}

function cadastrarUsuario() {
    window.location = "cadastro.html";
}

// ^ ----------------------- Validação de usuario cadastrado-----------------------^

// ^ ----------------------- Cadastrar e Exibir comentarios -----------------------^


function CadastrarComentario() {
    var TituloVar = tituloCriacao.value;
    var ConteudoVar = textoComentarioCriacao.value;
    var TipoVar = modeloComentario;
    var emailUsuarioVar = sessionStorage.EMAIL_USUARIO


    if (TituloVar == "" || ConteudoVar == "") {
        return false;
    }

    // Enviando o valor da nova input
    fetch("/comentarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            tituloServer: TituloVar,
            conteudoServer: ConteudoVar,
            tipoServer: TipoVar,
            emailServer: emailUsuarioVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {

            setTimeout(() => {
                window.location = "PagTeoria.html";
            }, "1000")

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

    });


}



fetch("/comentarios/listar").then(function (resposta) {
    if (resposta.ok) {
        if (resposta.status == 204) {

            throw "Nenhum personagem encontrado!!";
        }

        resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));


            for (let i = 0; i < resposta.length; i++) {
                var publicacao = resposta[i];
                var MeioV;
                if (publicacao.meioVisualizacao == "Ambos") {
                    MeioV = "Anime/Manga"
                } else {
                    MeioV = publicacao.meioVisualizacao;
                }
                areaComentarios.innerHTML += ` 
                <div class="FormatoPadao ${publicacao.tipoComentario}">
                  <div class="titulo">
                      <h1>${publicacao.tituloComentario}</h1> <i onclick="mostarOpcoes(${publicacao.idComentario})" class="fa-solid fa-ellipsis-vertical tresPontinhos"> </i>
                      <div class="opcoes">
                             <div id="opcao${publicacao.idComentario}" class="CaixaOpcoes none">
                             <i onclick="sairOpcao(${publicacao.idComentario})" class="fa-solid fa-xmark"></i>
                             <div class="botoesOpcoes">
                             <span>notificar<span>
                             </div>
                             </div>
                      </div>
                     
                      <div class="informacoesPostagem">
                          <h3>Autor: ${publicacao.nome}</h3>
                          <h3>${publicacao.tipoComentario} sobre ${MeioV}</h3>
                      </div>
                  </div>
                  <div class="conteudo">
                      <p>
                          ${publicacao.conteudo}
                      </p>
                  </div>
                </div>`
            }

        });
    } else {


        console.log("Houve um erro na busca dos personagens");

        resposta.text().then(texto => {
            console.error(texto);

        });
    }

}).catch(function (erro) {
    console.log(erro);
})




function mostarOpcoes(id) {
    var opcao = document.getElementById(`opcao${id}`);
    opcao.classList.remove('none')
}


function sairOpcao(id) {
    var opcao = document.getElementById(`opcao${id}`);
    opcao.classList.add('none')
}






