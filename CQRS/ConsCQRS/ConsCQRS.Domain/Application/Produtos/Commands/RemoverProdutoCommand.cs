using ConsCQRS.Domain.Models;
using MediatR;

namespace ConsCQRS.Domain.Application.Produtos.Commands
{
    public class RemoverProdutoCommand : IRequest<Produto>
    {
        public Guid Id { get; private set; }

        public RemoverProdutoCommand(Guid id)
        {
            Id = id;
        }
    }
}