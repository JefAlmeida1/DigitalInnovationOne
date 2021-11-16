using ApiCatalogoJogos1.JogoJaCadastradoException;
using ApiCatalogoJogos1.Services;
using ApiCatalogoJogos1.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ApiCatalogoJogos1.Controllers.V1
{
    [Route("api/[controller]")]
    [ApiController]
    public class JogosController : ControllerBase
    {
        private readonly IJogoServices _jogoServices;

        public JogosController(IJogoServices jogoServices) 
        {
            _jogoServices = jogoServices;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<JogoViewModel>>> Obter([FromQuery, Range(1, int.MaxValue)] int pagina = 1, [FromQuery, Range(1, 50)] int quantidade = 5) 
        {
            var jogos = await _jogoServices.Obter(pagina, quantidade);
            if (jogos.Count() == 0)
                return NoContent();
            return Ok(jogos);
        }
        
            [HttpGet("{idJogo:guid}")]
        public async Task<ActionResult<JogoViewModel>> Obter([FromRoute] Guid idJogo)
        {   
            var jogos = await _jogoServices.Obter(idJogo);
            
            if (jogos == null)
                return NoContent();

            return Ok(jogos);
        }

        [HttpGet("(IdJogo:guid)")]
        public async Task<ActionResult<List<JogoViewModel>>> Obter(Guid idJogo)


            [HttpPost]
        public async Task<ActionResult<JogoViewModel>> InserirJogo([FromBody] JogoInputModel jogoInputModel)
        {
            try
            {
                var jogo = await _jogoServices.Inserir(jogoInputModel);

                return Ok(jogo);
            }
            catch (JogoJaCadastradoException)
            {
                return UnprocessableEntity("Já existe um jogo com este nome para esta produtora");
            }
        }

        [HttpPut("idJogo:guid)")]
        public async Task<ActionResult> AtualizarJogo([FromRoute] Guid idJogo, [FromBody] JogoInputModel jogoInputModel)
        {
            try
            {
                await _jogoServices.Atualizar(idJogo, jogoInputModel);

                return Ok();
            }
            catch (JogoNaoCadastradoException)
            {
                return NotFound("Não existe este jogo");
            }
        }

        [HttpPatch("idJogo:guid)/preco/{preco:double}")]
        public async Task<ActionResult> AtualizarJogo([FromRoute] Guid idJogo, [FromRoute] double preco)
        {
            try
            {
                await _jogoServices.Atualizar(idJogo, preco);

                return Ok();
            }
            catch (JogoNaoCadastradoException ex)
            {
                return NotFound("Não existe este jogo");
            }
        }

        [HttpDelete("(IdJogo:guid)")]
        public async Task<ActionResult> ApagarJogo([FromRoute] Guid idJogo)
        {
            try
            {
                await _jogoServices.Remover(idJogo);

                return Ok();
            }
            catch (JogoNaoCadastradoException)
            {
                return NotFound("Não existe este jogo");
            }
        }
    }
}
