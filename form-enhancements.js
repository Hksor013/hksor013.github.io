/* === Project 2: TUTORIAL 7 – Web Forms Enhancements === */

// Project 2: Show/hide delivery address field
document.addEventListener('DOMContentLoaded', function () {
  const deliveryRadios = document.querySelectorAll('input[name="delivery"]');
  const addressLabel = document.getElementById('address-label');
  const addressField = document.getElementById('address');

  deliveryRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === 'delivery' && radio.checked) {
        addressLabel.style.display = 'block';
        addressField.style.display = 'block';
        addressField.required = true;
      } else {
        addressLabel.style.display = 'none';
        addressField.style.display = 'none';
        addressField.required = false;
      }
    });
  });
});