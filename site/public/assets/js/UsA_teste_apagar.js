
nomeSpan.innerHTML = sessionStorage.NOME_USUARIO;
emailSpan.innerHTML = sessionStorage.EMAIL_USUARIO;



if (sessionStorage.CARGO_USUARIO == "padão") {
    cargoSpan.innerHTML = `Tripulante`;
} else {
    cargoSpan.innerHTML = `Capitão`;
}


if (sessionStorage.PersonagemF_USUARIO == "null") {
    personagemSpan.innerHTML = `Você ainda não tem um personagem favorito :(`
    exibirAlertFormulario.innerHTML += `
     <div class="caixaInformacao padaoInformacao">
            <div class="titulo padraotitulo">
                <h1>Qual seu personagem favorito?</h1>
            </div>
            <div class="conteudoInformacao ">
                <p>Clique no botão ao lado e responda ao formulario sobre o seu personagem favorito para poder ajudar nas analizes de preferencia dos usuarios.</p><br>
                <a class="padaoBotao"  href="formPersonagem.html">Responder formulario</a>
            </div>
        </div>`;
} else {
    personagemSpan.innerHTML = sessionStorage.PersonagemF_USUARIO

}

if (sessionStorage.ARCOF_USUARIO == "null") {
    arcoSpan.innerHTML = `Você ainda não tem um Arco favorito :(`
    exibirAlertFormulario.innerHTML += ` 
      <div class="caixaInformacao padaoInformacao">
            <div class="titulo padraotitulo">
                <h1>Qual seu arco favorito?</h1>
            </div>
            <div class="conteudoInformacao  ">
                <p>Clique no botão abaixo e responda ao formulario sobre o seu arco favorito para poder ajudar nas analizes de preferencia dos usuarios.</p><br>
                <a class="padaoBotao"  href="formPersonagem.html">Responder formulario</a>
            </div>
        </div>`;
}
else {
    arcoSpan.innerHTML = sessionStorage.ARCOF_USUARIO
}


if (sessionStorage.VISUALIZACAO_USUARIO == "null") {
    visualizacaoSpan.innerHTML = `Você ainda não acompanha a obra :(`
    exibirAlertFormulario.innerHTML += ` 
      <div class="caixaInformacao padaoInformacao">
            <div class="titulo padraotitulo">
                <h1>De que maneira você acompanha One Piece?</h1>
            </div>
            <div class="conteudoInformacao  ">
                <p>Clique no botão abaixo e responda ao formulario sobre o seu arco favorito para poder ajudar nas analizes de preferencia dos usuarios.</p><br>
                <button onclick="ModalCAcompanha()" class="padaoBotao ">Responder formulario</button>
            </div>
        </div>`;
}
else {
    visualizacaoSpan.innerHTML = sessionStorage.VISUALIZACAO_USUARIO
    exibirAlertFormulario.innerHTML += ` 
    <div class="caixaInformacao padaoInformacao">
                <div class="titulo padraotitulo">
                    <h1>Criar teoria!</h1>
                </div>
                <div class="conteudoInformacao ">
                    <p>Ao clicar no botão abaixo você será redirecionado para um espaço onde você vai poder escrever e publicar suas teoria sobre One Piece.</p><br>
                    <a class="padaoBotao" href="criadorDeTeoria.html">Criar teoria</a>
                </div>
            </div>
        </div>`;
}




FotoSpan.innerHTML = ` <i class="fa-solid fa-user"></i>`;



function ModalCAcompanha() {
    var modalV = document.getElementById('modalV')

    modalV.classList.remove('none')
}
var fechar = document.getElementById('fechar')

fechar.addEventListener('click', () => {
    modalV.classList.add('none')
})


function buttonV() {
    var resposta1 = OpV.value
    mensagemRForm.innerHTML = `Obrigado por falar como você acompanha One piece <br>`;
    if (resposta1 == 'Anime' || resposta1 == 'Manga') {
        mensagemRForm.innerHTML += `espero que esteja gostando do ${resposta1}`;

    } else {
        mensagemRForm.innerHTML += `Ai sim você gosta muito de One piece`;
    }

    fetch("/usuarios/update", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            respostaServer: resposta1,
            idServer: sessionStorage.ID_USUARIO,
            campoServer: "meioVisualizacao"
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.VISUALIZACAO_USUARIO = json.meioVisualizacao;

                setTimeout(function () {
                window.location = "usuario.html";
            }, 1500);

            });

        } else {

            console.log("Houve um erro ao tentar realizar o cadastro do manga/anime!");

            resposta.text().then(texto => {
                console.error(texto);

            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}
