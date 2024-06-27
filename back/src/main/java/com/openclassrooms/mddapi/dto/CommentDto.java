package com.openclassrooms.mddapi.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommentDto {
    private Long id;

    @NotNull
    @Size(max = 2500)
    private String content;

    @NotNull
    private Long article_id;

    @NotNull
    private Long author_id;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
