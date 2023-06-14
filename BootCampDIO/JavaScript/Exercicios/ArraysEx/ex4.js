(function () {

    let array = [];
    PreenchePar(array);
    array.forEach(element => {
        console.log(element);
    });

})();

function PreenchePar(array) {
    for(let i = 10; i <= 50; i++) {
        if(i % 2 == 0) {
            array.push(i);
        }
    }
}