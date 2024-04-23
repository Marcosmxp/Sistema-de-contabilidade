// Função para validar o formato do email
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Função para validar o formato do número de telefone
function isValidPhoneNumber(phone) {
    const phonePattern = /^(\+\d{1,3}\s?)?(\d{2,3})?(\s\d{3,4}){2,3}$/;
    return phonePattern.test(phone);
}

// Função para validar o formulário de contato
function validarFormularioContato(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Verifica se o evento de clique ocorreu no botão Fechar do formulário
    if (event.target.classList.contains('close-form')) {
        const successPopup = document.getElementById('successPopup');
        successPopup.style.display = 'none';
        return; // Não executa o restante da validação se o botão Fechar for clicado
    }

    // Obtém os valores dos campos do formulário de contato
    const name = document.getElementById('name').value;
    const companyName = document.getElementById('company_name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const serviceType = document.getElementById('service_type').value;
    const message = document.getElementById('message').value;

    // Validação dos campos do formulário de contato
    if (name.trim() === '') {
        alert('Por favor, insira seu nome.');
        return;
    }

    if (companyName.trim() === '') {
        alert('Por favor, insira o nome da empresa.');
        return;
    }

    if (email.trim() === '' || !isValidEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    if (phone.trim() === '' || !isValidPhoneNumber(phone)) {
        alert('Por favor, insira um número de telefone válido.');
        return;
    }

    if (serviceType === '') {
        alert('Por favor, selecione um tipo de serviço.');
        return;
    }

    if (message.trim() === '') {
        alert('Por favor, insira sua mensagem.');
        return;
    }

    // Se todos os campos forem válidos, exibe o popup de sucesso
    const successPopup = document.getElementById('successPopup');
    successPopup.style.display = 'block';

    // Recarrega a página após 3 segundos
    setTimeout(function() {
        location.reload();
    }, 3000);
}

// Adicionar evento de submit ao formulário de contato
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', validarFormularioContato);

// Adicionar evento de clique ao botão Fechar do popup de sucesso
const closeSuccessPopup = document.querySelector('.contact-form-success .close-form');
closeSuccessPopup.addEventListener('click', function() {
    const successPopup = document.getElementById('successPopup');
    successPopup.style.display = 'none';
});
