function Converter() {
  const valorElemento = document.getElementById("valor");
  let valor = valorElemento.value;
  let valorEmDolar = parseFloat(valor);
  const convertendoReal = valorEmDolar * 5;

  // parte que faz a colocação do texto
  const elementoValorConvertido = document.getElementById("valorConvertido");
  const valorConvertido = " sua conversão resultou em R$ " + convertendoReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function converterParaPesoMexico() {
  const valorElemento = document.getElementById("valorMexicano");
  const valor = valorElemento.value;
  const valorEmReal = parseFloat(valor);
  const valorDoPeso = 4.18;
  let apatandoValorDoPeso = valorDoPeso;
  const convertendoReal = valorEmReal * apatandoValorDoPeso;
  const sóColocandoCasaDecimal = convertendoReal.toFixed(2);

  // parte que faz a colocação do texto
  const elementoValorConvertido = document.getElementById(
    "valorConvertidoPesoMexicano"
  );
  const valorConvertido =
    " sua conversão resultou em Mex$ " + sóColocandoCasaDecimal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
