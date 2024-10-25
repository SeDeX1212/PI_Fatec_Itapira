function exibirConteudo(opcao) {
    const titulo = document.getElementById('titulo');
    const descricao = document.getElementById('descricao');

    switch (opcao) {
        case 'home':
            titulo.innerText = 'Home';
            descricao.innerText = 'Bem-vindo à página inicial!';
            break;
        case 'sobre':
            titulo.innerText = 'Sobre';
            descricao.innerText = 'Esta é a seção sobre nós.';
            break;
        case 'contato':
            titulo.innerText = 'Contato';
            descricao.innerText = 'Entre em contato conosco.';
            break;
        default:
            titulo.innerText = 'Bem-vindo!';
            descricao.innerText = 'Selecione uma opção do menu.';
    }
}
