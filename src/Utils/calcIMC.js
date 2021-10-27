
const calcIMC = (weigh, height) => {

  const squaredHeight = Math.pow(height,2)
  const IMC = weigh/squaredHeight

    if(IMC < 18.5) {
      return(
        <div>Peso Baixo</div>
      )
    } else if(IMC >= 18.5 || IMC <= 24.9 ) {
      return(
        <div>Peso Ideal</div>
      )
    } else if(IMC >= 25 || IMC <= 29.9) {
      return(
        <div>Acima do Peso</div>
      )
    } else if( IMC >= 30 || IMC <= 34.9) {
      return(
        <div>Obesidade Tipo 1</div>
      )
    } else if( IMC >= 35 || IMC <= 39.9) {
      return(
        <div>Obesidade Tipo 2</div>
      )
    }  else if(IMC > 40) {
      return(
        <div>Obesidade Tipo 3</div>
      )
    }
};

export default calcIMC;
