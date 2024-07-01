package com.openclassrooms.mddapi.payload.request;

import com.openclassrooms.mddapi.validators.PasswordConstraint;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegisterRequest {
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @NotBlank
    @Size(min = 3, max = 40)
    private String username;

    @PasswordConstraint
    private String password;
}
