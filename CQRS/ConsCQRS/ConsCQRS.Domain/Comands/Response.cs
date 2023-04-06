using Flunt.Notifications;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsCQRS.Domain.Comands
{
    public class Response
    {
        public bool Success { get; private set; }
        public object? Data { get; private set; }
        public IEnumerable<Notification> Notifications { get; private set; }

        public Response(Notifiable<Notification> notifications, object data)
        {
            Notifications = notifications.Notifications;
            Success = notifications.IsValid;
            Data = data;
        }

        public Response(Notifiable<Notification> notifications)
        {
            Notifications = notifications.Notifications;
            Success = notifications.IsValid;
        }

        //public void SetResult<TData>(TData data) where TData : class;
    }
}
