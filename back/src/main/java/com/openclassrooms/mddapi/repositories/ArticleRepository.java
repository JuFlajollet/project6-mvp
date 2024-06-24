package com.openclassrooms.mddapi.repositories;

import com.openclassrooms.mddapi.models.Article;
import com.openclassrooms.mddapi.models.Topic;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Long> {
}
