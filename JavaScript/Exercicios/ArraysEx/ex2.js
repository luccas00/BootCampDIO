//Main
// (function () {

//     let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//     NumerosPar(array);

// })();

function NumerosPar(array) {
    array.forEach(element => {
        if(element % 2 == 0) {
            console.log(element);
        }
    });
}

module.exports = { NumerosPar };