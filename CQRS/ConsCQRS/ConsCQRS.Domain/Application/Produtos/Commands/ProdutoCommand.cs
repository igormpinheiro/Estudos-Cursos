using ConsCQRS.Domain.Models;
using MediatR;

namespace ConsCQRS.Domain.Application.Produtos.Commands
{
    public abstract class ProdutoCommand : IRequest<Produto>
    {
        public string Nome { get; set; }
        public decimal Preco { get; set; }
        public bool Ativo { get; set; }
        public Guid CategoriaId { get; set; }
    }
}