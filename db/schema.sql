DROP DATABASE IF EXISTS tracker_DB;
CREATE database tracker_DB;

USE tracker_DB;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)

);

CREATE TABLE role (
id INT NOT NULL,
title VARCHAR(30),
salary DECIMAL(10,2),
department_id INT NOT NULL,
PRIMARY KEY (id)


);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30), NOT NULL,
role_id INT NOT NULL,
manager_id INT DEFAULT NULL,


);