let botao = document.getElementById('bot');

botao.addEventListener('click', () => {

  let section = document.getElementById('resultados-pesquisa');
  let resultados = "";
  let busca = document.getElementById('busca').value;
  let titulo = '';
  let descricao = '';
  let tags = ''

  for (let dado of dados){
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    busca = busca.toLowerCase();
    if (titulo.includes(busca) || descricao.includes(busca) || tags.includes(busca)) {
      resultados = `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.wiki}" target="_blank">Referência</a>
      </div>
    `;
    }
    if (busca == '' || !resultados) {
      section.innerHTML = `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">Nada Encontrado</a>
        </h2>
      </div>
      `
      return;
    }
  };
   // Atualiza o conteúdo da seção de resultados com o HTML gerado
  section.innerHTML = resultados;
});