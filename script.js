document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Obtener los valores de los campos del formulario
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  // Validar los campos
  var isValid = true;
  
  if (name.trim() === '') {
    isValid = false;
    showError('name', 'El nombre es obligatorio');
  } else {
    removeError('name');
  }
  
  if (email.trim() === '') {
    isValid = false;
    showError('email', 'El correo electrónico es obligatorio');
  } else if (!validateEmail(email)) {
    isValid = false;
    showError('email', 'El correo electrónico no es válido');
  } else {
    removeError('email');
  }
  
  if (message.trim() === '') {
    isValid = false;
    showError('message', 'El mensaje es obligatorio');
  } else {
    removeError('message');
  }
  
  // Mostrar mensaje de éxito o error
  if (isValid) {
    showSuccessMessage(name, email, message);
    clearForm();
  } else {
    showMessage('Por favor, corrige los errores del formulario');
  }
});

function showError(fieldId, errorMessage) {
  var field = document.getElementById(fieldId);
  var errorContainer = document.createElement('span');
  errorContainer.className = 'error-message';
  errorContainer.textContent = errorMessage;
  
  field.classList.add('error');
  field.parentNode.appendChild(errorContainer);
}

function removeError(fieldId) {
  var field = document.getElementById(fieldId);
  field.classList.remove('error');
  
  var errorContainer = field.parentNode.querySelector('.error-message');
  if (errorContainer) {
    field.parentNode.removeChild(errorContainer);
  }
}

function showSuccessMessage(name, email, message) {
  var messageContainer = document.getElementById('message-container');
  
  var successMessage = document.createElement('div');
  successMessage.className = 'success-message';
  
  var nameParagraph = document.createElement('p');
  nameParagraph.textContent = 'Nombre: ' + name;
  successMessage.appendChild(nameParagraph);
  
  var emailParagraph = document.createElement('p');
  emailParagraph.textContent = 'Correo electrónico: ' + email;
  successMessage.appendChild(emailParagraph);
  
  var messageParagraph = document.createElement('p');
  messageParagraph.textContent = 'Mensaje: ' + message;
  successMessage.appendChild(messageParagraph);
  
  messageContainer.innerHTML = '';
  messageContainer.appendChild(successMessage);
}

function showMessage(message) {
  var messageContainer = document.getElementById('message-container');
  messageContainer.innerHTML = message;
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}

function validateEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
