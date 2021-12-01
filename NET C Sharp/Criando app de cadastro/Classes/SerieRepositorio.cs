using System;
using System.Collections.Generic;
using Series.Interface;

namespace Seies.Classes
{
    public class SerieRepositorio : IRepositorio<Serie>
    {
       private List<Series> listaSerie = new List<Series>();
       public void Atualiza(int id, Serie objeto)
       {
           listaSerie[id] = objeto;

       }
       public void Exclui(int id)
       {
           listaSerie[id].Exclui();
           
       }
       public void Insere(Serie objeto)
       {
           listaSerie.Add(objeto);
           
       }
       public List<Serie> Lista()
       {
         return listaSerie;
           
       }
       public int ProximoId()
       {
           return listaSerie.Count;
       }
       public Series RetornaProId(int id)
       {
           return listaSerie[id];
       }
    }
}