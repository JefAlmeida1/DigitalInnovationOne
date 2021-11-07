using System;
using System.Collections.Generic;
using Series.Interface;

namespace Seies.Classes
{
    public class SerieRepositorio : IRepositorio<Serie>
    {
       private List<Series> listaSerie = new List<Series>();
       public void Atualiza(int id, Serie entidade)
       {
           throw new NotImplementedException();

       }
       public void Exclui(int id)
       {
           throw new NotImplementedException();
           
       }
       public void Insere(Serie entidade)
       {
           throw new NotImplementedException();
           
       }
       public List<Serie> Lista()
       {
           throw new NotImplementedException();
           
       }
    }
}