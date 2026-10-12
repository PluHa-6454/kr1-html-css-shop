document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('order-dialog');
  const form = document.getElementById('order-form');
  const productText = document.getElementById('order-product');
  const productInput = document.getElementById('order-product-input');
  const closeButton = document.getElementById('close-order-dialog');

  // Селектор по БЭМ-классу
  const orderButtons = document.querySelectorAll('.product-card__button');

  // Открытие модального окна по кнопке «Заказать»
  orderButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.getAttribute('data-product');
      if (productText) productText.textContent = productName;
      if (productInput) productInput.value = productName;
      if (dialog) dialog.showModal();
    });
  });

  // Закрытие окна кликом по затемнённому фону (backdrop)
  if (dialog) {
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) dialog.close();
    });
  }

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      if (dialog) dialog.close();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Заявка успешно отправлена!');
      if (dialog) dialog.close();
      form.reset();
    });
  }
  
});