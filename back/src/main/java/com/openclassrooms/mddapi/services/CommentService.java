package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.dto.CommentDto;
import com.openclassrooms.mddapi.mappers.CommentMapper;
import com.openclassrooms.mddapi.models.Comment;
import com.openclassrooms.mddapi.repositories.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private CommentMapper commentMapper;

    public List<CommentDto> findAll() {
        List<Comment> comments = this.commentRepository.findAll();

        return commentMapper.toDto(comments);
    }

    public CommentDto findById(Long id){
        Comment comment = this.commentRepository.findById(id).orElse(null);

        if(comment != null) {
            return commentMapper.toDto(comment);
        }

        return null;
    }

    public List<CommentDto> findByArticleId(Long articleId){
        List<Comment> comments = this.commentRepository.findByArticleId(articleId);

        return commentMapper.toDto(comments);
    }

    public CommentDto create(CommentDto commentDto) {
        Comment comment = commentMapper.toEntity(commentDto);

        Comment savedComment = this.commentRepository.save(comment);

        return commentMapper.toDto(savedComment);
    }
}
