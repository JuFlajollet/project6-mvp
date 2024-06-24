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

INSERT INTO TOPICS (name, description)
VALUES ('Java', 'Object-Oriented Programming Language'),
       ('Angular', 'Typescript Web Framework');

INSERT INTO USERS (username, email, password)
VALUES ('Test', 'test@gmail.com', 'Test12345!');

INSERT INTO ARTICLES (title, content, date, author_id, topic_id)
VALUES ('Le Framework Angular', 'Angular v2 est une plateforme front-end pour les applications web. Elle est open source et a été dévelopée par Google. La v2 a été complètememnt revue par la même équipe qui a mis en place AngularJS.', now(), 1, 1);