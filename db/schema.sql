  
CREATE DATABASE IF NOT EXISTS food_db;
USE food_db;

DROP TABLE IF EXISTS food;

CREATE TABLE food (
    id int NOT NULL AUTO_INCREMENT,
    food_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);