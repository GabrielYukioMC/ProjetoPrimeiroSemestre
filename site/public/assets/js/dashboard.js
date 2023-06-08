if (sessionStorage.CARGO_USUARIO != 'Admin') {
    window.location = "index.html";
}

// ^ <=------------------ plotar dados na tela ------------------=> ^

exibirAvisos();
obterDadosDeVisualizacaoGrafico();
obterDadosGraficoArcos();
obterDadosGraficoPersonagem();
listarUsuario();

// ^ <=------------------ plotar dados na tela ------------------=> ^


nameUsuarioPrincipal.innerHTML = sessionStorage.NOME_USUARIO
cargoUsuarioPrincipal.innerHTML = sessionStorage.CARGO_USUARIO


var body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    modeSwtich = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

modeSwtich.addEventListener("click", () => {
    body.classList.toggle("dark");


    if (body.classList.contains("dark")) {
        modeText.innerHTML = "Light Mode"
    } else {
        modeText.innerHTML = "Dark Mode"

    }
});


var dashboardBtn = document.getElementById("dashboardBtn")
dashboardBtn.addEventListener('click', () => {
    dashboard.classList.remove('none')
    dashboardBtn.classList.add('active')

    notificacoes.classList.add('none')
    analytics.classList.add('none')
    notificacoesBtn.classList.remove('active')
    analyticsBtn.classList.remove('active')
})



var notificacoesBtn = document.getElementById("notificacoesBtn")
notificacoesBtn.addEventListener('click', () => {
    notificacoes.classList.remove('none')
    notificacoesBtn.classList.add('active')


    dashboard.classList.add('none')
    analytics.classList.add('none')
    dashboardBtn.classList.remove('active')
    analyticsBtn.classList.remove('active')
})

var analyticsBtn = document.getElementById("analyticsBtn")
analyticsBtn.addEventListener('click', () => {
    analytics.classList.remove('none')
    analyticsBtn.classList.add('active')



    dashboard.classList.add('none')
    notificacoes.classList.add('none')
    dashboardBtn.classList.remove('active')
    notificacoesBtn.classList.remove('active')
})

var logout = document.getElementById('logout')
logout.addEventListener('click', () => {
    sessionStorage.clear();
    window.location = "index.html";
})


function listarUsuario() {
    caixa_usuario.innerHTML = ``
    fetch("/usuarios/listar").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {

                throw "Nenhum personagem encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta[[0]]));
                for (let cont = 0; cont < resposta.length; cont++) {
                    const contador = resposta[cont];
                    qtdUsuarios.innerHTML = cont + 1
                }

                for (let i = 0; i < resposta.length; i++) {
                    var infUsuario = resposta[i];
                    caixa_usuario.innerHTML += ` 
                <ul class="informacoes_usuario">
                    <li class="id">
                        <h6>${infUsuario.idUsuario}</h6>
                    </li>
                    <li class="nome">
                        <h6>${infUsuario.nome}</h6>
                    </li>

                    <li class="personagemF">
                        <h6>${infUsuario.personagem}</h6>
                    </li>

                    <li class="arcoF">
                        <h6>${infUsuario.saga}</h6>
                    </li>
                    <li class="botoes">
                       <button onclick="deletarU(${infUsuario.idUsuario})"> <i  id="deletarU${infUsuario.idUsuario}" class='bx bxs-trash'></i></button>
                    </li>
                </ul>`



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

}


function obterDadosGraficoPersonagem() {

    fetch(`/medidas/buscarTotalMedidaPersonagemF`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                plotarGraficoP(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarGraficoP(resposta) {

    console.log('iniciando plotagem do gráfico...');

    let labelsP = []


    for (let i = 0; i < resposta.length; i++) {
        const cont = resposta[i];
        console.log(cont.nome)
        labelsP.push(cont.nome)
    }


    let dados = {
        labels: labelsP,
        datasets: [{
            labels: [resposta.nome],
            data: [],
            fill: true,
            backgroundColor: [
                '#da0a07',
                '#0cd234',
                '#d7b90c',
                '#06d7c6',
                '#e9e9ca',
            ],
            tension: 0.1
        }]
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        dados.datasets[0].data.push(registro.qtdP);

    }
    const config = {
        // type: 'doughnut',
        type: 'bar',
        data: dados,
        options: {
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        boxWidth: 50,
                        boxHeight: 20,
                        font: {
                            weight: 'bold',
                            size: 15
                        }
                    }

                }
            }
        }
    };

    let myChart1 = new Chart(
        document.getElementById(`myChartCanvas1`),
        config
    );


}



function obterDadosGraficoArcos() {

    fetch(`/medidas/buscarTotalMedidaArcoF`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                plotarGraficoA(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarGraficoA(resposta) {

    console.log('iniciando plotagem do gráfico...');

    let labelsP = []


    for (let i = 0; i < resposta.length; i++) {
        const cont = resposta[i];
        console.log(cont.nome)
        labelsP.push(cont.nome)
    }


    let dados = {
        labels: labelsP,
        datasets: [{
            labels: [resposta.nome],
            data: [],
            fill: true,
            backgroundColor: [
                '#da0a07',
                '#0cd234',
                '#d7b90c',
                '#06d7c6',
                '#e9e9ca',
            ],
            tension: 0.1
        }]
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        dados.datasets[0].data.push(registro.qtdA);

    }
    const config = {
        // type: 'doughnut',
        type: 'bar',
        data: dados,
        options: {
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        boxWidth: 50,
                        boxHeight: 20,
                        font: {
                            weight: 'bold',
                            size: 15
                        }
                    }

                }
            }
        }
    };

    let myChart2 = new Chart(
        document.getElementById(`myChartCanvas2`),
        config
    );


}




function obterDadosDeVisualizacaoGrafico() {


    fetch(`/medidas/totalA`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                plotarGraficoV(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarGraficoV(resposta) {

    console.log('iniciando plotagem do gráfico...');

    let labelsP = []


    for (let i = 0; i < resposta.length; i++) {
        const cont = resposta[i];
        console.log(cont.total)
        labelsP.push(cont)
    }


    let dados = {
        labels: [`anime`, `manga`, `ambos`],
        datasets: [{
            labels: [`anime`, `manga`, `ambos`],
            data: [],
            fill: true,
            backgroundColor: [
                '#da0a07',
                '#0cd234',
                '#d7b90c',

            ],
            tension: 0.1
        }]
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        dados.datasets[0].data.push(registro.anime);
        dados.datasets[0].data.push(registro.manga);
        dados.datasets[0].data.push(registro.ambos);

    }
    const config = {
        // type: 'doughnut',
        type: 'bar',
        data: dados,
        options: {
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        boxWidth: 50,
                        boxHeight: 20,
                        font: {
                            weight: 'bold',
                            size: 15
                        }
                    }

                }
            }
        }
    };

    let myChart3 = new Chart(
        document.getElementById(`myChartCanvas3`),
        config
    );



}

function exibirAvisos() {

    caixa_Avisos.innerHTML = ``;

 fetch("/comentarios/listarA").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {

                throw "Nenhum aviso encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta[[0]]));
                for (let cont = 0; cont < resposta.length; cont++) {
                    qtdAlert.innerHTML = cont + 1
                }

                for (let i = 0; i < resposta.length; i++) {
                    var infAviso = resposta[i];
                    caixa_Avisos.innerHTML += `<div class="alerta">
                        <div class="iconeAlerta"><i class="fa-solid fa-triangle-exclamation"></i></div>
                        <div class="conteudoAlert">
                            <h3 class="comentarioP">comentario ${infAviso.fkC} em alerta</h3>
                        </div>
                    </div>`



                }

            });


        } else {


            console.log("Houve um erro na busca dos avisos");

            resposta.text().then(texto => {
                console.error(texto);

            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })


}




function deletarU(num) {
var CampoDeleteAlert = document.getElementById('CampoDeleteAlert')

    var id = num
    fetch("/usuarios/deletar", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: id,

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {

            CampoDeleteAlert.classList.remove('none')
            setTimeout(() => {
                CampoDeleteAlert.classList.add('none')
            }, "2000")

            listarUsuario()
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

    });

    return false;
}