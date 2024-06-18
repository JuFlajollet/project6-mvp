package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.dto.TopicDTO;
import com.openclassrooms.mddapi.mappers.TopicMapper;
import com.openclassrooms.mddapi.models.Topic;
import com.openclassrooms.mddapi.repositories.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicService {

    @Autowired
    private TopicRepository topicRepository;
    @Autowired
    private TopicMapper topicMapper;

    public List<TopicDTO> findAll() {
        List<Topic> topics = this.topicRepository.findAll();

        return topicMapper.toDto(topics);
    }

    public TopicDTO findById(Long id) {
        Topic topic = this.topicRepository.findById(id).orElse(null);

        return topicMapper.toDto(topic);
    }

    public void subscribe(Long id, Long userId) {
        //TODO: Implement once user feature done
    }

    public void unsubscribe(Long id, Long userId) {
        //TODO: Implement once user feature done
    }
}
