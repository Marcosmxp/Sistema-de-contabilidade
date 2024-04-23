// Capturando o botão do menu e os links do menu
const menuButton = document.getElementById('menuButton');
const navLinks = document.querySelector('.nav-links');

// Adicionando um evento de clique ao botão do menu
menuButton.addEventListener('click', function() {
    // Alternando a classe 'active' para os links do menu
    navLinks.classList.toggle('active');
});
