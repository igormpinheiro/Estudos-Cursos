using ConsCQRS.Domain.Models.Base;

namespace ConsCQRS.Domain.Models
{
    public class Produto : Entity
    {
        public Produto(string nome, decimal preco, Categoria categoria)
        {
            Nome = nome;
            Preco = preco;
            Ativo = false;
            CategoriaId = categoria.Id;
            Categoria = categoria;
        }
        public string Nome { get; set; }
        public decimal Preco { get; set; }
        public bool Ativo { get; set; }
        public Guid CategoriaId { get; set; }
        public Categoria Categoria { get; set; }
    }
}