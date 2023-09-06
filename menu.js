document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input[data-price]");

  function updateTotal() {
    let total = 0;
    inputs.forEach(function (input) {
      const quantity = parseInt(input.value) || 0;
      const price = parseFloat(input.getAttribute("data-price")) || 0;
      total += quantity * price;
    });

    document.getElementById("total").value = total.toFixed(2) + " zł";
  }

  inputs.forEach(function (input) {
    input.addEventListener("input", updateTotal);
  });
});



