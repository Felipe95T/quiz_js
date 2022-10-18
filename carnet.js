function register() {
  
    let user = {
      name: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      Edad: document.getElementById("age").value,
      DocumentoDeIdentidad: document.getElementById("documento").value,
      Cargo: document.getElementById("cargo").value,
      RH: document.getElementById("blood").value,
      Telefono: document.getElementById("telephon").value,
    };
  
    console.log(user);
    return;
  }
  