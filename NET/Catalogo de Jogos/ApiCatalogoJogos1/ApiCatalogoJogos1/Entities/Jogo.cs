using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiCatalogoJogos1.Entities
{
    public class Jogo
    {
        public object Nome { get; internal set; }
        public object Produtora { get; internal set; }
        public Guid Id { get; internal set; }
        public object Preco { get; internal set; }

        public class JogoViewModel
        {
            public Guid Id { get; set; }
            public string Nome { get; set }
            public string Produtora { get; set }
            public double Preco { get; set }
        }
    }
}
