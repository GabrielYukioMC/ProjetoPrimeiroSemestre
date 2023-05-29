if (sessionStorage.CARGO_USUARIO != 'Admin') {
    window.location = "index.html";
}

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




fetch("/usuarios/listar").then(function (resposta) {
    if (resposta.ok) {
        if (resposta.status == 204) {

            throw "Nenhum personagem encontrado!!";
        }

        resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta[[0]]));
            for (let cont = 0; cont < resposta.length; cont++) {
                const contador = resposta[cont];
                qtdUsuarios.innerHTML = contador.idUsuario
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
                        <i class='bx bxs-trash'></i>
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








obterDadosGraficoPersonagem();
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
        type: 'doughnut',
        // type: 'bar',
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




obterDadosGraficoArcos();
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
        type: 'doughnut',
        // type: 'bar',
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