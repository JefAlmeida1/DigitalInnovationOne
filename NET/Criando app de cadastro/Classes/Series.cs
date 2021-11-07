namespace Series
{
    public class Series : EntidadeBase
    {
        private Genero genero {get; set; }
        private string Titulo {get; set; }
        private string Descricao {get; set; }
        private int Ano {get; set; }
        private bool Exclui {get; set;}

        public Series(int id, Genero genero, string titulo, string descricao, int ano)
        {
            this.Id = id;
            this.genero = genero;
            this.Titulo = titulo;
            this.Descricao = descricao;
            this.Ano = ano;
            this.Exclui = false;
        }

        public override string ToString()
        {
            string retorno = "";
            retorno += "Genero: " + this.genero + Environment.NewLine;
            retorno += "Titulo: " + this.genero + Environment.NewLine;
            retorno += "Descricao: " + this.genero + Environment.NewLine;
            retorno += "Ano de Inicio: " + this.genero + Environment.NewLine;
            retorno += "Excluido: "+ this.Exclui;
            return retorno;
        }
        public string retornaTitulo()
        {
            return this.Titulo;
        }
        public int retornaId()
        {
            return this.Id;
        }
        public voide Exclui()
        {
            this.Excluido = true;
        }
    }

}