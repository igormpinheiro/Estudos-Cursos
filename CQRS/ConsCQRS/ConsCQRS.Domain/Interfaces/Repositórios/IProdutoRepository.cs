using ConsCQRS.Domain.Models;

namespace ConsCQRS.Domain.Interfaces.Repositórios
{
    public interface IProdutoRepository
    {
        Task<Produto> Add(Produto produto);

        Task Remove(Produto produto);

        Task<Produto> Update(Produto produto);

        Task<Produto> ObterPorId(Guid id);

        Task<IEnumerable<Produto>> ObterTodos();
    }
}