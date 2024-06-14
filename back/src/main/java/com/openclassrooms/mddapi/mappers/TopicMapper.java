package com.openclassrooms.mddapi.mappers;

import com.openclassrooms.mddapi.dto.TopicDTO;
import com.openclassrooms.mddapi.models.Topic;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface TopicMapper {
    Topic toEntity(TopicDTO dto);

    TopicDTO toDto(Topic entity);

    List<Topic> toEntity(List<TopicDTO> dtoList);

    List<TopicDTO> toDto(List<Topic> entityList);
}
