namespace MoviesAPI.DTOs
{
    public class AuthenticationReponse
    {
        public string Token { get; set; }   
        public DateTime Expiration { get; set; }    
    }
}
