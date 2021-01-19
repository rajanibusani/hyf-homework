--Adding a task with these attributes: title, description, created, updated, due_date, status_id, user_id
SELECT * FROM task;
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
 VALUES('learn database-MySql', 'Learn how to insert values into tables', NOW(),NOW(),
 '2021-02-10 11:10:00','2','1');
 -- Changing the title of a task
UPDATE task
SET title = 'Look for apartments in Glostrup'
WHERE id= 25;
-- Changing due_date of a task
UPDATE task
SET due_date = '2023-2-23 12:00:00'
WHERE title = 'Become a billionaire';
--Changing status of a task
UPDATE task
SET status_id = '2'
WHERE title = 'Do HackYourFuture homework' AND user_id = '3';
--UPDATE task
UPDATE task
SET status_id = '3'
WHERE title = 'Order groceries online' AND user_id = '1';
--Deleting a task
DELETE FROM task
WHERE id = 34;
