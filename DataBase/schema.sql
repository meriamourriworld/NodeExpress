-- CREATE DATABASE nodeexpress;

USE nodeexpress;

CREATE TABLE users
(
	id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(255),
    email varchar(255),
    password varchar(255)
)