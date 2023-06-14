(function () {
    console.log('Inicio do Main');

    let peso = 63.5;
    let altura = 1.77;
    Imc(peso, altura);

    console.log('Fim do Main');
})();

function Imc(peso, altura) {
    let imc = peso / Math.pow(altura, altura);
    console.log('IMC: ' + imc);
    if(imc < 18.5)
    {
        console.log('Abaixo do peso');
    } else if(imc >= 18.5 && imc < 25)
    {
        console.log('Peso normal');
    } else if(imc >= 25 && imc < 30)
    {
        console.log('Acima do peso');
    } else if(imc >= 30 && imc < 40)
    {
        console.log('Obeso');
    } else if(imc >= 40)
    {
        console.log('Obesidade Grave');
    }
}