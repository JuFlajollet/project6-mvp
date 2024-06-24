package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.dto.TopicDto;
import com.openclassrooms.mddapi.services.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/topic")
public class TopicController {

    @Autowired
    private TopicService topicService;

    @GetMapping(value = "", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<List<TopicDto>> getTopics(){
        List<TopicDto> topics = topicService.findAll();

        return ResponseEntity.ok().body(topics);
    }

    @GetMapping(value = "/{id}", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<TopicDto> getTopic(@PathVariable("id") String id){
        try {
            TopicDto topic = topicService.findById(Long.valueOf(id));

            return ResponseEntity.ok().body(topic);
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("{id}/subscribe/{userId}")
    public ResponseEntity<?> subscribe(@PathVariable("id") String id, @PathVariable("userId") String userId) {
        try {
            this.topicService.subscribe(Long.parseLong(id), Long.parseLong(userId));

            return ResponseEntity.ok().build();
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("{id}/subscribe/{userId}")
    public ResponseEntity<?> unsubscribe(@PathVariable("id") String id, @PathVariable("userId") String userId) {
        try {
            this.topicService.unsubscribe(Long.parseLong(id), Long.parseLong(userId));

            return ResponseEntity.ok().build();
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
