var dropdown = document.querySelector(".dropdown");
dropdown.addEventListener("click", function () {
  var dropdownContenT = document.querySelector(".dropdown-content");
  if (dropdownContenT.style.display === "block") {
    dropdownContenT.style.display = "none";
  } else {
    dropdownContenT.style.display = "block";
  }
});

function mensagemEnvio() {
  alert("E-mail enviado para fazer a redefinição da senha!");
  const campoUsuario = document.querySelector(".input-field-text");

  campoUsuario.value = "";
}

function voltarParaPagina(){
  window.location.href = "login.html";
}
const buttonBackButton = document.getElementById("buttonBack");

        // Mostrar o botão quando o usuário rolar a página
        window.onscroll = function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
              buttonBackButton.style.display = "block";
            } else {
              buttonBackButton.style.display = "none";
            }
        };

        // Adicionar funcionalidade ao botão
        buttonBackButton.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Rolagem suave
            });
        });