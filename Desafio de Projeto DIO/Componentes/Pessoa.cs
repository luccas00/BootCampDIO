using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Desafio_de_Projeto_DIO.Componentes
{
    public class Pessoa
    {
        private string _nome { get; }
        private string _sobrenome { get; }

        public Pessoa(string nome)
        {
            this._nome = nome;
            this._sobrenome = " ";
        }
        public Pessoa(string nome, string sobrenome)
        {
            this._nome = nome;
            this._sobrenome = sobrenome;
        }
        public override string ToString()
        {
            return $"Nome: {_nome} {_sobrenome}";
        }
        public void Apresentar()
        {
            Console.WriteLine("Meu nome: "+ _nome + " " + _sobrenome);
        }
        
    }

}
