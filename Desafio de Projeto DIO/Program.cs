using System;
using Desafio_de_Projeto_DIO.Componentes;

Console.WriteLine("Hello, World!");

Pessoa p1 = new Pessoa("Luccas", "Carneiro");
Pessoa p2 = new Pessoa("Gandalf");
Pessoa p3 = new Pessoa("Luccas", "Carneiro");

Console.WriteLine($"{p1.ToString()}");
Console.WriteLine($"{p2.ToString()}");

Suite s2 = new Suite("Master", 10, 120.50M);
Suite s3 = new Suite("Regular", 10, 78.30M);

// Cria os modelos de hóspedes e cadastra na lista de hóspedes
List<Pessoa> hospedes = new List<Pessoa>();

hospedes.Add(p1);
hospedes.Add(p2);

// Cria uma nova reserva, passando a suíte e os hóspedes
Reserva reserva = new Reserva(hospedes ,s2, 10);
reserva.CadastrarHospedes(hospedes);

// Exibe a quantidade de hóspedes e o valor da diária
Console.WriteLine($"Hóspedes: {reserva.ObterQuantidadeHospedes()}");
Console.WriteLine($"Valor diária: {reserva.CalcularValorDiaria()}");