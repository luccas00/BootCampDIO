
class Carro {

    _marca;
    _modelo;
    _cor;
    _kmPorLitro;
    _proprietario;
    _placa;
    _chassi;
            
    constructor(proprietario, placa, chassi) {
        this._proprietario = proprietario;
        this._chassi = chassi;
        this._placa = placa;
        this._cor = "Branco";
    }

    Info() {
        console.log(`\nProprietario: ${this._proprietario}`);
        console.log(`Marca: ${this._marca}`);
        console.log(`Modelo: ${this._modelo}`);
        console.log(`Cor: ${this._cor}`);
        console.log(`Km p/ Litro: ${this._kmPorLitro}`);
        console.log(`Placa: ${this._placa}`);
        console.log(`Chasshi: ${this._chassi}\n`);
    }

    SetCor(cor) {
        this._cor = cor;
    }

    SetModelo(modelo) {
        this._modelo = modelo;
    }

    SetMarca(marca) {
        this._marca = marca;
    }

    SetKmPorLitro(kmPorLitro) {
        this._kmPorLitro = kmPorLitro;
    }

}

//Main
(function () {

    let c1 = new Carro("Luccas", "AHX-3245", "AH61728ND81-Z12");
    c1.Info();
    c1.SetCor("Preto");
    c1.SetKmPorLitro(8);
    c1.SetMarca("Ferrari");
    c1.SetModelo("F50");
    c1.Info();
    
})();