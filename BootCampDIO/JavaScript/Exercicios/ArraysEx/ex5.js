(function () {

    let lista = [2, 7, 3, 8, 10, 4];
    Recuperacao(lista);

    
})();

function Recuperacao(array) {
    array.forEach(element => {
        if(element < 5) {
            console.log(`Nota ${element}, Recuperacao`);
        } else {
            console.log(`Nota ${element}, Aprovado`);
        }
    });

    
}