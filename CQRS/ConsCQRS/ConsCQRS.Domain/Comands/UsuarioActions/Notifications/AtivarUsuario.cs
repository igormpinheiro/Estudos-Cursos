using MediatR;
using System.Diagnostics;

namespace ConsCQRS.Domain.Comands.UsuarioActions.Notifications
{
    public class AtivarUsuario : INotificationHandler<CriarUsuarioNotification>
    {
        public async Task Handle(CriarUsuarioNotification notification, CancellationToken cancellationToken)
        {
            Debug.WriteLine("Ativando usuário " + notification.usuario.Nome);
        }
    }
}