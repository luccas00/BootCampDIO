(function () {
    console.log('Inicio do Main');

    let option = 2;
    let value = 89.90;
    let finalValue;

    switch (option) {
        case 1:
            console.log('A vista Debito, 10% de desconto');
            finalValue = value - (value*0.1);
            console.log('Valor inicial R$ ' + value);
            console.log('Valor a ser pago R$: ' + finalValue.toFixed(2));
            break;

        case 2:
            console.log('A vista Dinheiro ou Pix, 15% de desconto');
            finalValue = value - (value*0.15);
            console.log('Valor inicial R$ ' + value);
            console.log('Valor a ser pago R$: ' + finalValue.toFixed(2));
            break;

        case 3:
            console.log('Em duas vezes, preco da etiqueta sem juros');
            finalValue = value;
            console.log('Valor inicial R$ ' + value);
            console.log('Valor a ser pago R$: ' + finalValue);
            break;

        case 4:
            console.log('Acima de duas vezes, juros de 10%');
            finalValue = value + (value*0.1);
            console.log('Valor inicial R$ ' + value);
            console.log('Valor a ser pago R$: ' + finalValue.toFixed(2));
            break;

        default:
            console.log("Option Invalid");
            break;
    }

    console.log('Fim do Main');
})();