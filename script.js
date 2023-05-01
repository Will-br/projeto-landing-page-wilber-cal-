// seleciona todos os botões dos cards
const cardButtons = document.querySelectorAll('.card-button');

// adiciona um evento de clique em cada botão
cardButtons.forEach(button => {
    button.addEventListener('click', () => {
        // encontra o card-pai do botão clicado
        const card = button.closest('.card');
        // encontra o título e a descrição do card
        const title = card.querySelector('.card-title').textContent;
        const description = card.querySelector('.card-description').textContent;
        // exibe um alerta com o título e a descrição do card
        alert(`${title}: ${description}`);
    });
});

// form

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Reset errors
    nameError.innerHTML = '';
    emailError.innerHTML = '';
    messageError.innerHTML = '';

    // Get values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Validate inputs
    if (name === '') {
        nameError.innerHTML = 'Por favor, insira um nome.';
        nameInput.focus();
        return false;
    }

    if (email === '') {
        emailError.innerHTML = 'Por favor, insira um e-mail.';
        emailInput.focus();
        return false;
    } else if (!isEmailValid(email)) {
        emailError.innerHTML = 'Por favor, insira um e-mail';
        emailError.innerHTML = 'Por favor, insira um e-mail válido.';
        emailInput.focus();
        return false;
    }

    if (message === '') {
        messageError.innerHTML = 'Por favor, insira uma mensagem.';
        messageInput.focus();
        return false;
    }

    // Submit form
    form.submit();
});

// Email validation function
function isEmailValid(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}