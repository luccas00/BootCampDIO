
class Ponto {

    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    position() {
        console.log(`Coordenadas\nX: ${this.x}\nY: ${this.y}`);  
    }

}

//Main
(function () {

    let a = new Ponto(3, 2);
    a.position();

    let b = new Ponto(4, 5);
    b.position();

    compararPonto(a, b);
    
})();

function compararPonto(pontoA, pontoB) {

    if(pontoA.x == pontoB.x)
    {
        if(pontoA.y == pontoB.y)
        {
            console.log(`Pontos iguais ${pontoA.position} ${pontoB.position}`);
            return;
        }
    }

    console.log(`Pontos diferentes`);
    return;

}