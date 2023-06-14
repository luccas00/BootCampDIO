using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Desafio_de_Projeto_DIO.Componentes
{
    public class Suite
    {
        internal string _tipoSuite { get; private set; }
        internal int _capacidade { get; private set; }
        internal decimal _valorDiaria { get; private set; }

        public Suite() { }
        public Suite(string tipoSuite, int capacidade, decimal valorDiaria)
        {
            this._capacidade = capacidade;
            this._tipoSuite = tipoSuite;
            this._valorDiaria = valorDiaria;
        }

        public void AlterarTipoSuite()
        {
            Console.WriteLine($"Tipo Atual: {_tipoSuite}");
            Console.WriteLine("Digite o novo Tipo: ");
            this._tipoSuite = Console.ReadLine();
        }

        public void AlterarValorDiaria()
        {
            Console.WriteLine($"Diaria Atual: {_valorDiaria}");
            Console.WriteLine("Digite o novo Valor R$ ");
            if(decimal.TryParse(Console.ReadLine(), out decimal value))
            {
                this._valorDiaria = value;
            } else
            {
                Console.WriteLine($"Erro ao alterar o valor verifique novamente");
            }
        }

        public void AlterarCapacidade()
        {
            Console.WriteLine($"Capacidade Atual: {_capacidade}");
            Console.WriteLine("Digite a nova capacidade: ");
            if(int.TryParse(Console.ReadLine(), out int value))
            {
                this._capacidade = value;
            } else
            {
                Console.WriteLine($"Erro ao alterar a capacidade verifique novamente");
            }
        }

        public override string ToString()
        {
            return $"Dados\nTipo de Suite: {this._tipoSuite}\nCapacidade: {this._capacidade}\nValor Diaria R$ {this._valorDiaria}";
        }

    }
}