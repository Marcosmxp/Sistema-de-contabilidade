document.addEventListener('DOMContentLoaded', function() {
    
    // Animation for brand logos
    const marcasContainer = document.querySelector(".marcas-container");

    // Clone the brand logos container
    const cloneMarcas = marcasContainer.cloneNode(true);
    marcasContainer.appendChild(cloneMarcas);

    // Animation speed
    const animationSpeed = 50;

    // Function to scroll the images
    function scrollImages() {
        if (marcasContainer.scrollLeft >= marcasContainer.scrollWidth / 2) {
            marcasContainer.scrollLeft = 0;
        } else {
            marcasContainer.scrollLeft++;
        }
    }

    // Interval for scrolling the images
    setInterval(scrollImages, 1000 / animationSpeed);

    // Shopping cart functionality
    const carrinhoIcone = document.querySelector('.cart-icon');
    const carrinhoModal = document.querySelector('#carrinho-modal');
    const fecharCarrinho = document.querySelector('#fechar-carrinho');
    const carrinhoItens = document.querySelector('#carrinho-itens');
    let carrinho = [];

    // Functionality for selecting plans
    const planos = document.querySelectorAll('.card-plano');

    planos.forEach(plano => {
        plano.addEventListener('click', () => {
            // Limpar o carrinho antes de adicionar um novo plano
            carrinho = [];

            const planoSelecionado = {
                nome: plano.querySelector('.plano-title').innerText,
                preco: parseFloat(plano.querySelector('.plano-price').innerText.replace('A partir de R$', '').replace(',', '.')), // Corrigir a extração do preço
                quantidade: 1,
                link: '' // Adicione um atributo para armazenar o link do plano
            };

            // Defina o link de acordo com o plano selecionado
            if (planoSelecionado.nome === 'Plano Básico') {
                planoSelecionado.link = 'https://mpago.la/2aiC89Z';
            } else if (planoSelecionado.nome === 'Plano Intermediário') {
                planoSelecionado.link = 'https://mpago.la/2dQQcjP';
            } else if (planoSelecionado.nome === 'Plano Premium') {
                planoSelecionado.link = 'https://mpago.la/328Pdft';
            }

            // Adicionar o plano selecionado ao carrinho
            carrinho.push(planoSelecionado);

            // Atualizar o carrinho
            atualizarCarrinho();
        });
    });

    // Function to update the shopping cart
function atualizarCarrinho() {
    carrinhoItens.innerHTML = '';
    let total = 0;

    carrinho.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('carrinho-item');
        div.innerHTML = `<img src="/assets/img-planos-all.png" alt="Imagem do Plano ${item.nome}" class="plano-imagem">${item.nome} - R$ ${item.preco.toFixed(2)} - Quantidade: ${item.quantidade}`;
        carrinhoItens.appendChild(div);
        total += item.preco * item.quantidade;
    });

    document.querySelector('#carrinho-total').innerText = `Total: R$ ${total.toFixed(2)}`;

    // Update the cart count
    const cartCount = document.querySelector('.cart-count');
    cartCount.innerText = carrinho.length;

    // Add smooth effect to open and close the cart
    carrinhoModal.classList.remove('fechado');
    carrinhoModal.classList.add('aberto');
}


    // Click event for the shopping cart icon
    carrinhoIcone.addEventListener('click', () => {
        carrinhoModal.classList.remove('fechado');
        carrinhoModal.classList.add('aberto');
    });

    // Click event to close the shopping cart
    fecharCarrinho.addEventListener('click', () => {
        carrinhoModal.classList.remove('aberto');
        carrinhoModal.classList.add('fechado');
    });

    // Button to remove items from the cart
    const removerItemCarrinho = document.querySelector('#remover-item-carrinho');

    removerItemCarrinho.addEventListener('click', () => {
        // Limpar o carrinho
        carrinho = [];

        // Update the cart
        atualizarCarrinho();
    });

    // Adicionar funcionalidade para os botões "Finalizar Compra"
    const botaoFinalizarCompra = document.querySelector('#finalizar-compra');

    botaoFinalizarCompra.addEventListener('click', () => {
        // Verificar se há um plano selecionado
        if (carrinho.length > 0) {
            // Redirecionar para o link do plano selecionado
            window.location.href = carrinho[0].link;
        } else {
            alert('Selecione um plano antes de finalizar a compra.');
        }
    });

    // Redirect to the Ethan Technology website
    const linkSite = document.getElementById("linkSite");
    linkSite.addEventListener("click", function(event) {
        event.preventDefault();
        window.open("https://marcosdev-liart.vercel.app", "_blank");
    });
    // Função para exibir o formulário de contato
    function exibirFormularioContato() {
        const contactFormContainer = document.querySelector('.contact-form-container');
        contactFormContainer.style.display = 'block';
    }

    // Adicionar evento de clique ao botão "Contatar Agora"
    const contatarAgoraButton = document.getElementById('chamar-form');
    contatarAgoraButton.addEventListener('click', exibirFormularioContato);
    const closeFormButton = document.getElementById('closeForm');
    const contactFormContainer = document.querySelector('.contact-form-container');

    closeFormButton.addEventListener('click', function() {
        contactFormContainer.style.display = 'none';
    });
});
