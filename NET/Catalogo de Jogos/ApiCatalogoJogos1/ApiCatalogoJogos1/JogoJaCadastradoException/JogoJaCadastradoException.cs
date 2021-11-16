using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiCatalogoJogos1.JogoJaCadastradoException
{
    public class JogoJaCadastradoException : Exception
    {
        public JogoJaCadastradoException() 
        
            : base("Este jogo já está cadastrado")
                { }
        
    }
}
