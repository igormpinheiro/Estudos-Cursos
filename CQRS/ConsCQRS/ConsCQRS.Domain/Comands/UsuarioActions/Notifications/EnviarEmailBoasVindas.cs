using MediatR;
using System.Diagnostics;

namespace ConsCQRS.Domain.Comands.UsuarioActions.Notifications
{
    public class EnviarEmailBoasVindas : INotificationHandler<CriarUsuarioNotification>
    {
        public async Task Handle(CriarUsuarioNotification notification, CancellationToken cancellationToken)
        {
            Debug.WriteLine("Enviando email de boas vindas para o usuário " + notification.usuario.Nome);
        }
    }
}