using System;
using ExemplosFundamentos.Models;

namespace ExemplosFundamentos
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Inicio da Main");

            Pessoa p1 = new Pessoa();

            p1.Nome = "Luccas";
            p1.Idade = 24;
            p1.Apresentar();

            DateTime data = DateTime.Now;
            Console.WriteLine(data.ToString("dd/MM/yyyy HH:mm"));

            int a = 10;

            Console.WriteLine("Fim da Main");
        }
    }
}
