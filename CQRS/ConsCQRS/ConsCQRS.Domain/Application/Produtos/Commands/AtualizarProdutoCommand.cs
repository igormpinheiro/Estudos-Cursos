using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsCQRS.Domain.Application.Produtos.Commands
{
    public class AtualizarProdutoCommand : ProdutoCommand
    {
        public Guid Id { get; set; }
    }
}
