package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.dto.ArticleDto;
import com.openclassrooms.mddapi.dto.CommentDto;
import com.openclassrooms.mddapi.services.ArticleService;
import com.openclassrooms.mddapi.services.CommentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/articles")
public class ArticleController {

    @Autowired
    private ArticleService articleService;
    @Autowired
    private CommentService commentService;

    @GetMapping(value = "", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<List<ArticleDto>> getArticles(){
        List<ArticleDto> articles = articleService.findAll();

        return ResponseEntity.ok().body(articles);
    }

    @GetMapping(value = "/sort/{sortType}", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<List<ArticleDto>> getArticlesSorted(@PathVariable("sortType") String sortType){
        List<ArticleDto> articles = articleService.findAllSorted(sortType);

        return ResponseEntity.ok().body(articles);
    }

    @GetMapping(value = "/{id}", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<ArticleDto> getArticle(@PathVariable("id") String id){
        ArticleDto article = articleService.findById(Long.valueOf(id));

        if (article == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(article);
    }

    @PostMapping(value = "", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<ArticleDto> create(@Valid @RequestBody ArticleDto articleDto) {
        ArticleDto article = this.articleService.create(articleDto);

        return ResponseEntity.ok().body(article);
    }

    @GetMapping(value = "/{id}/comments", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<List<CommentDto>> getComments(@PathVariable("id") String articleId) {
        List<CommentDto> comments = this.commentService.findByArticleId(Long.valueOf(articleId));

        return ResponseEntity.ok().body(comments);
    }

    @PostMapping(value = "/{id}/comments", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<CommentDto> createComment(@Valid @RequestBody CommentDto commentDto) {
        CommentDto comment = this.commentService.create(commentDto);

        return ResponseEntity.ok().body(comment);
    }
}
