var loginSenha = document.getElementById('login_senha_input');
var mostraL = document.getElementById('mostrarL');

mostraL.addEventListener('click', () => {
    if (mostraL.classList.contains('fa-eye')) {

        mostraL.classList.remove('fa-eye')
        mostraL.classList.add('fa-eye-slash')
        login_senha_input.setAttribute('type', 'text');

    }
    else {
        mostraL.classList.remove('fa--eye-slash')
        mostraL.classList.add('fa-eye')
        login_senha_input.setAttribute('type', 'password');

    }
})



var CamposEmBrancoAlert = document.getElementById('CamposEmBrancoAlert');
var CamposEmProcessoAlert = document.getElementById('CamposEmProcessoAlert');
var CampoTudoCertoAlert = document.getElementById('CampoTudoCertoAlert');
var CampoTudoErradoAlert = document.getElementById('CampoTudoErradoAlert');


function entrar() {


    var emailVar = login_email_input.value;
    var senhaVar = login_senha_input.value;

    if (emailVar == "" || senhaVar == "") {

        CamposEmBrancoAlert.classList.remove('none')

        setTimeout(() => {
            CamposEmBrancoAlert.classList.add('none')
        }, "2000")

        return false;
    }
    CamposEmProcessoAlert.classList.remove('none')
    setTimeout(() => {
        CamposEmProcessoAlert.classList.add('none')
    }, "2000")


    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.CARGO_USUARIO = json.cargo;
                sessionStorage.CORPAG_USUARIO = json.corPag;
                sessionStorage.PersonagemF_USUARIO = json.fkPersonagemF;
                sessionStorage.ARCOF_USUARIO = json.fksagaF;
                sessionStorage.VISUALIZACAO_USUARIO = json.meioVisualizacao;

                sessionStorage.ID_USUARIO = json.idUsuario;

                sessionStorage.FKPERSONAGEM_USUARIO = null
                sessionStorage.FKARCO_USUARIO = null

                setTimeout(() => {

                    CampoTudoCertoAlert.classList.remove('none')
                    setTimeout(() => {
                        CampoTudoCertoAlert.classList.add('none')
                    }, "2000")


                    if ( sessionStorage.CARGO_USUARIO == 'Admin') {
                        setTimeout(function () {                        
                            window.location = "dashboard.html";
                        }, 2000);
                    }else{
                        setTimeout(function () {                        
                            window.location = "usuario.html";
                        }, 2000);
                    }
                    
                }, "2000")

            });

        } else {
            setTimeout(() => {
                CampoTudoErradoAlert.classList.remove('none')
                setTimeout(() => {
                    CampoTudoErradoAlert.classList.add('none')
                }, "2000")
            }, "2000")

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);

            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })




    return false;
}
