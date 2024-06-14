package com.openclassrooms.mddapi.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class TopicDTO {
    private Long id;

    @NotBlank
    @Size(max = 50)
    private String name;

    @NotNull
    @Size(max = 2500)
    private String description;
}
