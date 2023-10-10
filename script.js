// CAPTURA O ELEMENTO DE INPUT DO USERNAME
const usernameInput = document.getElementById("login-usuario");
//CAPTURA O ELEMENTO DE PARAGRAFO DE ERRO DO USERNAME
const usernameErrorText = document.getElementById("username-error")
//CAPTURE O ELEMENTO DE INPUT DE SENHA
const passwordInput = document.getElementById("login-senha")
// CAPTURE O ELEMENTO DE PARAGRAFO  DE ERRO DA SENHA
const passwordErroText = document.getElementById("password-error")

// USUARIO ERROU O USERNAME

// ADICIONE O ELEMENTO DE INPUT A CLASSE COM OS ELETILOS PRA DEIXAR ESSE INPUT VERMELHO
usernameInput.classList.add("error")
// ADICIONE  AO ELEMENTO DE PARAGRAFO  E ADCIONE A CLASSE QUE TROCA O DISPLAY NONE PARA O DISPLAY BLOCK
//PARA QUE O TEXTO FIQUE VISIVEL
usernameErrorText.classList.add("visible")

// USUARIO  ACERTOU O USERNAME E ERROU A ASENHA 

// REMOVER AS CLASSES DE ERRO E ADICIONE  A CLASSE DE ACERTO AO IMPUT E PARAGRAFO DE USERNAME
usernameInput.classList.remove("error")
usernameInput.classList.add("correct")
usernameErrorText.classList.remove("visible")

// ADICIONA AO ELEMENTO DO InPUT A CLASSE QUE DEIXA COM A COR VERMELHO
passwordInput.classList.add("error")
//ADICONA O ELEMENTO DE PARAGRAFO A CLASSE QUE DEIXA ELE VISILVEL 
passwordErroText.classList.add("visible")
