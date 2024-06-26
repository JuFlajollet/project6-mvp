package com.openclassrooms.mddapi.mappers;

import com.openclassrooms.mddapi.dto.CommentDto;
import com.openclassrooms.mddapi.models.Article;
import com.openclassrooms.mddapi.models.Comment;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.services.ArticleService;
import com.openclassrooms.mddapi.services.UserService;
import org.mapstruct.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Mapper(componentModel = "spring", uses = {ArticleService.class, UserService.class}, imports = {Article.class, User.class}, builder = @Builder(disableBuilder = true))
public abstract class CommentMapper implements EntityMapper<CommentDto, Comment> {

    @Autowired
    ArticleService articleService;
    @Autowired
    ArticleMapper articleMapper;
    @Autowired
    UserService userService;
    @Autowired
    UserMapper userMapper;

    @Mappings({
            @Mapping(target = "article", ignore = true),
            @Mapping(target = "author", expression = "java(commentDto.getAuthor_id() != null ? userMapper.toEntity(this.userService.findById(commentDto.getAuthor_id())) : null)"),
    })
    public abstract Comment toEntity(CommentDto commentDto);


    @Mappings({
            @Mapping(source = "comment.article.id", target = "article_id"),
            @Mapping(source = "comment.author.id", target = "author_id"),
    })
    public abstract CommentDto toDto(Comment comment);

    @AfterMapping
    protected void setArticle(@MappingTarget Comment comment, CommentDto commentDto) {
        comment.setArticle(articleMapper.toEntity(articleService.findById(commentDto.getArticle_id())));
    }
}
