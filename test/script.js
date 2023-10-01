document.getElementById("order-form").addEventListener("submit", function (event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var order = document.getElementById("order").value;

    if (name === "" || email === "" || order === "") {
        alert("Please fill in all required fields.");
        event.preventDefault(); // Prevent form submission
    }
});
