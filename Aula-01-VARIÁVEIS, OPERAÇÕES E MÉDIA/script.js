
function calcularMédia(){
  // trazendo os valores para dentro da função
  const nota01 = parseFloat(document.getElementById("nota1").value);
  const nota02 = parseFloat(document.getElementById("nota2").value);
  const nota03 = parseFloat(document.getElementById("nota3").value);
  const nota04 = parseFloat(document.getElementById("nota4").value);
  
  const pegandoResultado = document.getElementById("resultado")
  
  // fazendo o calculor da média
  const calculandoMédia = (nota01 + nota02 + nota03 + nota04 ) /4
  const média = calculandoMédia.toFixed(1)
  
  if (calculandoMédia >= 7 ){
    pegandoResultado.innerHTML = " Você passou parabéns , sua média foi : " + média ;
  }
  else if (calculandoMédia > 10 || calculandoMédia < 0 ){
    pegandoResultado.innerHTML =  " coloque um número decimal entre 0 a 10 " ;
  }
  else{
    pegandoResultado.innerHTML = " tente novamente no próximo semestre , sua média foi : " + média ;
  }
  
}