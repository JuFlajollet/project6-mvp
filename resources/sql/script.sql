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

INSERT INTO TOPICS (name, description)
VALUES ('Java', 'Object-Oriented Programming Language'),
       ('Angular', 'Typescript Web Framework');

INSERT INTO USERS (username, email, password)
VALUES ('Test', 'test@gmail.com', 'Test12345!');