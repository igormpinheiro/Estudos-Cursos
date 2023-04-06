using ConsCQRS.Domain.Application.Produtos.Commands;
using ConsCQRS.Domain.Interfaces.Repositórios;
using ConsCQRS.Domain.Models;
using MediatR;

namespace ConsCQRS.Domain.Application.Produtos.Handlers
{
    public class CriarProdutoHandle : IRequestHandler<CriarProdutoCommand, Produto>
    {
        private readonly IProdutoRepository _rep;

        public CriarProdutoHandle(IProdutoRepository produtoRepository)
        {
            _rep = produtoRepository;
        }

        public async Task<Produto> Handle(CriarProdutoCommand request, CancellationToken cancellationToken)
        {
            var produto = new Produto(request.Nome, request.Preco, null);
            
            return await _rep.Add(produto);
        }
    }
}