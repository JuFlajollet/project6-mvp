package com.openclassrooms.mddapi.mappers;

import com.openclassrooms.mddapi.dto.ArticleDto;
import com.openclassrooms.mddapi.models.Article;
import com.openclassrooms.mddapi.models.Comment;
import com.openclassrooms.mddapi.models.Topic;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.services.TopicService;
import com.openclassrooms.mddapi.services.UserService;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@Mapper(componentModel = "spring", uses = { TopicService.class, UserService.class }, imports = {Optional.class, Collectors.class, Collections.class, Comment.class, Topic.class, User.class})
public abstract class ArticleMapper implements EntityMapper<ArticleDto, Article> {

    @Autowired
    TopicService topicService;
    @Autowired
    TopicMapper topicMapper;
    @Autowired
    UserService userService;
    @Autowired
    UserMapper userMapper;

    @Mappings({
            @Mapping(target = "topic", expression = "java(articleDto.getTopic_id() != null ? topicMapper.toEntity(this.topicService.findById(articleDto.getTopic_id())) : null)"),
            @Mapping(target = "author", expression = "java(articleDto.getAuthor_id() != null ? userMapper.toEntity(this.userService.findById(articleDto.getAuthor_id())) : null)"),
            @Mapping(target = "comments", ignore = true),
    })
    public abstract Article toEntity(ArticleDto articleDto);


    @Mappings({
            @Mapping(source = "article.topic.id", target = "topic_id"),
            @Mapping(source = "article.author.id", target = "author_id"),
            @Mapping(target = "comments", expression = "java(Optional.ofNullable(article.getComments()).orElseGet(Collections::emptyList).stream().map(comment -> comment.getId()).collect(Collectors.toList()))"),
    })
    public abstract ArticleDto toDto(Article article);
}
