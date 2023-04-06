using Flunt.Notifications;

namespace ConsCQRS.Domain.Models.Base
{
    public abstract class Entity : Notifiable<Notification>
    {
        public Guid Id { get; private set; }

        public Entity()
        {
            Id = Guid.NewGuid();
        }
    }
}