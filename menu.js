const quantityInputs = document.querySelectorAll('input[type="number"]');
  
  // Calculate and update the total price
  function updateTotalPrice() {
    let totalPrice = 0;
    
    quantityInputs.forEach(input => {
      const dishPrice = parseFloat(input.getAttribute('data-price'));
      const quantity = parseInt(input.value) || 0; // Use 0 if value is not a number
      totalPrice += dishPrice * quantity;
    });
    
    document.getElementById('total-price').textContent = `Total Price: ${totalPrice} zl`;
  }
  
  // Attach event listeners to quantity inputs
  quantityInputs.forEach(input => {
    input.addEventListener('input', () => {
      updateTotalPrice();
    });
  });

  document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});
