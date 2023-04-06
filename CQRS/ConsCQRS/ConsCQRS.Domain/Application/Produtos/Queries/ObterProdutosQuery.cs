using ConsCQRS.Domain.Models;
using MediatR;

namespace ConsCQRS.Domain.Application.Produtos.Queries
{
    public class ObterProdutosQuery : IRequest<IEnumerable<Produto>>
    {
        
    }
}