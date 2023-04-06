using ConsCQRS.Domain.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsCQRS.Domain.Application.Produtos.Queries
{
    public class ObterProdutoPorIdQuery : IRequest<Produto>
    {
        public Guid Id { get; set; }

        public ObterProdutoPorIdQuery(Guid id)
        {
            Id = id;
        }
    }
    
}
