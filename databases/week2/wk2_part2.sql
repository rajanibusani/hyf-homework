--creating database
CREATE DATABASES WK2_PART2;
USE WK2_PART2;

--creating table ´class´
CREATE TABLE class(
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
 name varchar(255) NOT NULL, 
 begins_date DATE,
 ends_date DATE);
 DESCRIBE class;
 --creating table `student`
 CREATE TABLE student(
 id INT(10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT, 
 name VARCHAR(255) NOT NULL, 
 email VARCHAR(50),
 phone INT(10),
 class_id INT(10) NOT NULL,
 FOREIGN KEY student(class_id) REFERENCES class(id)
 );
 DESCRIBE student;
--Creating index on name column in student table 
CREATE INDEX idx_sname
ON student (name);
--Adding a column in class table.
ALTER TABLE class
ADD status ENUM('not-started', 'ongoing', 'finished');
SELECT * FROM class;