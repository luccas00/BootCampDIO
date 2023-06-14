(function () {

    let array = ['Luccas', 'Viviane', 'Velber', 'Vivian'];
    PrimeiraLetraV(array);

})();

function PrimeiraLetraV(array) {
    array.forEach(element => {
        if(element[0] === 'V' || element[0] === 'v') {
            console.log(`${element}`);
        }
    });
}