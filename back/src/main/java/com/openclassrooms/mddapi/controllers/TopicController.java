package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.dto.TopicDTO;
import com.openclassrooms.mddapi.services.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/topic")
public class TopicController {

    @Autowired
    private TopicService topicService;

    @GetMapping("")
    public ResponseEntity<List<TopicDTO>> getTopics(){
        List<TopicDTO> topics = topicService.findAll();

        return ResponseEntity.ok().body(topics);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TopicDTO> getTopic(@PathVariable("id") String id){
        TopicDTO topic = topicService.findById(Long.valueOf(id));

        return ResponseEntity.ok().body(topic);
    }
}
