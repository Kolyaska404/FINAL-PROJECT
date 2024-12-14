CREATE DATABASE my_database;

USE my_database;

CREATE TABLE submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    services VARCHAR(255),
    kind VARCHAR(255),
    goal VARCHAR(255),
    pages VARCHAR(255),
    functional VARCHAR(255),
    budget VARCHAR(255),
    material VARCHAR(255),
    urll VARCHAR(255),
    yes_no VARCHAR(255),
    username VARCHAR(255),
    marketName VARCHAR(255),
    phone VARCHAR(255)
);