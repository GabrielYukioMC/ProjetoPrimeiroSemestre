


fetch("/personagens/listar").then(function (resposta) {
    if (resposta.ok) {
        if (resposta.status == 204) {
        
            throw "Nenhum personagem encontrado!!";
        }

        resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));

          
            for (let i = 0; i < resposta.length; i++) {
                var publicacao = resposta[i];

                TotalPersonagens.innerHTML += `
                <div class="caixaPersonagem">
                    <div class="caixaImagem">
                        <div class="Mudar">
                          <div class="front">
                            <img src="assets/img/personagens/${publicacao.imgPre}" alt="">
                          </div>
                          <div class="back">
                            <img src="assets/img/personagens/${publicacao.imgPos}" alt="">
                          </div>
                      </div>
                  </div>
                
                    <div class="SobrePersonagem">
                    <div class="atributos">
                    <h1>Nome: <span>${publicacao.nome}</span></h1>
                    <h2>Afiliação: <span>${publicacao.afiliacao}</span></h2>
                    <h2>Cargo: <span>${publicacao.cargo}</span></h2>
                    <h2>Recompensa: <span>${publicacao.recompensa}</span> de Berries</h2>
                    <h2>titulo: <span>${publicacao.titulo}</span></h2>
                    </div>
                      <p>${publicacao.historia}</p>
                    </div>
                </div>
              
                `;
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






