
class Pessoa {

    _nome;
    _peso;
    _altura;
    _cpf;
    _nascimento;

    constructor(nome, peso, altura, cpf, nascimento) {
        this._altura = altura;
        this._cpf = cpf;
        this._nascimento = nascimento;
        this._nome = nome;
        this._peso = peso;
    }

    ToString() {
        console.log(`\nNome: ${this._nome}`);
        console.log(`CPF: ${this._cpf}`);
        console.log(`Nascimento: ${this._nascimento}`);
        console.log(`Peso: ${this._peso}`);
        console.log(`Altura: ${this._altura}`);
    }

    Imc() {
        let imc = this._peso / Math.pow(this._altura, 2);
        console.log('\nIMC: ');
        if (imc < 18.5) {
            console.log('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            console.log('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            console.log('Acima do peso');
        } else if (imc >= 30 && imc < 40) {
            console.log('Obeso');
        } else {
            console.log('Obsedidade Grave');
        }
    }

}

(function () {

    let p1 = new Pessoa("Luccas", 65, 1.78, "999", "17/11/1998");
    p1.Imc();
    p1.ToString();
    
})();