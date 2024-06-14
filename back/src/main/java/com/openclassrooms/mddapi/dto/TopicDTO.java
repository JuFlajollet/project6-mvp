package com.openclassrooms.mddapi.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class TopicDTO {
    private Long id;

    @NotBlank
    @Size(max = 50)
    private String name;

    @NotNull
    @Size(max = 2500)
    private String description;
}
