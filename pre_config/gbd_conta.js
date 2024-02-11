
// Função para obter parâmetros da URL
function obterParametrosDaURL() {
    const parametros = new URLSearchParams(window.location.search);
    const parametro1 = parametros.post('nome');
    const parametro2 = parametros.post('apelido');
    // Realize tratamentos com os parâmetros
    console.log('Parâmetro 1:', parametro1);
    console.log('Parâmetro 2:', parametro2);
    // Faça o que for necessário com os dados   
    window.location.href = './conta.html';
        
}

// Chama a função ao carregar a página
obterParametrosDaURL();