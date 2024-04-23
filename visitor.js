// Função para exibir o popup de visitantes
function exibirPopupVisitante(nome, estado, fotoUrl, mensagem, classificacao, dataAvaliacao) {
    // Calcula a diferença de tempo em minutos, horas, dias e meses
    const diffMinutos = Math.round((Date.now() - dataAvaliacao) / (1000 * 60));
    const diffHoras = Math.round(diffMinutos / 60);
    const diffDias = Math.round(diffHoras / 24);
    const diffMeses = Math.round(diffDias / 30);

    // Define a string de tempo baseada no intervalo de tempo
    let tempoString;
    if (diffMinutos < 60) {
        tempoString = `${diffMinutos} minutos atrás`;
    } else if (diffHoras < 24) {
        tempoString = `${diffHoras} horas atrás`;
    } else if (diffDias < 30) {
        tempoString = `${diffDias} dias atrás`;
    } else {
        tempoString = `${diffMeses} meses atrás`;
    }

    // Cria o elemento de popup
    const popup = document.createElement('div');
    const popupId = `popup-${Date.now()}`;
    popup.id = popupId;
    popup.classList.add('popup-visitor');

    // Conteúdo do popup
    popup.innerHTML = `
        <div class="visitor-photo">
            <img src="${fotoUrl}" alt="Foto do Visitante">
        </div>
        <div>
            <div class="visitor-name">${nome}</div>
            <div class="visitor-state">${estado}</div>
            <div class="visitor-message">${mensagem}</div>
            <div class="visitor-rating">
                ${criarEstrelas(classificacao)}
            </div>
            <div class="visitor-time">${tempoString}</div>
        </div>
        <span class="close-button" onclick="fecharPopupVisitante('${popupId}')">&times;</span>
    `;

    // Adicionando estilos
    popup.style.borderRadius = '10px';
    popup.style.backgroundColor = 'white';
    popup.style.padding = '20px';
    popup.style.position = 'fixed';
    popup.style.bottom = '20px';
    popup.style.right = '20px';
    popup.style.width = '300px';
    popup.style.height = 'auto';

    // Adiciona o popup ao corpo da página
    document.body.appendChild(popup);

    // Adiciona a classe de animação de entrada após um pequeno atraso para garantir que a animação seja executada corretamente
    setTimeout(() => {
        popup.classList.add('popup-fade-in');
    }, 100);
}

// Função para criar as estrelas de classificação
function criarEstrelas(classificacao) {
    const estrelasCheias = Math.floor(classificacao);
    const estrelasVazias = 5 - estrelasCheias;
    let estrelasHtml = '';

    // Estrelas cheias
    for (let i = 0; i < estrelasCheias; i++) {
        estrelasHtml += '<span class="star">&starf;</span>';
    }

    // Estrelas vazias
    for (let i = 0; i < estrelasVazias; i++) {
        estrelasHtml += '<span class="star-empty">&star;</span>';
    }

    return estrelasHtml;
}

// Função para fechar o popup de visitantes
function fecharPopupVisitante(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.classList.add('popup-fade-out'); // Adiciona classe de animação de saída
        popup.addEventListener('animationend', () => {
            popup.remove(); // Remove o popup após a animação de saída
        }, { once: true });
    }
}

// Lista de nomes e sobrenomes brasileiros
const nomesBrasileiros = [
    'Ana', 'João', 'Mariana', 'Pedro', 'Luiza', 'Lucas', 'Carolina', 'Matheus', 'Gabriela', 'Gustavo',
    'Maria', 'Paulo', 'Fernanda', 'Diego', 'Juliana', 'Rafael', 'Larissa', 'Thiago', 'Amanda', 'Bruno',
    'Camila', 'Ricardo', 'Isabela', 'Luciana', 'Fábio', 'Tatiane', 'Vinícius', 'André', 'Carla', 'Felipe',
    'Natália', 'Eduardo', 'Patrícia', 'Leonardo', 'Vanessa', 'Marcelo', 'Tatiana', 'Alexandre', 'Raquel', 'Daniel',
    'Renata', 'Carlos', 'Fernando', 'Aline', 'Bruna', 'Marcela', 'Rafaela', 'Thaís', 'José'
];


const sobrenomesBrasileiros = [
    'Silva', 'Santos', 'Oliveira', 'Souza', 'Pereira', 'Almeida', 'Ferreira', 'Gomes', 'Rodrigues', 'Costa',
    'Martins', 'Araújo', 'Lima', 'Lopes', 'Barbosa', 'Ribeiro', 'Alves', 'Nascimento', 'Carvalho', 'Cardoso',
    'Melo', 'Cavalcante', 'Fernandes', 'Dias', 'Cruz', 'Vieira', 'Correia', 'Machado', 'Rocha', 'Batista',
    'Ramos', 'Correia', 'Pinto', 'Monteiro', 'Castro', 'Freitas', 'Sousa', 'Morais', 'Dantas', 'Leal',
    'Costa', 'Farias', 'Viana', 'Barros', 'Campos', 'Guimarães', 'Tavares', 'Andrade', 'Figueiredo', 'Cunha'
];


// Lista de URLs de fotos genéricas para os perfis dos clientes
const fotosPerfil = [
    'https://thispersondoesnotexist.com/',
    'https://thispersondoesnotexist.com/',
    'https://thispersondoesnotexist.com/',
    'https://thispersondoesnotexist.com/',
    'https://thispersondoesnotexist.com/',
    // Adicione mais URLs de fotos genéricas conforme necessário
];  

// Função para gerar um nome aleatório
function gerarNomeAleatorio() {
    const nome = nomesBrasileiros[Math.floor(Math.random() * nomesBrasileiros.length)];
    const sobrenome = sobrenomesBrasileiros[Math.floor(Math.random() * sobrenomesBrasileiros.length)];
    return `${nome} ${sobrenome}`;
}

// Função para gerar um estado aleatório
function gerarEstadoAleatorio() {
    const estados = ['SP', 'RJ', 'MG', 'PR', 'RS', 'SC', 'BA', 'GO', 'DF', 'AM', 'PA', 'PE', 'CE', 'MT', 'MS', 'ES', 'PB', 'RN', 'AL', 'PI', 'TO', 'RO', 'AP', 'RR', 'AC'];
    return estados[Math.floor(Math.random() * estados.length)];
}

// Função para gerar um comentário aleatório
function gerarComentarioAleatorio() {
    const comentarios = [
        'Ótimo serviço!',
        'Atendimento excelente!',
        'Recomendo muito!',
        'Profissionais competentes!',
        'Estou muito satisfeito!',
        'Melhor experiência que já tive!',
        'Equipe muito prestativa.',
        'Rápido e eficiente.',
        'Serviço de alta qualidade.',
        'Excedeu minhas expectativas.',
        'Voltarei com certeza.',
        'Sempre confio neste serviço.',
        'Muito obrigado pela ajuda!',
        'Solução rápida e eficaz.',
        'Não poderia estar mais feliz!',
        'Definitivamente recomendaria a todos.',
        'Fui tratado com muito respeito.',
        'Nunca me decepciona.',
        'Impressionante em todos os sentidos.',
        'Muito melhor do que eu esperava.',
        // Adicione mais comentários conforme necessário
    ];
    
    return comentarios[Math.floor(Math.random() * comentarios.length)];
}

// Função para gerar uma classificação aleatória
function gerarClassificacaoAleatoria() {
    return parseFloat((Math.random() * (5 - 3) + 3).toFixed(1));
}

// Função para gerar uma foto aleatória para o perfil do cliente
function gerarFotoPerfilAleatoria() {
    return fotosPerfil[Math.floor(Math.random() * fotosPerfil.length)];
}

// Lista de clientes inicial vazia
const clientes = [];

// Gera clientes aleatórios e adiciona à lista
for (let i = 0; i < 10; i++) {
    const nome = gerarNomeAleatorio();
    const estado = gerarEstadoAleatorio();
    const fotoUrl = gerarFotoPerfilAleatoria(); // Utiliza a função para gerar uma foto aleatória
    const mensagem = gerarComentarioAleatorio();
    const classificacao = gerarClassificacaoAleatoria();
    const dataAvaliacao = Date.now() - (Math.random() * 1000 * 60 * 60 * 24 * 30); // Avaliação feita até 30 dias atrás
    clientes.push({ nome, estado, fotoUrl, mensagem, classificacao, dataAvaliacao });
}

let indiceClienteAtual = 0;

// Função para exibir o próximo cliente
function exibirProximoCliente() {
    // Verifica se há clientes restantes na lista
    if (indiceClienteAtual < clientes.length) {
        const clienteAtual = clientes[indiceClienteAtual];
        exibirPopupVisitante(clienteAtual.nome, clienteAtual.estado, clienteAtual.fotoUrl, clienteAtual.mensagem, clienteAtual.classificacao, clienteAtual.dataAvaliacao);
        indiceClienteAtual++;
    } else {
        // Se todos os clientes foram exibidos, reinicia o índice
        indiceClienteAtual = 0;
        // Exibe o primeiro cliente novamente
        const primeiroCliente = clientes[indiceClienteAtual];
        exibirPopupVisitante(primeiroCliente.nome, primeiroCliente.estado, primeiroCliente.fotoUrl, primeiroCliente.mensagem, primeiroCliente.classificacao, primeiroCliente.dataAvaliacao);
        // Incrementa o índice para o próximo cliente
        indiceClienteAtual++;
    }
}

// Exibe o primeiro cliente ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    exibirProximoCliente();
});

// Configuração do intervalo para exibir os próximos clientes em loop
setInterval(exibirProximoCliente, 8000); // Exibe um novo cliente a cada 8 segundos
