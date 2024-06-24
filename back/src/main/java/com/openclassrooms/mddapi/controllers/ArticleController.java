package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.dto.ArticleDto;
import com.openclassrooms.mddapi.services.ArticleService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/article")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @GetMapping(value = "", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<List<ArticleDto>> getArticles(){
        List<ArticleDto> articles = articleService.findAll();

        return ResponseEntity.ok().body(articles);
    }

    @PostMapping(value = "", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<ArticleDto> create(@Valid @RequestBody ArticleDto articleDto) {
        ArticleDto article = this.articleService.create(articleDto);

        return ResponseEntity.ok().body(article);
    }
}
