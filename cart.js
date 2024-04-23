// Função para adicionar um item ao carrinho
function adicionarItemAoCarrinho(item) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(item);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Função para enviar o carrinho para o backend
function enviarCarrinhoParaBackend() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinho && carrinho.length > 0) {
        fetch('/api/carrinho', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carrinho)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Resposta do servidor:', data);
            // Aqui você pode redirecionar o usuário para a página de pagamento do Mercado Pago
        })
        .catch(error => {
            console.error('Erro ao enviar dados do carrinho:', error);
        });
    } else {
        console.log('Carrinho vazio');
    }
}

// Exemplo de uso: adicionar um item ao carrinho
const item = { id: 1, nome: 'Produto', preco: 10.00, quantidade: 1 };
adicionarItemAoCarrinho(item);

// Quando o usuário clicar em "Finalizar Compra", chame a função para enviar o carrinho para o backend
enviarCarrinhoParaBackend();
