package com.openclassrooms.mddapi.mappers;

import com.openclassrooms.mddapi.dto.ArticleDto;
import com.openclassrooms.mddapi.dto.TopicDto;
import com.openclassrooms.mddapi.dto.UserDto;
import com.openclassrooms.mddapi.models.Article;
import com.openclassrooms.mddapi.models.Topic;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.services.TopicService;
import com.openclassrooms.mddapi.services.UserService;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Mapper(componentModel = "spring", uses = {TopicService.class, UserService.class}, imports = {Topic.class, User.class})
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
    })
    public abstract Article toEntity(ArticleDto articleDto);


    @Mappings({
            @Mapping(source = "article.topic.id", target = "topic_id"),
            @Mapping(source = "article.author.id", target = "author_id"),
    })
    public abstract ArticleDto toDto(Article article);
}
