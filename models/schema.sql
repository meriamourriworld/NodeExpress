
-- CREATE DATABASE nodeexpress;

USE nodeexpress;

CREATE TABLE users
(
	id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(255),
    email varchar(255),
    password varchar(255)
);

INSERT INTO users(name, email, pass) values("Meriam Ourri", "ourrimeriam@gmail.com", "123456"); 
INSERT INTO users(name, email, pass) values("Zakaria Zyat", "z.zyat@gmail.com", "123456"); 
INSERT INTO users(name, email, pass) values("Hajar Jebbari", "hajar.jebbari@gmail.com", "123456"); 
INSERT INTO users(name, email, pass) values("Sanaa Amrani", "s.amrani@gmail.com", "123456"); 