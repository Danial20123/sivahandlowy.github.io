function redirectPage() {
    var input = document.getElementById("searchInput").value;
    
    if (input === "SHS/QMS/PL/0001 9001") {
      window.location.href = "certificates/Document_2023-02-13_122846.pdf";
    } 
    else if (input === "SHS/QMS/PK-2301 9001") {
      window.location.href = "certificates/nn9001.pdf";
    } 
    else if (input === "SHS/QMS/PL/0001 13485") {
      window.location.href = "certificates/Document_2023-02-13_122728.pdf";
    } 

    else if (input === "SHS/QMS/PK-23001 13485") {
        window.location.href = "certificates/nn13485.pdf";
      } 
      else if (input === "SHS/QMS/PL/0001 ce") {
        window.location.href = "certificates/Document_2023-02-13_122512.pdf";
      } 

      else if (input === "SHS/QMS/PK-23001 ce") {
        window.location.href = "certificates/nnec.pdf";
      }

      else if (input === "SHS/CE/PK-23002 ce") {
        window.location.href = "certificates/sivaahndlowy certificate CE-1.pdf";
      }
    else {
      alert("Incorrect certificate: " + input);
    }
  }