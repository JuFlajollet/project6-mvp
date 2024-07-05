package com.openclassrooms.mddapi.mappers;

import com.openclassrooms.mddapi.dto.TopicDto;
import com.openclassrooms.mddapi.models.Topic;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.services.TopicService;
import com.openclassrooms.mddapi.services.UserService;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Collections;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@Mapper(componentModel = "spring", uses = {UserService.class, UserMapper.class}, imports = {Arrays .class, Collectors .class, Topic.class, User.class, Collections .class, Optional .class})
public abstract class TopicMapper implements EntityMapper<TopicDto, Topic> {

    @Autowired
    UserService userService;
    @Autowired
    UserMapper userMapper;

    @Mappings({
        @Mapping(target = "users", expression = "java(Optional.ofNullable(topicDto.getUsers()).orElseGet(Collections::emptyList).stream().map(userId -> { User user = userMapper.toEntity(this.userService.findById(userId)); if (user != null) { return user; } return null; }).collect(Collectors.toList()))"),
    })
    public abstract Topic toEntity(TopicDto topicDto);


    @Mappings({
        @Mapping(target = "users", expression = "java(Optional.ofNullable(topic.getUsers()).orElseGet(Collections::emptyList).stream().map(user -> user.getId()).collect(Collectors.toList()))"),
    })
    public abstract TopicDto toDto(Topic topic);
}
