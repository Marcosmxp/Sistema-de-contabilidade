document.addEventListener("DOMContentLoaded", function() {
    const ctaBtn = document.querySelector('.cta-btn-3');
    const formContainer = document.querySelector('.contact-form-container');
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';
    formContainer.prepend(closeBtn);

    ctaBtn.addEventListener('click', function() {
        formContainer.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        formContainer.style.display = 'none';
    });
});
