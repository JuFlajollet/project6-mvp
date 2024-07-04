package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.dto.TopicDto;
import com.openclassrooms.mddapi.exception.NotFoundException;
import com.openclassrooms.mddapi.exception.BadRequestException;
import com.openclassrooms.mddapi.mappers.TopicMapper;
import com.openclassrooms.mddapi.models.Topic;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.repositories.TopicRepository;
import com.openclassrooms.mddapi.repositories.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TopicService {

    @Autowired
    private TopicRepository topicRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TopicMapper topicMapper;

    public List<TopicDto> findAll() {
        List<Topic> topics = this.topicRepository.findAll();

        return topicMapper.toDto(topics);
    }

    public List<TopicDto> findAllSubscribed(Long userId) {
        List<Topic> topics = this.topicRepository.findAll().stream().filter(topic -> topic.getUsers().stream().anyMatch(user -> user.getId().equals(userId))).collect(Collectors.toList());

        return topicMapper.toDto(topics);
    }

    public TopicDto findById(Long id) {
        Topic topic = this.topicRepository.findById(id).orElse(null);

        return topicMapper.toDto(topic);
    }

    public void subscribe(Long id, Long userId) {
        Topic topic = this.topicRepository.findById(id).orElse(null);
        User user = this.userRepository.findById(userId).orElse(null);

        if (topic == null || user == null) {
            throw new NotFoundException();
        }

        boolean alreadySubscribed = topic.getUsers().stream().anyMatch(subscriber -> subscriber.getId().equals(userId));

        if(alreadySubscribed) {
            throw new BadRequestException();
        }

        topic.getUsers().add(user);

        this.topicRepository.save(topic);

    }

    public void unsubscribe(Long id, Long userId) {
        Topic topic = this.topicRepository.findById(id).orElse(null);

        if (topic == null) {
            throw new EntityNotFoundException();
        }

        boolean alreadySubscribed = topic.getUsers().stream().anyMatch(user -> user.getId().equals(userId));

        if(!alreadySubscribed) {
            throw new BadRequestException();
        }

        topic.setUsers(topic.getUsers().stream().filter(user -> !user.getId().equals(userId)).collect(Collectors.toList()));

        this.topicRepository.save(topic);
    }
}
