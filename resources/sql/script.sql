CREATE TABLE `TOPICS` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100),
  `description` VARCHAR(3000),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `USERS` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `username` VARCHAR(100),
  `email` VARCHAR(255),
  `password` VARCHAR(255),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `ARTICLES` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(100),
  `content` VARCHAR(3000),
  `date` TIMESTAMP,
  `author_id` int,
  `topic_id` int,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `COMMENTS` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `content` VARCHAR(3000),
  `author_id` int,
  `article_id` int,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `SUBSCRIBE` (
  `user_id` INT, 
  `topic_id` INT
);

ALTER TABLE `ARTICLES` ADD FOREIGN KEY (`author_id`) REFERENCES `USERS` (`id`);
ALTER TABLE `ARTICLES` ADD FOREIGN KEY (`topic_id`) REFERENCES `TOPICS` (`id`);
ALTER TABLE `COMMENTS` ADD FOREIGN KEY (`article_id`) REFERENCES `ARTICLES` (`id`);
ALTER TABLE `SUBSCRIBE` ADD FOREIGN KEY (`user_id`) REFERENCES `USERS` (`id`);
ALTER TABLE `SUBSCRIBE` ADD FOREIGN KEY (`topic_id`) REFERENCES `TOPICS` (`id`);

INSERT INTO TOPICS (title, description)
VALUES ('Java', 'Object-Oriented Programming Language'),
       ('Angular', 'Typescript Web Framework');

INSERT INTO USERS (username, email, password)
VALUES ('Test', 'test@gmail.com', '$2a$10$TtvgboXV.LyOWWKd/icCxuh8XfTF2foRkB8DH3MPvJKBJz9kqiWhq');

INSERT INTO ARTICLES (title, content, date, author_id, topic_id)
VALUES ('Le Framework Angular', 'Angular v2 est une plateforme front-end pour les applications web. Elle est open source et a été dévelopée par Google. La v2 a été complètememnt revue par la même équipe qui a mis en place AngularJS.', now(), 1, 1);

INSERT INTO COMMENTS (content, author_id, article_id)
VALUES ('Excellent article! A quand la suite?', 1, 1);