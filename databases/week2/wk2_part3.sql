--Getting all the tasks assigned to users whose email ends in @spotify.com
SELECT name AS user, title AS task
FROM user_task
INNER JOIN task
ON user_task.task_id= task.id
INNER JOIN user
ON user_task.user_id= user.id
WHERE email LIKE '%@spotify.com';
--4 rows returned.

--Getting all the tasks for 'Donald Duck' with status 'Not started'
SELECT user.name AS user, title AS task,status.name AS status
FROM user_task
INNER JOIN task
ON user_task.task_id= task.id
INNER JOIN status
ON task.status_id = status.id
INNER JOIN user
ON user_task.user_id= user.id
WHERE user.name = 'Donald Duck' AND status.name = 'Not started';
--2 rows returned.

--Getting all the tasks for 'Maryrose Meadows' that were created in september.
SELECT name AS user, title AS task
FROM user_task
INNER JOIN task
ON user_task.task_id= task.id
INNER JOIN user
ON user_task.user_id= user.id
WHERE user.name = 'Maryrose Meadows' AND month(created)=09;
--2 rows returned.

--Finding how many tasks where created in each month.
SELECT count(0),monthname(created)
FROM task
GROUP BY monthname(created);
--2 rows returned.