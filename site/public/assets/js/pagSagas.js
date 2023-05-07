fetch("/sagas/listar").then(function (resposta) {
    if (resposta.ok) {
        if (resposta.status == 204) {
        
            throw "Nenhuma saga encontrada!!";
        }

        resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));

          
            for (let i = 0; i < resposta.length; i++) {
                var publicacao = resposta[i];

                sessoesSagas.innerHTML += `
                <section class="sessoes ${publicacao.nomeSaga}">
                  <div class="caixaSaga">
               
                    <div class="imagemConteudo"> <img src="assets/img/sagas/${publicacao.logoSaga}" alt=""></div>
                   
                     <div class="textoConteudo">
              
                      <h1>${publicacao.nomeSaga}</h1>
                       <p>${publicacao.descricaoSaga}</p>
                       <a href="${publicacao.nomeSaga}.html">Ver Mais...</a>
                   
                     </div>
                     
                   </div>
                       
                </section>
                
                `;
            }

        });
    } else {


        console.log("Houve um erro na busca das sagas");

        resposta.text().then(texto => {
            console.error(texto);

        });
    }

}).catch(function (erro) {
    console.log(erro);
})




