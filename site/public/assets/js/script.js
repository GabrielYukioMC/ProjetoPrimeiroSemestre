

Chart.defaults.color = '#2211a0';



obterDadosGrafico();
function obterDadosGrafico() {


    fetch(`/medidas/totalA`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                plotarGrafico(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

// Esta função *plotarGrafico* usa os dados capturados na função anterior para criar o gráfico
// Configura o gráfico (cores, tipo, etc), materializa-o na página e, 
// A função *plotarGrafico* também invoca a função *atualizarGrafico*
function plotarGrafico(resposta) {

    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = ['anime', 'manga', 'ambos'];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [{
            labels: ['anime', 'manga', 'ambos'],
            data: [],
            fill: false,
            backgroundColor: [

                '#6954f4',
                '#161045',
                '#2211a0',
            ],


            tension: 0.1
        }]
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        // labels.push(registro.anime,registro.manga,registro.ambos,);
        dados.datasets[0].data.push(registro.anime);
        dados.datasets[0].data.push(registro.manga);
        dados.datasets[0].data.push(registro.ambos);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'doughnut',
        data: dados,

        options: {
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        boxWidth: 50,
                        boxHeight: 20,
                        font:{weight: 'bold',
                    size:15}
                    }

                }
            }
        }
    };

    // Adicionando gráfico criado em div na tela
    let myChart = new Chart(
        document.getElementById(`myChartCanvas1`),
        config
    );

    spanQtdAnime.innerHTML = registro.anime
    spanQtdManga.innerHTML = registro.manga
    spanQtdAmbos.innerHTML = registro.ambos
    spanQtdTotal.innerHTML = registro.total

}