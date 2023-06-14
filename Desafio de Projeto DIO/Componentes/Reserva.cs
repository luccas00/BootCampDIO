using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Desafio_de_Projeto_DIO.Componentes
{
    public class Reserva
    {
        public List<Pessoa> _hospedes { get; set;}
        public Suite _suite { get; set; }
        public int _diasReservados { get; set; }

        public Reserva(List<Pessoa> hospedes, int diasReservados)
        {
            this._hospedes = new List<Pessoa>();
            this._suite = new Suite();
            CadastrarHospedes(hospedes);
            this._diasReservados = diasReservados;
        }

        public Reserva(List<Pessoa> hospedes, Suite suite, int diasReservados)
        {
            this._hospedes = new List<Pessoa>();
            this._suite = new Suite();
            CadastrarHospedes(hospedes);
            this._suite = suite;
            this._diasReservados = diasReservados;
        }

        public bool CapadidadeMaxima()
        {
            if (this._hospedes == null || this._suite == null)
            {
                Console.WriteLine("Objeto Null");
                return false;
            }

            if(this._hospedes.Count == this._suite._capacidade)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public int VagasRestantes()
        {
            return this._suite._capacidade - _hospedes.Count;
        }

        public void CadastrarHospedes(List<Pessoa> hospedes)
        {
            if(CapadidadeMaxima()) 
            {
                Console.WriteLine("Quarto com capacidade maxima");
                return;
            }

            if(hospedes.Count > VagasRestantes())
            {
                Console.WriteLine("Vagas Restantes " + VagasRestantes());
                Console.WriteLine("Capacidade insuficiente");
                return;

            } else {
                this._hospedes.AddRange(hospedes);
                Console.WriteLine("Sucesso");
            }
        }

        public void CadastrarSuite(Suite suite)
        {
            this._suite = suite;
        }

        public int ObterQuantidadeHospedes()
        {
            return _hospedes.Count();
        }

        public decimal CalcularValorDiaria()
        {
            decimal valor = 0;
            valor = this._diasReservados * this._suite._valorDiaria;

            if (_diasReservados >= 10)
            {
                valor -= (valor*0.1M);
            }

            return valor;

        }

    }
}