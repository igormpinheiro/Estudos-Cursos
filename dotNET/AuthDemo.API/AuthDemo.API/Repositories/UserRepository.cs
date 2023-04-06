using AuthDemo.API.Models;

namespace AuthDemo.API.Repositories
{
    public static class UserRepository
    {
        public static User Get(string name, string password)
        {
            var user = new List<User>();
            user.Add(new User { Id = 1, Username = "Igor", Password = "1234", Role = "Admin" });
            user.Add(new User { Id = 2, Username = "Maria", Password = "1234", Role = "User" });

            return user.FirstOrDefault(p => p.Username == name && p.Password == password);
        }
    }
}
