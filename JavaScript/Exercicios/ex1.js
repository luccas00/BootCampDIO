console.log('Inicio do Log');

let notas = [];

notas[0] = 7;
notas[1] = 7;
notas[2] = 7.5;

const media = (notas[0]+notas[1]+notas[2])/3;

console.log('Media: ' + media.toFixed(2));

if(media < 5)
{
    console.log('Reprovado');
} else if(media >= 5 && media <= 7)
{
    console.log('Recuperacao');
} else if(media > 7)
{
    console.log('Aprovado');
}

console.log('Fim do Log');