
let notas = [];

notas.push(7.8);
notas.push(8.3);
notas.push(9.4);

let soma = 0;
notas.forEach(element => {
    soma += element;
});

media = soma/notas.length;

console.log(media);