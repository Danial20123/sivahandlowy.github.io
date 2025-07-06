function redirectPage() {
    var input = document.getElementById("searchInput").value;
    
    if (input === "SHS/QMS/PL/0001 9001") {
      window.location.href = "certificates/Document_2023-02-13_122846.pdf";
    } 
    else if (input === "SHS/QMS/PK-2301 9001") {
      window.location.href = "certificates/nn9001.pdf";
    } 
        else if (input === "SHS/QMS/PK-24002 CE") {
      window.location.href = "certificates/Reeax CE.pdf";
    }
          else if (input === "SHS/CE/PK-25001 EC") {
      window.location.href = "certificates/1-sivaahndlowy certificate CE-25.pdf";
    }

    else if (input === "SHS/CE/PK-24001 CE") {
      window.location.href = "certificates/Deft-Technik CE.pdf";
    }
                    else if (input === "SHS/QMS/PK-24001 13485") {
      window.location.href = "certificates/Certificate 13485-1.pdf";
    }
                        else if (input === "SHS/QMS/PK-24001 9001") {
      window.location.href = "certificates/Certificate 9001-1.pdf";
    }
        
    else if (input === "SHS/QMS/PL/0001 13485") {
      window.location.href = "certificates/Document_2023-02-13_122728.pdf";
    } 

    else if (input === "SHS/QMS/PK-23001 13485") {
        window.location.href = "certificates/nn13485.pdf";
      } 
      else if (input === "SHS/QMS/PL/0001 CE") {
        window.location.href = "certificates/Document_2023-02-13_122512.pdf";
      } 

      else if (input === "SHS/QMS/PK-23001 CE") {
        window.location.href = "certificates/nnec.pdf";
      }

      else if (input === "SHS/CE/PK-23002 CE") {
        window.location.href = "certificates/sivaahndlowy certificate CE-1.pdf";
      }

           else if (input === "SHS/CE/PK-23003 CE") {
        window.location.href = "certificates/BMB certificate CE-1.pdf";
      }
               else if (input === "SHS/CE/PK-23004 CE") {
        window.location.href = "certificates/4-sivaahndlowy certificate CE.pdf";
      }
       
      else if (input === "SHS/QMS/PK-24002 13485") {
        window.location.href = "certificates/Certificate 13485.pdf";
      }

else if (input === "SHS/CE/PK-25001 EC") {
        window.location.href = "certificates/1-sivaahndlowy certificate CE.pdf";
      }

    else {
      alert("This Certificate Doesnt Exist: " + input);
    }
  }
