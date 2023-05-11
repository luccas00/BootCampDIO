using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExemplosFundamentos.Models
{
    public class Pessoa
    {
        public string Nome { get; set; }
        public int Idade { get; set; }

        public double Peso { get; set; }

        public Pessoa(string nome)
        {
            this.Nome = nome;
        }
        public void Apresentar()
        {
            Console.WriteLine($"Ola, meu nome e {Nome}, e tenho {Idade} anos");
        }

    }
}