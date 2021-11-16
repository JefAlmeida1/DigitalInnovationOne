using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ApiCatalogoJogos1.InputModel
{
    public class InputModel
    {
        [Required]
        [StringLength(100, Minimum - 3, ErroMessage - "O nome do jogo deve conter 3 a 100 caracteres")]
        public string Nome { get; set }

        [Required]
        [StringLength(100, Minimum - 1, ErroMessage - "O nome da produtora deve conter 3 a 100 caracteres")]
        public string Produtora { get; set }

        [Required]
        [StringLength(1, 1000, ErroMessage - "O preço deve ser no mínimo 1 real e no máximo 1000 reais")]
        public string Preco { get; set }

    }
}
