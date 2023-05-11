
nomeSpan.innerHTML = sessionStorage.NOME_USUARIO;
emailSpan.innerHTML = sessionStorage.EMAIL_USUARIO;

if (sessionStorage.CARGO_USUARIO == "padão") {
    cargoSpan.innerHTML = `Tripulante`;
} else {
    cargoSpan.innerHTML = `Capitão`;
}



var informacoes = [
    {
        tipo: 'personagem',
        titulo: "Qual seu personagem favorito?",
        primairoP: "Clique no botão ao lado e responda ao formulario sobre o seu personagem favorito para poder ajudar nas analizes de preferencia dos usuarios.",
        clique: "ModalPersonagem()"

    }, {
        tipo: 'arco',
        titulo: "Qual seu arco favorito?",
        primairoP: "Clique no botão abaixo e responda ao formulario sobre o seu arco favorito para poder ajudar nas analizes de preferencia dos usuarios.",
        clique: "ModalPersonagem()"
    },
    {
        tipo: 'visualização',
        titulo: "De que maneira você acompanha One Piece?",
        primairoP: "Clique no botão abaixo e responda ao formulario sobre o seu arco favorito para poder ajudar nas analizes de preferencia dos usuarios.",
        clique: "ModalCAcompanha()"
    }, {
        titulo: "Criar teoria!",
        primairoP: "Ao clicar no botão abaixo você será redirecionado para um espaço onde você vai poder escrever e publicar suas teoria sobre One Piece.",
        clique: null
    }
]



function gerarDiv(titulo, paragrafo, acao) {
    return `
    <div class="caixaInformacao padaoInformacao">
           <div class="titulo padraotitulo">
               <h1>${titulo}</h1>
           </div>
           <div class="conteudoInformacao ">
               <p>${paragrafo}</p><br>
               <button onclick="${acao}" class="padaoBotao">Responder formulario</button>
           </div>
       </div>`
}


if (sessionStorage.PersonagemF_USUARIO == "null") {
    personagemSpan.innerHTML = `Você ainda não tem um ${informacoes[0].tipo} favorito :(`
    exibirAlertFormulario.innerHTML += gerarDiv(informacoes[0].titulo, informacoes[0].primairoP, informacoes[0].clique);
} else {
    personagemSpan.innerHTML = sessionStorage.PersonagemF_USUARIO
}

if (sessionStorage.ARCOF_USUARIO == "null") {
    arcoSpan.innerHTML = `Você ainda não tem um  ${informacoes[1].tipo} favorito :(`
    exibirAlertFormulario.innerHTML += gerarDiv(informacoes[1].titulo, informacoes[1].primairoP, informacoes[1].clique)
}
else {
    arcoSpan.innerHTML = sessionStorage.ARCOF_USUARIO
}


if (sessionStorage.VISUALIZACAO_USUARIO == "null") {
    visualizacaoSpan.innerHTML = `Você ainda não acompanha a obra :(`
    exibirAlertFormulario.innerHTML += gerarDiv(informacoes[2].titulo, informacoes[2].primairoP, informacoes[2].clique)
}
else {
    console.log(sessionStorage.VISUALIZACAO_USUARIO);
    visualizacaoSpan.innerHTML = sessionStorage.VISUALIZACAO_USUARIO
    exibirAlertFormulario.innerHTML += gerarDiv(informacoes[3].titulo, informacoes[3].primairoP, informacoes[3].clique)

}



function ModalCAcompanha() {
    var modal = document.getElementById('modalV')
    modal.classList.remove('none')
}

var fechar = document.getElementById('fechar')
fechar.addEventListener('click', () => {
    modalV.classList.add('none')
})

function ModalPersonagem() {
    var modal = document.getElementById('modalP')
    modal.classList.remove('none')
}

var fechar2 = document.getElementById('fechar2')
fechar2.addEventListener('click', () => {
    modalP.classList.add('none')
})

function ModalArco() {
    var modal = document.getElementById('modalA')
    modal.classList.remove('none')
}

var fechar3 = document.getElementById('fechar3')
fechar3.addEventListener('click', () => {
    modalP.classList.add('none')
})


function buttonEnviarRespostaV() {
    var resposta1 = OpV.value;
    var campo = "meioVisualizacao";
    
    mensagemRForm.innerHTML = `Obrigado por falar como você acompanha One piece <br>`;
    if (resposta1 == 'Anime' || resposta1 == 'Manga') {
        mensagemRForm.innerHTML += `espero que esteja gostando do ${resposta1}`;
    } else{
        
        mensagemRForm.innerHTML += `Ai sim você gosta muito de One piece`;
    }

    updateVisualizacao(resposta1,campo)
}


function updateVisualizacao(resposta1,campo) {

    fetch("/usuarios/update", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            respostaServer: resposta1,
            idServer: sessionStorage.ID_USUARIO,
            campoServer: campo
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.VISUALIZACAO_USUARIO = resposta1;

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






function buttonEnviarResposta() {
    var resposta2 = OpP.value;
    var campo = "Personagem";
    


    updatePerArc(resposta2,campo)
}


function updatePerArc(resposta2,campo) {

    fetch("/usuarios/updatePerArc", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            respostaServer: resposta2,
            idServer: sessionStorage.ID_USUARIO,
            campoServer: campo,
        
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.PersonagemF_USUARIO = resposta2;

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