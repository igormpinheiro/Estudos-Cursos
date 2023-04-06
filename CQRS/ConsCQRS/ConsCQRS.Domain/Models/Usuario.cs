using ConsCQRS.Domain.Models.Base;

namespace ConsCQRS.Domain.Models
{
    public class Usuario : Entity
    {
        public Usuario(string nome, string email, string senha)
        {
            Nome = nome;
            Email = email;
            Senha = senha;
            Ativo = false;
            DataCadastro = DataAtualizacao = DateTime.Now;
        }

        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public bool Ativo { get; set; }
        public DateTime DataCadastro { get; set; }
        public DateTime DataAtualizacao { get; set; }
    }
}