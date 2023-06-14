(function () {

    let lista = [2, 7, 3, 8, 10, 4];
    MaiorNota(lista);

})();

function MaiorNota(array) {

    let aux = array[0];

    array.forEach(element => {
        if(element > aux) {
            aux = element;
        }
    });

    console.log(`Nota ${aux}, MaiorNota`);

}