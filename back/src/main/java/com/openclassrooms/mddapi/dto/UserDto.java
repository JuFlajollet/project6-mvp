package com.openclassrooms.mddapi.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.openclassrooms.mddapi.validators.PasswordConstraint;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Long id;

    @NonNull
    @Size(max = 30)
    private String username;

    @NonNull
    @Size(max = 50)
    @Email
    private String email;

    @JsonIgnore
    @PasswordConstraint
    private String password;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
