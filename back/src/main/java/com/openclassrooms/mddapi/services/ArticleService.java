package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.dto.ArticleDto;
import com.openclassrooms.mddapi.dto.UserDto;
import com.openclassrooms.mddapi.exception.BadRequestException;
import com.openclassrooms.mddapi.mappers.ArticleMapper;
import com.openclassrooms.mddapi.models.Article;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.repositories.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ArticleService {

    @Autowired
    private ArticleRepository articleRepository;
    @Autowired
    private ArticleMapper articleMapper;

    public List<ArticleDto> findAll() {
        List<Article> articles = this.articleRepository.findAll();

        return articleMapper.toDto(articles);
    }

    public List<ArticleDto> findAllSorted(String sortType) {
        List<Article> articles = new ArrayList<>();

        if (!(sortType.equalsIgnoreCase("asc") || sortType.equalsIgnoreCase("desc"))){
            throw new BadRequestException();
        }

        if(sortType.equalsIgnoreCase("asc")) {
            articles = this.articleRepository.findAll(Sort.by("date").ascending());
        } else {
            articles = this.articleRepository.findAll(Sort.by("date").descending());
        }

        return articleMapper.toDto(articles);
    }

    public ArticleDto findById(Long id){
        Article article = this.articleRepository.findById(id).orElse(null);

        if(article != null) {
            return articleMapper.toDto(article);
        }

        return null;
    }

    public ArticleDto create(ArticleDto articleDto) {
        Article article = articleMapper.toEntity(articleDto);

        Article savedArticle = this.articleRepository.save(article);

        return articleMapper.toDto(savedArticle);
    }
}
