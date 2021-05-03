CREATE SCHEMA `meal_app`;
USE `meal_app`;

CREATE TABLE `meal` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `location` varchar(55) NOT NULL,
  `when` datetime NOT NULL,
  `max_reservations` int(11) NOT NULL,
  `price` decimal NOT NULL,
  `created_date` date,
   PRIMARY KEY(id)
);
DESCRIBE meal;

CREATE TABLE `reservation` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `number_of_guests` int(11) NOT NULL,
  `meal_id` int(11) unsigned NOT NULL,
  `created_date` date,
  `contact_phonenumber` varchar(20) NOT NULL,
  `contact_name` varchar(55) NOT NULL,
  `contact_email`  varchar(55) NOT NULL,  
   PRIMARY KEY(id),
   FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`)
   );
DESCRIBE reservation;

CREATE TABLE `review` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255),
  `description` text,
  `meal_id` int(11) unsigned NOT NULL,
  `stars` int NOT NULL,
  `created_date` date,  
   PRIMARY KEY(id),
   FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`)
   );
DESCRIBE review;  


--inserting meal values
INSERT INTO  meal(id, title, description, location, `when`, max_reservations, price, created_date) 
values(1, 'Homemade Italien pasta and dessert', 'Spinach ravioli with a fresh tomato sauce and Tiramisu', 'valby', '2021-01-29 18:00:00' ,'8','150', '2021-01-02');
INSERT INTO  meal(title, description, location, `when`, max_reservations, price, created_date) 
values('Chicken stew with appam', 'chicken stew with south indian pancake', 'bagsværd', '2021-01-30 09:00:00' ,'8','60', '2020-12-02');
INSERT INTO  meal(title, description, location, `when`, max_reservations, price, created_date)  values('Mexican Shrimp Tacos', 'crispy cheesy shrimp tacos and homemade salsa', 'brøndby', '2021-01-28 19:00:00' ,'8','120', '2021-01-01')
INSERT INTO  meal(title, description, location, `when`, max_reservations, price, created_date) 
values('Seafood Paella and Sangria', 'Seafood paella, a classic Spanish rice dish packed with seafood and loaded with flavor, and
White wine sangria, a popular Iberian beverage made with white wine and chopped fruit', 'kastrup', '2021-01-31 19:00:00' ,'6','160', '2021-01-11');
INSERT INTO  meal(title, description, location, `when`, max_reservations, price, created_date)
values('rød grød med flød', 'med jørbær', 'hvidovre','2021-01-29 09:05:00' , '8' ,'40', '2021-01-26');
INSERT INTO  meal(title, description, location, `when`, max_reservations, price, created_date)
values('Baklava and Sfouf Cake', 'Baklava which is pastry layered with chopped nuts and sweetened with syrup)
Sfouf Cake which is almond-semolina cake)', 'hedehusene','2021-02-14 09:05:00' , '8' ,'70', '2020-12-26');

--meal Queries

SELECT * FROM meal;
--Getting a meal with any id
SELECT * FROM meal
WHERE id = 2;
--Updating a meal with any id
UPDATE meal
SET title = 'Chicken stew with appam and flavoured tea', location='Rødvore'
WHERE id = 2;
--Deleting a meal with id
DELETE FROM meal 
WHERE id=6;


--inserting reservation values
INSERT INTO  reservation(id,number_of_guests, meal_id,created_date,contact_phonenumber,contact_name,contact_email) 
values(1, 4, 1, '2021-01-27', '1234567890','mette','mette@abc.com');
INSERT INTO  reservation(number_of_guests, meal_id,created_date,contact_phonenumber,contact_name,contact_email) 
values(5, 3, '2021-01-25', '3467567890','chris','chris@abc.com'),
(4, 2, '2021-01-26', '9876457921','katie','katie@abc.com'),
(2, 1, '2021-01-28', '8645329120','vivian','vivian@abc.com'),
(5, 4, '2021-01-23', '3467567890','jette','jette@abc.com');
--reservation Queries
SELECT * FROM reservation;

SELECT * FROM reservation
WHERE id = 4;

UPDATE reservation
SET number_of_guests= 5
WHERE id = 2;

DELETE FROM reservation 
WHERE id=6;

--Altering stars colum type in review
ALTER TABLE review MODIFY stars ENUM('1', '2','3','4','5');
--inserting review values
INSERT INTO  review(id, title, description, meal_id,  stars, created_date)  
values(1,'Great experience', 'the food turned out very delicious and tiramasu was delicious ', 1, '4', '2021-01-30');
INSERT INTO  review(title, description, meal_id,  stars, created_date)  
values(' perfect indian culinary experience', 'Delicious breakfast', 2, '5', '2021-01-31');
INSERT INTO  review(title, description, meal_id,  stars, created_date)  
values('Good paella! but not great ', 'could be better in taste', 4, '2', '2021-02-01');
INSERT INTO  review(title, description, meal_id,  stars, created_date)  
values('Good authentic tacos', 'The food was nicely plated and it all tasted fresh and seasoned well', 3, '3', '2021-01-29');
INSERT INTO  review(title, description, meal_id,  stars, created_date)  
values('fresh and healthy breakfast', 'enjoyed it with fresh berries', 5, '3', '2021-01-30');
INSERT INTO  review(title, description, meal_id,  stars, created_date)  
values('Good experience', 'Enjoyed tasting traditional indian food', 2, '4', '2021-01-30');

--review Queries
SELECT * FROM review
WHERE stars = '4';

UPDATE review
SET stars = '1'
WHERE id= 3;

DELETE FROM review 
WHERE title LIKE '%fresh and healthy%';
SELECT * FROM review;

                          --FUNCTIONALITY

--Getting meals that has a price smaller than a specific price fx 90
SELECT * FROM meal
WHERE price <= 100;

--Getting meals that still has available reservations
--getting no of available reservation spots left in meals after reserving.
SELECT meal.id,meal.title, meal.location, meal.when,max_reservations AS no_of_reservations,
SUM(reservation.number_of_guests) AS no_of_reservation_spots_booked,
(meal.max_reservations-SUM(reservation.number_of_guests)) AS no_of_reservation_spots_left
FROM meal 
JOIN reservation ON reservation.meal_id = meal.id
GROUP BY reservation.meal_id;

--getting the meals that are still available to be reserve.
SELECT * FROM meal
WHERE id NOT IN (SELECT meal_id FROM reservation);

 --Getting meals that partially match a title. 
SELECT * FROM meal
WHERE title LIKE '%rød grød%';

--Getting meals that has been created between two dates
SELECT * FROM meal
WHERE created_date BETWEEN '2020-12-01' AND '2021-01-10';

-- Getting only specific number of meals fx return only 5 meals
SELECT * FROM meal
LIMIT 5;

--Getting the meals that have good reviews
SELECT meal.title,stars, review.description
FROM meal
JOIN review
ON meal.id = review.meal_id
WHERE stars > '3';

--Getting reservations for a specific meal sorted by created_date
SELECT meal.title,location,`when`,max_reservations,number_of_guests,reservation.created_date
FROM meal
JOIN reservation
ON meal.id = reservation.meal_id
WHERE meal.title LIKE '%pasta%'
ORDER BY reservation.created_date;

-- Sort all meals by average number of stars in the reviews
SELECT meal.title, meal.description, AVG(stars) AS avg_review
FROM meal
JOIN review
ON meal.id = review.meal_id
GROUP BY meal_id
ORDER BY avg_review DESC;