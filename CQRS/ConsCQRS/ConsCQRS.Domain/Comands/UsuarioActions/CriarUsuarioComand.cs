using MediatR;

namespace ConsCQRS.Domain.Comands.UsuarioActions
{
    public class CriarUsuarioComand : IRequest<Response>
    {
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
    }
}