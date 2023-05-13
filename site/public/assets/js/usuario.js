
nomeSpan.innerHTML = sessionStorage.NOME_USUARIO;
emailSpan.innerHTML = sessionStorage.EMAIL_USUARIO;




var fkPersonagem = sessionStorage.PersonagemF_USUARIO;
var fkArco = sessionStorage.ARCOF_USUARIO;;
var id = sessionStorage.ID_USUARIO;

if (sessionStorage.FKPERSONAGEM_USUARIO == 'null' && (fkArco != 'null' && fkPersonagem != 'null')) {


    fetch("/usuarios/listarPerArc", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuarioServer: id,

        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.FKPERSONAGEM_USUARIO = json[0].nomeP;
                sessionStorage.FKARCO_USUARIO = json[0].nomeA;



            });

        } else {

            resposta.text().then(texto => {
                console.error(texto);

            });
        }
        window.location = "usuario.html";


    }).catch(function (erro) {
        console.log(erro);
    })


} else {

}



if (sessionStorage.CARGO_USUARIO == "padão") {
    cargoSpan.innerHTML = `Tripulante`;
} else {
    cargoSpan.innerHTML = `Capitão`;
}



var informacoesCaixas = [
    {
        tipo: 'personagem',
        titulo: "Qual seu personagem favorito?",
        primairoP: "Clique no botão ao lado e responda ao formulario sobre o seu personagem favorito para poder ajudar nas analizes de preferencia dos usuarios.",
        clique: "ModalPersonagem()",
        botao: 'Responder formulario'

    }, {
        tipo: 'arco',
        titulo: "Qual seu arco favorito?",
        primairoP: "Clique no botão abaixo e responda ao formulario sobre o seu arco favorito para poder ajudar nas analizes de preferencia dos usuarios.",
        clique: "ModalArco()",
        botao: 'Responder formulario'
    },
    {
        tipo: 'visualização',
        titulo: "De que maneira você acompanha One Piece?",
        primairoP: "Clique no botão abaixo e responda ao formulario sobre o seu arco favorito para poder ajudar nas analizes de preferencia dos usuarios.",
        clique: "ModalCAcompanha()",
        botao: 'Responder formulario'
    }, {
        titulo: "Criar teoria!",
        primairoP: "Ao clicar no botão abaixo você será redirecionado para um espaço onde você vai poder escrever e publicar suas teoria sobre One Piece.",
        clique: 'enviarPaginaTeoria()',
        botao: 'Criar teoria'
    }
]



function gerarDiv(titulo, paragrafo, acao, botao) {
    return `
    <div class="caixaInformacao padaoInformacao">
           <div class="titulo padraotitulo">
               <h1>${titulo}</h1>
           </div>
           <div class="conteudoInformacao ">
               <p>${paragrafo}</p><br>
               <button onclick="${acao}" class="padaoBotao">${botao}</button>
           </div>
       </div>`
}


if (fkPersonagem == "null") {
    personagemSpan.innerHTML = `Você ainda não tem um ${informacoesCaixas[0].tipo} favorito :(`
    exibirAlertFormulario.innerHTML += gerarDiv(informacoesCaixas[0].titulo, informacoesCaixas[0].primairoP, informacoesCaixas[0].clique, informacoesCaixas[0].botao);
} else {
    if (sessionStorage.FKARCO_USUARIO == "null") {
        personagemSpan.innerHTML = `aguardando confirmação de arco`
    } else {
        personagemSpan.innerHTML = sessionStorage.FKPERSONAGEM_USUARIO
    }

}

if (fkArco == "null") {
    arcoSpan.innerHTML = `Você ainda não tem um  ${informacoesCaixas[1].tipo} favorito :(`
    exibirAlertFormulario.innerHTML += gerarDiv(informacoesCaixas[1].titulo, informacoesCaixas[1].primairoP, informacoesCaixas[1].clique, informacoesCaixas[1].botao)
}
else {
    if (sessionStorage.FKARCO_USUARIO == "null") {
        arcoSpan.innerHTML = `aguardando confirmação de personagem`
    } else {
        arcoSpan.innerHTML = sessionStorage.FKARCO_USUARIO
    }

}


if (sessionStorage.VISUALIZACAO_USUARIO == "null") {
    visualizacaoSpan.innerHTML = `Você ainda não acompanha a obra :(`
    exibirAlertFormulario.innerHTML += gerarDiv(informacoesCaixas[2].titulo, informacoesCaixas[2].primairoP, informacoesCaixas[2].clique, informacoesCaixas[2].botao)
}
else {

    visualizacaoSpan.innerHTML = sessionStorage.VISUALIZACAO_USUARIO
    exibirAlertFormulario.innerHTML += gerarDiv(informacoesCaixas[3].titulo, informacoesCaixas[3].primairoP, informacoesCaixas[3].clique, informacoesCaixas[3].botao)

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
    modalA.classList.add('none')
})


function buttonEnviarRespostaV() {
    var resposta1 = OpV.value;
    var campo = "meioVisualizacao";

    mensagemRForm.innerHTML = `Obrigado por falar como você acompanha One piece <br>`;
    if (resposta1 == 'Anime' || resposta1 == 'Manga') {
        mensagemRForm.innerHTML += `espero que esteja gostando do ${resposta1}`;
    } else {

        mensagemRForm.innerHTML += `Ai sim você gosta muito de One piece`;
    }

    updateVisualizacao(resposta1, campo)
}


function updateVisualizacao(resposta1, campo) {

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
                }, 1000);

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

    updatePersonagemArco(resposta2, campo)
}


function buttonEnviarRespostaArco() {
    var resposta2 = OpA.value;
    var campo = "Saga";
    updatePersonagemArco(resposta2, campo)
}


function updatePersonagemArco(resposta2, campo) {

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

                if (campo == "Personagem") {
                    sessionStorage.PersonagemF_USUARIO = resposta2;
                } else {
                    sessionStorage.ARCOF_USUARIO = resposta2;
                }

                setTimeout(function () {
                    window.location = "usuario.html";
                }, 500);

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


function enviarPaginaTeoria() {
    window.location = "teorias.html"
}