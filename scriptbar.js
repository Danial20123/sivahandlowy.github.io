function openNav() {
    document.getElementById("mySidebar").classList.add("open");
    document.getElementById("overlay").style.display = "block";
    document.body.classList.add("sidebar-open"); // Add this line
}

function closeNav() {
    document.getElementById("mySidebar").classList.remove("open");
    document.getElementById("overlay").style.display = "none";
    document.body.classList.remove("sidebar-open"); // Add this line
}
