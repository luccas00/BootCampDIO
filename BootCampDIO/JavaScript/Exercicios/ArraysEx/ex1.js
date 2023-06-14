(function () {

    let number = 3;
    Tabuada(number);
    Tabuada(7);

})();

function Tabuada(number) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${i} x ${number} = ${i*number}`);
    }
}