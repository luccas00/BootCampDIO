console.log('Inicio do JS');

let gasolina;
const kmPorLitro = 12;
let distancia;

gasolina = 4.55;
distancia = 477.5;

let result = (distancia/kmPorLitro) * gasolina;
console.log("Valor da viagem R$ " + result.toFixed(2));

