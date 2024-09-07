function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let entrada = document.getElementById("entrada").value;
    
    if (entrada == "") {
        section.innerHTML = "<p>Sua busca não foi encontrada</p>";
        return;
    }
      
    entrada = entrada.toLowerCase();
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre os dados da pesquisa
    for (let info of dados) {
        titulo = info.titulo.toLowerCase();
        descricao = info.descricao.toLowerCase();
        tags = info.tags.toLowerCase();
        if (titulo.includes(entrada) || descricao.includes(entrada) || tags.includes(entrada)) {
            // Cria o HTML para cada resultado individual
            resultados += `<div class="item-resultado">
                <h2>${info.titulo}</h2>
                <p class="descricao-meta">${info.descricao}</p>
                <a href="${info.link}" target="_blank">Mais informações</a>
            </div>`;
        }
    }
     if(!resultados ){
          resultados = "<p>Nada foi encontrado. Você precisa digitar algo relacionado. </p>"



     }
    // Atualiza o conteúdo da seção com os resultados construídos
    section.innerHTML = resultados;
}
