function validateForm() {
 
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let mesazhi = document.getElementById("mesazhi");
  mesazhi.innerHTML = "";

  if (name.length < 3) {
    mesazhi.innerHTML = "<div class='alert alert-warning'>Emri duhet të jetë së paku 3 karaktere.</div>";
    return;
  }
  if (!email.includes("@")) {
    mesazhi.innerHTML = "<div class='alert alert-warning'>Email-i duhet të përmbajë '@'.</div>";
    return;
  }
  if (message !== message) {
    mesazhi.innerHTML = "<div class='alert alert-danger'>Fjalëkalimet nuk përputhen.</div>";
    return;
  }

  mesazhi.innerHTML = "<div class='alert alert-success'>Forma u dërgua me sukses!</div>";
}