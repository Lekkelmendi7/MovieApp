﻿namespace MoviesAPI.DTOs
{
    public class PasswordResetRequest
    {
        public string Email { get; set; }
        public string NewPassword { get; set; }
    }
}
