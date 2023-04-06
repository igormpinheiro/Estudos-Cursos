using ConsCQRS.Domain.Application.Produtos.Commands;
using ConsCQRS.Domain.Interfaces.Repositórios;
using ConsCQRS.Domain.Models;
using MediatR;

namespace ConsCQRS.Domain.Application.Produtos.Handlers
{
    public class AtualizarProdutoHandler : IRequestHandler<AtualizarProdutoCommand, Produto>
    {
        private readonly IProdutoRepository _rep;

        public AtualizarProdutoHandler(IProdutoRepository produtoRepository)
        {
            _rep = produtoRepository;
        }

        public async Task<Produto> Handle(AtualizarProdutoCommand request, CancellationToken cancellationToken)
        {
            var produto = await _rep.ObterPorId(request.Id);
            produto.Nome = request.Nome;
            produto.Preco = request.Preco;
            return await _rep.Update(produto);
        }
    }
}