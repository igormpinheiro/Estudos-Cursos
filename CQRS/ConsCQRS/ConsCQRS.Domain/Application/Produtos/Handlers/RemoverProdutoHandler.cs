using ConsCQRS.Domain.Application.Produtos.Commands;
using ConsCQRS.Domain.Interfaces.Repositórios;
using ConsCQRS.Domain.Models;
using MediatR;

namespace ConsCQRS.Domain.Application.Produtos.Handlers
{
    public class RemoverProdutoHandler : IRequestHandler<RemoverProdutoCommand, Produto>
    {
        private readonly IProdutoRepository _rep;

        public RemoverProdutoHandler(IProdutoRepository produtoRepository)
        {
            _rep = produtoRepository;
        }

        public async Task<Produto> Handle(RemoverProdutoCommand request, CancellationToken cancellationToken)
        {
            var produto = await _rep.ObterPorId(request.Id);
            if (produto == null)
                throw new Exception("Produto não encontrado");
            await _rep.Remove(produto);
            return produto;
        }
    }
}