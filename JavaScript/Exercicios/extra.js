(function () {
    console.log('Inicio do Main');

    Head();

    const n = 5;
    console.log('Fatorial de ' + n + ': ' + Fatorial(n));

    console.log('Fim do Main');
})();

function Head() {
    console.log('Ola Mundo');
}

function Fatorial(n) {
    
    if (n <= 1) {
        return 1;
    } else {
        return Fatorial(n - 1) * n;
    }

}