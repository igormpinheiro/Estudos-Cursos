using ConsCQRS.Domain.Models.Base;

namespace ConsCQRS.Domain.Models
{
    public class Categoria : Entity
    {
        public string Nome { get; set; }
        public Categoria(string nome)
        {
            Nome = nome;
        }
    }
}