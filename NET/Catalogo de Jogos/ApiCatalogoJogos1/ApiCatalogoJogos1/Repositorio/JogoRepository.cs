using ApiCatalogoJogos1.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiCatalogoJogos1.Repositorio
{
    public class JogoRepository : IJogoRepository
    {
        private static Dictionary<Guid, Jogo> jogos = new Dictionary<Guid, Jogo>()
        {
            {Guid.Parse(""), new Jogo{ Id = Guid.Parse(""), Nome = "", Produtora = "", Preco = } },
            {Guid.Parse(""), new Jogo{ Id = Guid.Parse(""), Nome = "", Produtora = "", Preco = } },
            {Guid.Parse(""), new Jogo{ Id = Guid.Parse(""), Nome = "", Produtora = "", Preco = } },
            {Guid.Parse(""), new Jogo{ Id = Guid.Parse(""), Nome = "", Produtora = "", Preco = } },
            {Guid.Parse(""), new Jogo{ Id = Guid.Parse(""), Nome = "", Produtora = "", Preco = } },
            {Guid.Parse(""), new Jogo{ Id = Guid.Parse(""), Nome = "", Produtora = "", Preco = } }
        };

        public Task<List<Jogo>> Obter(int pagina, int quantidade)
        {
            return Task.FromResult(jogos.Values.Skip((pagina - 1) * quantidade).Take(quantidade).ToList());
        }

        public Task<Jogo> Obter(Guid id)
        {
            if (!jogos.ContainsKey(id))
                return Task.FromResult<Jogo>(null);

            return Task.FromResult(jogos[id]);
        }

        public Task<List<Jogo>> Obter(string nome, string produtora)
        {
            return Task.FromResult(jogos.Values.Where(jogo => jogo.Nome.Equals(nome) && jogo.Produtora.Equals(produtora)).ToList());
        }

        public Task<List<Jogo>> ObterSemLambda(string nome, string produtora)
        {
            var retorno = new List<Jogo>();

            foreach (var jogo in jogos.Values)
            {
                if (jogo.Nome.Equals(nome) && jogo.Produtora.Equals(produtora))
                    retorno.Add(jogo);
            }

            return Task.FromResult(retorno);
        }

        public Task Inserir(Jogo jogo)
        {
            jogos.Add(jogo.Id, jogo);
            return Task.CompletedTask;
        }

        public Task Atualizar(Jogo jogo)
        {
            jogos[jogo.Id] = jogo;
            return Task.CompletedTask;
        }

        public Task Remover(Guid id)
        {
            jogos.Remove(id);
            return Task.CompletedTask;
        }

        public void Dispose()
        {
            
        }

        Task<List<Jogo>> IJogoRepository.Obter(int pagina, int quantidade)
        {
            throw new NotImplementedException();
        }

        Task<Jogo> IJogoRepository.Obter(Guid id)
        {
            throw new NotImplementedException();
        }

        Task<List<Jogo>> IJogoRepository.Obter(string nome, string produtora)
        {
            throw new NotImplementedException();
        }

        public Task Inserir(Jogo jogo)
        {
            throw new NotImplementedException();
        }

        public Task Atualizar(Jogo jogo)
        {
            throw new NotImplementedException();
        }
    }
}
