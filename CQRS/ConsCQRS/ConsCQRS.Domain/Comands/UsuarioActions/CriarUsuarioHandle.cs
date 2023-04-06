using ConsCQRS.Domain.Interfaces.Repositórios;
using ConsCQRS.Domain.Models;
using Flunt.Notifications;
using MediatR;

namespace ConsCQRS.Domain.Comands.UsuarioActions
{
    public class CriarUsuarioHandle : Notifiable<Notification>, IRequestHandler<CriarUsuarioComand, Response>
    {
        private readonly IMediator _medtr;
        private readonly IUsuarioRepository _rep;

        public CriarUsuarioHandle(IUsuarioRepository repository, IMediator medtr)
        {
            _rep = repository;
            _medtr = medtr;
        }

        public async Task<Response> Handle(CriarUsuarioComand request, CancellationToken cancellationToken)
        {
            if (request is null)
            {
                AddNotification(nameof(request), "Requisição inválida");
                return new Response(this);
            }

            var usuarioExistente = _rep.ObterPorEmail(request.Email);
            
            if(usuarioExistente != null)
            {
                AddNotification(nameof(request), "Usuario existente");
                return new Response(this);
            }

            var novoUsuario = new Usuario(request.Nome, request.Email, request.Senha);
            AddNotifications(novoUsuario);

            if (!IsValid)
                return new Response(this);

            var usuario = _rep.Add(novoUsuario);

            var response = new Response(this, usuario);

            await _medtr.Publish(new CriarUsuarioNotification(usuario));

            return await Task.FromResult(response);

        }
    }
}