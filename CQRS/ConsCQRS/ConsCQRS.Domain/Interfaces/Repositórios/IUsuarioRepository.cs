using ConsCQRS.Domain.Models;
using System.ComponentModel;

namespace ConsCQRS.Domain.Interfaces.Repositórios
{
    public interface IUsuarioRepository
    {
        Usuario ObterPorEmail(string email);
        Usuario Add(Usuario usuario);
    }
}