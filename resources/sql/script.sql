CREATE TABLE `TOPICS` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(50),
  `description` VARCHAR(2000),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO TOPICS (name, description)
VALUES ('Java', 'Object-Oriented Programming Language'),
       ('Angular', 'Typescript Web Framework');