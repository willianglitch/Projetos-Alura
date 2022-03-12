const númeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  const elementoResultado = document.getElementById("resultado");
  // parseInt porque ele não irar ser um número decimal
  const chute = parseInt(document.getElementById("valor").value);

  const elementoDica = document.getElementById("resultadoDica");

  // criando uma condicional em relação ao número
  if (chute == númeroSecreto) {
    elementoResultado.innerHTML = " Você acertou ";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = " Deve se colocar um valor entre 0 a 10 ";
  } else {
    elementoResultado.innerHTML =
      " Você errou o numero secreto era :  " + númeroSecreto;
  }

  // Dica ;
  if (númeroSecreto < 6) {
    elementoDica.innerHTML = " Ó numero secreto está entre 0 e 5 ";
  } else if (chute > 10 || chute < 0) {
    elementoDica.innerHTML = " tente novamente ";
  } else {
    elementoDica.innerHTML = " Ó numero secreto está entre 5 e 10 ";
  }
}
