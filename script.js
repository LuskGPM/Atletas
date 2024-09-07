let botao = document.getElementById('bot'); // Seleciona o botão com o ID 'bot' para disparar a busca

botao.addEventListener('click', () => { // Adiciona um ouvinte de evento para o botão. Ao clicar, a função é executada

    let section = document.getElementById('resultados-pesquisa'); // Seleciona a seção onde os resultados serão exibidos
    let busca = document.getElementById('busca').value; // Obtém o valor digitado na caixa de pesquisa
    let resultados = ""; // String que armazenará o HTML dos resultados
    let titulo = ''; // Variáveis temporárias para armazenar os valores durante a iteração
    let descricao = '';
    let tags = '';

    for (let dado of dados){ // Itera sobre cada item de dados
        titulo = dado.titulo.toLowerCase(); // Converte o título para minúsculas para comparação
        descricao = dado.descricao.toLowerCase(); // Converte a descrição para minúsculas
        tags = dado.tags.toLowerCase(); // Converte as tags para minúsculas
        busca = busca.toLowerCase(); // Converte a palavra buscada para minúsculas

        if (titulo.includes(busca) || descricao.includes(busca) || tags.includes(busca)) { // Verifica se a palavra buscada está presente em algum dos campos
            resultados = `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.wiki}" target="_blank">Referência</a>
                </div>
            `;
        } else if (busca == '') { // Se a busca estiver vazia, exibe uma mensagem
            section.innerHTML = `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">Nada Encontrado</a>
                    </h2>
                </div>
            `;
            return; // Interrompe a execução do loop
        } else if(!resultados){ // Se não houver resultados após o loop, exibe uma mensagem
            resultados = `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">Nada Encontrado</a>
                    </h2>
                </div>
            `;
        }
    };

    // Atualiza o conteúdo da seção de resultados com o HTML gerado
    section.innerHTML = resultados;
});
