document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('order-dialog');
  const form = document.getElementById('order-form');
  const productInput = document.getElementById('order-product');
  const closeButton = document.getElementById('close-order-dialog');

  // Селектор по БЭМ-классу
  const orderButtons = document.querySelectorAll('.product-card__button');

  orderButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.getAttribute('data-product');
      if (productInput) productInput.value = productName;
      if (dialog) dialog.showModal();
    });
  });

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