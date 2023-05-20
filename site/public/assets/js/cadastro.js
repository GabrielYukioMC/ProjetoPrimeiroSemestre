var mostra = document.getElementById('mostrar');
var mostrarConf = document.getElementById('mostarConf');
var senha = document.getElementById('senha_input');
var senhaConf = document.getElementById('ConfSenha_input');



mostra.addEventListener('click', () => {
    if (mostra.classList.contains('fa-eye')) {
        mostra.classList.remove('fa-eye')
        mostra.classList.add('fa-eye-slash')
        senha.setAttribute('type', 'text');
    } else {
        mostra.classList.remove('fa--eye-slash')
        mostra.classList.add('fa-eye')
        senha.setAttribute('type', 'password');

    }
})

mostrarConf.addEventListener('click', () => {
    if (mostrarConf.classList.contains('fa-eye')) {
        mostrarConf.classList.remove('fa-eye')
        mostrarConf.classList.add('fa-eye-slash')
        senhaConf.setAttribute('type', 'text');
    } else {
        mostrarConf.classList.remove('fa--eye-slash')
        mostrarConf.classList.add('fa-eye')
        senhaConf.setAttribute('type', 'password');

    }
})



var CamposEmBrancoAlert = document.getElementById('CamposEmBrancoAlert');
var CampoSenhaAlert = document.getElementById('CampoSenhaAlert');
var CampoTudoCertoAlert = document.getElementById('CampoTudoCertoAlert');
var CampoEmailAlert = document.getElementById('CampoEmailAlert');

function cadastrar() {


    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = nome_input.value;
    var emailVar = email_input.value;
    var senhaVar = senha_input.value;
    var confirmacaoSenhaVar = ConfSenha_input.value;

    if (nomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "") {
        // exibir uma caixa de texto sobre o erro

        CamposEmBrancoAlert.classList.remove('none')

        setTimeout(() => {
            CamposEmBrancoAlert.classList.add('none')
        }, "2000")

        return false;
    } else if (emailVar.indexOf("@") < 0) {

        // alert campo E-mail invalido
        CampoEmailAlert.classList.remove('none')
        setTimeout(() => {
            CampoEmailAlert.classList.add('none')
        }, "2000")

        return false;

    } else if (senhaVar != confirmacaoSenhaVar) {


        // campo senha invalido
        CampoSenhaAlert.classList.remove('none')
        setTimeout(() => {
            CampoSenhaAlert.classList.add('none')
        }, "2000")
        return false;
    }

    // alert deu tudo certo
    CampoTudoCertoAlert.classList.remove('none')
    setTimeout(() => {
        CampoTudoCertoAlert.classList.add('none')
    }, "2000")


    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {

            setTimeout(() => {
                window.location = "login.html";
            }, "2000")

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

    });

    return false;
}

