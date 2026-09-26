// Элементы модального окна и управления им
const orderDialog = document.getElementById('order-dialog');
const orderButtons = document.querySelectorAll('.product-card__button');
const closeDialogButton = document.getElementById('close-order-dialog');
const selectedProductInput = document.getElementById('selected-product');

// Элементы формы и вывода уведомления
const orderForm = document.getElementById('order-form');
const successMessage = document.getElementById('success-message');

// Открытие модального окна при клике на «Заказать»
orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.product;
    selectedProductInput.value = productName;
    orderDialog.showModal();
  });
});

// Закрытие модального окна по кнопке «Закрыть»
closeDialogButton.addEventListener('click', () => {
  orderDialog.close();
});

// Обработка отправки формы и валидация
orderForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Сброс предыдущих ошибок
  const formElements = Array.from(orderForm.elements);
  formElements.forEach((element) => {
    if (element.willValidate) {
      element.removeAttribute('aria-invalid');
    }
  });

  // Проверка встроенных HTML-ограничений
  if (!orderForm.checkValidity()) {
    formElements.forEach((element) => {
      if (element.willValidate && !element.checkValidity()) {
        element.setAttribute('aria-invalid', 'true');
      }
    });
    orderForm.reportValidity();
    return;
  }

  // Действия при успешной валидации
  successMessage.hidden = false;
  orderForm.reset();
  orderDialog.close();
});