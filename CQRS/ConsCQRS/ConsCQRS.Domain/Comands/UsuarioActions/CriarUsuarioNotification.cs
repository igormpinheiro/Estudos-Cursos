using ConsCQRS.Domain.Models;
using MediatR;

namespace ConsCQRS.Domain.Comands.UsuarioActions
{
    public class CriarUsuarioNotification : INotification
    {
        public Usuario usuario { get; private set; }

        public CriarUsuarioNotification(Usuario usuario)
        {
            this.usuario = usuario;
        }
    }
}