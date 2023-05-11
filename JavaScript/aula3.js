function sayMyName(name) {
    console.log('Your name is ' + name);
    return name;
}

let nome = 'Gandalf';
const nome2 = 'Saruman';
var nome3 = 'Elrond';
let aux = Math.pow(10, 2);
sayMyName(aux);

aux = sayMyName('Luccas');
sayMyName(nome);
sayMyName(nome2);
sayMyName(nome3);
sayMyName(aux);

(function temp() {
    console.log('function temp');
})();

let number = 5;
let result;

result = fat(5);
console.log(result);

function fat(n) {
    
    if (n <= 1) {
        return 1;
    } else {
        return fat(n - 1) * n;
    }

}