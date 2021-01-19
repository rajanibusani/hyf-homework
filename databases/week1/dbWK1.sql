--1.Find out how many tasks are in the task table
SELECT count(0)
FROM task; 
--output: 35 rows

--2.Find out how many tasks in the task table do not have a valid due date
SELECT count(*) FROM task
WHERE due_date IS NULL;
--output:8 rows

--3-Find all the tasks that are marked as done
SELECT *
FROM task
INNER JOIN status
ON task.status_id = status.id
WHERE name = 'Done';
--output:12 rows 

--4.Find all the tasks that are not marked as done
SELECT *
FROM task
INNER JOIN status
ON task.status_id = status.id
WHERE name != 'Done';
--output:23 rows

--5.Get all the tasks, sorted with the most recently created first
SELECT *
FROM task
ORDER BY created DESC;
--output :35 rows 

--6.Get the single most recently created task
SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;
-- output:1 row

--7.Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date 
FROM task
WHERE title LIKE '%database%' OR description LIKE '%database%';
--output:5 rows

--8.Get the title and status (as text) of all tasks
SELECT task.title,status.name AS text 
FROM task
INNER JOIN status
ON task.status_id = status.id;
--output:35 rows


--9.Get the name of each status, along with a count of how many tasks have that status
SELECT count(*),status.name
FROM task
INNER JOIN status
ON task.status_id = status.id
GROUP BY status.name;
--output:3 rows


--10.Get the names of all statuses, sorted by the status with most tasks first
SELECT count(0),status.name
FROM task
INNER JOIN status
ON task.status_id = status.id
GROUP BY status.name
ORDER BY count(*) DESC;
--output:3 rows
